const chai = require('chai')
    , spies = require('chai-spies');
chai.use(spies);
const metodo = {
    movieforid: chai.spy()
};

module.exports = {
    metodo,
}