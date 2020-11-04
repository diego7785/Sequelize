const Sequelize = require('sequelize');

const sequelize = new Sequelize('Taller5', 'postgres', 'pg123', {
	host: 'localhost',
	dialect: 'postgres',
	port: 5433,
	operatorAliases: false,

	pool: {
		max: 5,
		min: 0,
		acquire: 30000,
		idle: 10000
	},
})

module.exports = sequelize;