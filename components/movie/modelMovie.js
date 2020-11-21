//--------------------------------------REQUIRES----------------------------------------------------------------

const mongoose = require ('mongoose');

//------------------------------------------REQUIRES------------------------------------------------------------

//-------------------------------------------SCHEMA MOVIES CREATED----------------------------------------------

const Movie = mongoose.model('Movies', new mongoose.Schema({
    title: {type: String} //Parametro de la tabla titulo de la pelicula
}));

module.exports = mongoose.Model('Movies', Movie);

//-------------------------------------------SCHEMA MOVIES CREATED----------------------------------------------