const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const Sequelize = require('sequelize');

// Database
const db = require('./config/database')

db.authenticate()
  .then(() => {
     console.log('Base de datos conectada');
   })
  .catch((error) => {
     console.error('Error al conectar', error);
  }
)


const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => res.send("inicio"));

// Client route

app.use('/Cliente', require('./routes/Cliente.js'));

app.use('/Producto', require('./routes/Producto.js'));

app.use('/Venta', require('./routes/Venta.js'));

app.listen(PORT, console.log(`Server on port ${PORT}`));
