//-------------------------------------------REQUIRES------------------------------------------------------------
const mongoose = require ('mongoose');
//------------------------------------REQUIRES-------------------------------------------------------------------

//--------------------------------------ORDERS SCHEMA CREATED----------------------------------------------------
const Order = mongoose.model('Orders', new mongoose.Schema({
    title: {type: String} //Parametro de la tabla titulo de la pelicula
}));

module.exports = mongoose.Model('Orders', Order);
//--------------------------------------ORDERS SCHEMA CREATED----------------------------------------------------