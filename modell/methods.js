const fs = require("fs");
const metodos = {
    todos: () => {
        fs.readFile('../methods/movies.json', (error, file) => {
            if (error) {
                return error;
            }
            const movies = JSON.parse(file);
            return movies;
        })
    }
}
module.exports = metodos;