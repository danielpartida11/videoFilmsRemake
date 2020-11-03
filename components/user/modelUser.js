const mongoose = require ('mongoose');

const Movie = mongoose.model('Users', new mongoose.Schema({
    username: {type: String} //Parametro de la tabla titulo de la pelicula
}));

module.exports = mongoose.Model('Users', User);