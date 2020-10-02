var express = require('express')
var router = express.Router()
const funciones = require("../controller/functions.js")

router.get('/movies', funciones.mostrar, (req, resp) => {
    resp.send(req.body.mostrar);
});

module.exports = router;