const { json, response } = require("express");
const metodo = require("../model/methods.js");
const exits = require("../controller/exits.js")

async function mostrar() {
    var resp = await metodo.todos();
    return resp;
}

async function movieforid(id) {
    try {
        let resp = await metodo.movieforid(id);
        return exits.convert(resp);
    } catch (error) {
        return exits.converterror(error.message);
    }
}
async function createmovie(name, gender, year) {
    try {
        let resp = await metodo.createmovie(name, gender, year);
        return exits.convert(resp);
    } catch (error) {
        return exits.converterror(error.message)
    }
}

async function update(id, name, gender, year) {
    try {
        let resp = await metodo.update(id, name, gender, year);
        return exits.convert(resp);
    } catch (error) {
        return exits.converterror(error.message)
    }
}

async function deletemovie(id) {
    try {
        let resp = await metodo.deletemovie(id);
        return exits.convert(resp);
    } catch (error) {
        return exits.converterror(error.message)
    }
}

module.exports = {
    mostrar: mostrar,
    movieforid,
    createmovie,
    update,
    deletemovie
}
