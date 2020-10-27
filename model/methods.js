
const { error } = require("console");
const { json } = require("express");
const fs = require("fs");
const { Z_VERSION_ERROR } = require("zlib");


function todos() {
    return JSON.parse(fs.readFileSync('./model/movies.json', (error, file) => {
        if (error) {
            return error;
        }
        return file
    })
    )
}

async function movieforid(id) {
    const movies = JSON.parse(fs.readFileSync('model/movies.json', (error, file) => {
        if (error) {
            return error;
        }
        return file;
    }))

    if (movies.find(movie => movie.id == Number(id))) {
        return movies.find(movie => movie.id == Number(id));
    } else {
        return "movie not found";
    }
}

async function createmovie(name, gender, year) {
    const movies = JSON.parse(fs.readFileSync('model/movies.json', (error, file) => {
        if (error) error
        return file
    }));

    id = movies.length + 1;
    const newmovie = {
        "id": id,
        "name": name,
        "gender": gender,
        "year": year
    };

    movies.push(newmovie);
    const add = JSON.stringify(movies, null, 2);

    fs.writeFile('model/movies.json', add, (err) => {
        if (err) {
            return err;
        }
        return "Movie create";
    })
}

async function update(id, name, gender, year) {
    const movies = JSON.parse(fs.readFileSync('model/movies.json', (err, data) => {
        if (err) err;
        return data;
    }));

    if (movies.find(movie => movie.id == Number(id))) {
        movies.forEach(movie => {
            if (movie.id == Number(id)) {
                if (name != undefined) {
                    movie.name = name;
                }
                if (gender != undefined) {
                    movie.gender = gender;
                }
                if (year != undefined) {
                    movie.year = year;
                }
                const movieUpdated = JSON.stringify(movies, null, 2);
                fs.writeFile('model/movies.json', movieUpdated, (err) => {
                    if (err) return err.name;
                    return "Movie update"
                })
            }
        })
    } else {
        return "Movie not found"
    }
}

async function deletemovie(id) {
    const movies = JSON.parse(fs.readFileSync('model/movies.json', (error, file) => {
        if (error) return error;
        return file;
    }));

    if (movies.find(movie => movie.id == Number(id))) {
        movies.forEach(movie => {
            if (movie.id == Number(id)) {
                movies.splice(movies.indexOf(movie), 1);
                const movieDeleted = JSON.stringify(movies, null, 2);
                fs.writeFile('model/movies.json', movieDeleted, (err) => {
                    if (err) {
                        return err
                    }
                    return "movie deleted"
                })
            }
        });
    } else {
        return "movie not found"
    }
}

module.exports = {
    todos: todos,
    movieforid,
    createmovie,
    update,
    deletemovie
}
