function validate(validation) {
    return ((req, res, next) => {
        try {
            validation(req.params);
            next();
        } catch (error) {
            next(error);
        }
    })
}

function validate2(validation) {
    return ((req, res, next) => {
        try {
            validation(req.body);
            next();
        } catch (error) {
            next(error);
        }
    })
}

function validationforid(data) {
    const { id } = data;
    if (id == 0) {
        throw new Error('Esta ingresando un id no valido');
    }
}

function validateforcreate(data) {
    const { name, gender, year } = data;
    if (name == "") {
        throw new Error('El nombre debe de tener mas de 5 letras');
    }
    if (gender == "") {
        throw new Error('El genero debe de tener mas de 5 letras');
    }
    if (year < 1800 || typeof (year) !== 'number') {
        throw new Error('El año no es valido');
    }

}

function validateforupdate(data) {
    const { name, gender, year } = data;
    if (name.Length <= 5 || name == "") {
        throw new Error('El nombre debe de tener mas de 5 letras');
    }
    if (gender.Length <= 5 || gender == "") {
        throw new Error('El genero debe de tener mas de 5 letras');
    }
    if (year < 1800 || typeof (year) !== 'number') {
        throw new Error('El año no es valido');
    }
}



module.exports = { validationforid, validate, validateforcreate, validate2, validateforupdate };