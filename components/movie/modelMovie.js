const mongoose = require ('mongoose');

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {type: String} //Parametro de la tabla titulo de la pelicula
}));

module.exports = mongoose.Model('Movies', Movie);