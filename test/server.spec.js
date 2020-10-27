const functions = require("../controller/functions.js")
    , chai = require('chai')
    , expect = require("chai").expect
    , spies = require('chai-spies')
    , metodos = require('../model/methods.js');

chai.use(spies);
const spybyid = chai.spy(functions.movieforid()),//llamar la funcion original dentro de un spy
    spycreate = chai.spy(functions.createmovie()),
    spyupdate = chai.spy(functions.update()),
    spydelete = chai.spy(functions.deletemovie());


describe('mostrar test', () => {
    let mostrar;
    beforeEach(() => {
        mostrar = () => functions.mostrar();
    });
    it("mostrar whith mocks return true", async () => {
        result = mostrar();
        expect(result).to.exist;
    });
    afterEach(() => {
        mostrar = null;
    });
})

describe('Movie for id test', () => {
    let movieforid;
    beforeEach(() => {
        movieforid = () => functions.movieforid();
    });
    it("call movie for id with spy", async () => {
        result = spybyid;
        expect(result).to.be.spy;
    });
    afterEach(() => {
        movieforid = null;
    });
})

describe('createmovie test', () => {
    let createmovie;
    beforeEach(() => {
        createmovie = () => functions.createmovie();
    });
    it("call createmovie with spy", async () => {
        result = spycreate;
        expect(result).to.be.spy;
    });
    afterEach(() => {
        createmovie = null;
    });
})

describe('updatemovie test', () => {
    let updatemovie;
    beforeEach(() => {
        updatemovie = () => functions.update();
    });
    it("call updatemovie with spy", async () => {
        result = spyupdate;
        expect(result).to.be.spy;
    });
    afterEach(() => {
        updatemovie = null;
    });
})

describe('deletemovie test', () => {
    let deletemovie;
    beforeEach(() => {
        deletemovie = () => functions.deletemovie();
    });
    it("call deletemovie with spy", async () => {
        result = spydelete;
        expect(result).to.be.spy;
    });
    afterEach(() => {
        deletemovie = null;
    });
})
