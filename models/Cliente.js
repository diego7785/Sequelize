const {Sequelize, DataTypes, QueryTypes} = require('sequelize');
const db = require('../config/database');


const Cliente = db.define('cliente', {
  id_cliente: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  identificacion: {
  	type: DataTypes.STRING(20),
    allowNull: false
  },
  nombre: {
  	type: DataTypes.STRING(30),
  	allowNull: false
  },
  apellido: {
  	type: DataTypes.STRING(30),
  	allowNull: false
  },
  sexo: {
  	type: DataTypes.STRING(30),
  	allowNull: false
  },
  telefono: {
  	type: DataTypes.STRING(20),
  	allowNull: false
  },
  fecha_nacimiento: {
  	type: DataTypes.DATE,
  	allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at'
  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
},
  {
    timestamps: true,
    underscored: true,
    freezeTableName: true,
  });


module.exports = Cliente;