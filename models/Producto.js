const {Sequelize, DataTypes, QueryTypes} = require('sequelize');
const db = require('../config/database');

const Producto = db.define('producto', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true
	},
	nombre: {
		type: DataTypes.STRING(50),
		allowNull: false
	},
	descripcion: {
		type: DataTypes.STRING(200),
		allowNull: false
	},
	precio_unitario: {
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


module.exports = Producto;


