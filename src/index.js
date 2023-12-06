const express = require('express');
const {whatsapp} = require('./lib/whatsapp');
const app = express()

const puerto = 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

//rutas
app.use('/api', require('./routes/links'));

whatsapp.initialize();


app.listen(puerto, ()=>{
  console.log(`Server on port ${puerto}`)
});