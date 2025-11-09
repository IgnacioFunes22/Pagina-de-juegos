// como lo hace: https://www.youtube.com/watch?v=JmJ1WUoUIK4&t=146s
//  No es necesario que instalen las dependencias mongoose y mongodb
// las demas dependencias si son necesarias y se instalan con la terminal poniendo el comando npm i nombreDependencia
// es importante que la dependencia nodemon se instale con el comando npm i --save-dev nodemon
const express = require("express");
const morgan = require("morgan");
const app = express();
const cors = require("cors");
const path = require("path");
require("ejs");

// setting
app.set("port", 4000);
app.set("case sensitive routing", true);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Import Routes
const itemsRouts = require("./routes/games");
const visualRouts = require("./routes/visual");
const infoRouts = require("./routes/info");
const colectionRouts = require("./routes/colecion");

// Middleware
//app.use(morgan());
app.use(cors());
app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));

// Rutas
app.use("/api/v1/games", itemsRouts);
app.use("/IndieGameReviews", visualRouts);
app.use("/Informacion", infoRouts);
app.use("/colecciones", colectionRouts);

app.use((req, res) => {
  res.status(404).send("ERROR 404 No se encontro la pagina");
});

/*
app.get('/', (req, res) => { //get remplaza los metodos de http (get, post, delete, etc)
    res.send('HOLA MUNDO!!');
});

const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) =>{
    const read = fs.createReadStream('.index.html')
    read.pipe(res)
})
*/

//Start

app.listen(app.get("port"));
