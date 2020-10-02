const metodo = require("../modell/methods.js")

exports.mostrar = (req, res) => {
    const movies = metodo.todos();
    res.send(movies);
}