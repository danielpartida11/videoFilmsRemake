//--------------------------------REQUIERES----------------------------------------------------------------------
const mongoose = require ('mongoose');

const express = require ('express');
//--------------------------------REQUIRES-----------------------------------------------------------------------

const routerMovie = require('./components/movie/routerMovie.js');
//---------------------------------------PUERTO Y FUNCION EXPRESS------------------------------------------------
 //app.use(bodyParser.json()); --> Hace lo mismo que express.json
const app = express();
const PORT = 5000;
//---------------------------------------PUERTO Y FUNCION EXPRESS------------------------------------------------
app.use(express.json());
app.use('/', routerMovie);
//---------------------------------------CONEXION CON MONGODB----------------------------------------------------
mongoose.connect('mongodb://localhost:27017/videoFilmsRemake', { //Creacion bbdd peliculas
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,       //ESTAS LINEAS DE CODIGO SIRVEN PARA CONECTARSE CON MONGO
useFindAndModify: false
})
.then(() => {console.log('Mongoose conectado')})
.catch(() => {console.log('Error')});
//---------------------------------------CONEXION CON MONGODB-----------------------------------------------------

app.listen(PORT, () => console.log('El servidor esta corriendo...'));
