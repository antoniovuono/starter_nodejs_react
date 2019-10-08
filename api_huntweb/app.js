const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express ();
app.use(express.json());
app.use(cors());

//Iniciando o Banco de dados MONGODB
mongoose.connect('mongodb://localhost:27017/nodeapi',
 { useNewUrlParser: true , 
   useUnifiedTopology: true }

 );

 //Tecnica para precisar chama apenas uma vez o models usando o requireDir 
 requireDir('./src/models')





// Primeira Rota
app.use('/api', require('./src/routes'));




// Abrindo porta de conexão

app.listen(4000);