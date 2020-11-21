//--------------------------------REQUIERES----------------------------------------------------------------------

const mongoose = require ('mongoose');

const express = require ('express');

const routerMovie = require('./components/movie/routerMovie.js');

const routerOrder = require('./components/order/routerOrder.js');

const routerUser = require('./components/user/routerUser.js');

//--------------------------------REQUIRES-----------------------------------------------------------------------

//---------------------------------------PUERTO Y FUNCION EXPRESS------------------------------------------------

const app = express();

const PORT = 5000;

//---------------------------------------PUERTO Y FUNCION EXPRESS------------------------------------------------

//---------------------------------------MIDDLEWARES-------------------------------------------------------------

app.use(express.json());
app.use('/', routerMovie);
app.use('/', routerOrder);
app.use('/', routerUser);

//---------------------------------------MIDDLEWARES-------------------------------------------------------------

//---------------------------------------CONEXION CON MONGODB----------------------------------------------------

mongoose.connect('mongodb://localhost:27017/videoFilmsRemake', { //Creacion bbdd peliculas
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,       //ESTAS LINEAS DE CODIGO SIRVEN PARA CONECTARSE CON MONGO
useFindAndModify: false
})
.then(() => {console.log('Servidor de Mongoose Conectado')})
.catch(() => {console.log('Error al conectar con el Servidor Mongoose')});

//---------------------------------------CONEXION CON MONGODB-----------------------------------------------------

//---------------------------------------LISTENER----------------------------------------------------------------

app.listen(PORT, () => console.log('El servidor esta corriendo...'));

//-----------------------------------------LISTENER--------------------------------------------------------------