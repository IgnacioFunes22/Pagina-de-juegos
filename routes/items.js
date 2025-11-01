const express = require('express');
const router = express.Router();

//json
const itemsJuegos = require('../json/data.json');

// GET ITEMS
router.get('/', (req, res) => {
    res.send(itemsJuegos);
});

module.exports = router;