//---
const mongoose = require ('mongoose');

const express = require ('express');
//---

//---
app.use(express.json()); //app.use(bodyParser.json()); --> Hace lo mismo que express.json
const app = express();
const PORT = 5000;
//---

//---
mongoose.connect('mongodb://localhost:27017/videoFilmsRemake', { //Creacion bbdd peliculas
useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true,       //ESTAS LINEAS DE CODIGO SIRVEN PARA CONECTARSE CON MONGO
useFindAndModify: false
})
.then(() => {console.log('Mongoose conectado')})
.catch(() => {console.log('Error')});
//---