var express = require('express');
var router = express.Router();
const funciones = require("../controller/functions.js");
const validations = require("../controller/validations.js");
const exits = require("../controller/exits.js")

router.get("/allmovies", async function (req, res) {
    const data = await funciones.mostrar();
    res.status(200).json(exits.convert(data));
})

router.get("/movieforid/:id", validations.validate(validations.validationforid), async function (req, res) {
    const { id } = req.params;
    const data = await funciones.movieforid(id);
    res.send(data);
})

router.post("/create", validations.validate2(validations.validateforcreate), async function (req, res) {
    const { name, gender, year } = req.body;
    const data = await funciones.createmovie(name, gender, year);
    res.send(data);
})

router.put("/update/:id", validations.validate2(validations.validateforcreate), async function (req, res) {
    const { id } = req.params;
    const { name, gender, year } = req.body;
    const data = await funciones.update(id, name, gender, year);
    res.send(data);
})

router.delete("/delete/:id", validations.validate(validations.validationforid), async function (req, res) {
    const { id } = req.params;
    const data = await funciones.deletemovie(id);
    res.send(data);
})

module.exports = router;