//-------------------------------------------REQUIRES------------------------------------------------------------
const mongoose = require ('mongoose');
//----------------------------------------REQUIRES---------------------------------------------------------------

//------------------------------------------USERS SCHEMA CREATED-------------------------------------------------
const User = mongoose.model('Users', new mongoose.Schema({
    username: {type: String} //Parametro de la tabla titulo de la pelicula
}));

module.exports = mongoose.Model('Users', User);
//-------------------------------------------USERS SCHEMA CREATED------------------------------------------------
