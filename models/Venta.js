const {Sequelize, DataTypes, QueryTypes} = require('sequelize');
const db = require('../config/database');
const Cliente = require('./Cliente');
const Producto = require('./Producto');

const Venta = db.define('venta', {
	id_venta: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	id_cliente: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	id_producto: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	total: {
		type: DataTypes.INTEGER,
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


module.exports = Venta;