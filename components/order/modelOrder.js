const mongoose = require ('mongoose');

const Movie = mongoose.model('Orders', new mongoose.Schema({
    title: {type: String} //Parametro de la tabla titulo de la pelicula
}));

module.exports = mongoose.Model('Orders', Order);