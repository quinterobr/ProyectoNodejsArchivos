const metodo = require("../modell/methods.js")
exports.mostrar = (req, res) => {
    metodo.mostrar().then(data => {
        res.status(200).sen(data)
    }).catch(error => {
        res.status(502).send({ message: `error leyendo el archivo ${error}` })
    })
}