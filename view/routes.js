var express = require('express')
var router = express.Router()
const funciones = require("../controller/functions.js")

router.get('/movies', funciones.mostrar);

module.exports = router;