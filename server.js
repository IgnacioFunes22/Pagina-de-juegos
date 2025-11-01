//  No es necesario que instalen las dependencias mongoose y mongodb
// las demas dependencias si son necesarias y se instalan con la terminal poniendo el comando npm i nombreDependencia
// es importante que la dependencia nodemon se instale con el comando npm i --save-dev nodemon
const express = require('express');
const server = express();
const cors = require('cors');

// Import Routes
const itemsRouts = require('./routes/items');

// Middleware
server.use(cors());
server.use(express.json());

server.use('/items', itemsRouts);

// Rutas
server.get('/', (req, res) => { //get remplaza los metodos de http (get, post, delete, etc)
    res.send('HOLA MUNDO!!');
});


//Start
server.listen(4000);