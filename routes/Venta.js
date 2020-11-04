const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Venta = require('../models/Venta');

// Get todas las ventas
router.get('/', (req,res) => {
	Venta.findAll()
	.then(data => {
		console.log(data);
		res.send(data);
	})
	.catch(error => {
		console.log("Error")
		console.log(error);
	})}
);


// Agregar una venta
router.get('/add/:id/:idc/:idp/:tot', (req,res) => {
	const data = {
		id_venta: req.params.id,
		id_cliente: req.params.idc,
		id_producto: req.params.idp,
		total: req.params.tot
	}

	let {id_venta, id_cliente, id_producto, total} = data;

	Venta.create({
		id_venta,
		id_cliente,
		id_producto, 
		total
	})
	.then(vent => res.redirect('/Venta'))
	.catch(err => {
		console.log(err);
		res.send('ERROR');
	})
})


// Acceder a un campo de las ventas 
router.get('/getAll/:type', (req,res) => {
	Venta.findAll({
		attributes: [req.params.type]
	})
	.then(data => res.send(data))
	.catch(err => {
		console.log(err);
		res.send("ERROR");
	}) 
})

// Filtrar registros por algún criterio
router.get('/getRecordFiltered/:column/:dat', (req,res) => {
	Venta.findAll({
		where:{
			[req.params.column]: req.params.dat
		}
	})
	.then(data => res.send(data))
	.catch(err => {
		console.log(err);
		res.send("ERROR")
	})
})


// Obtener un registro especifico
router.get('/getUniqueRecord/:id', (req,res) => {
	Venta.findAll({
		where: {
			id_venta: req.params.id
		}
	})
	.then(data => res.send(data))
	.catch(err => {
		console.log(err);
		res.send("ERROR");
	})
})


// Update registro
router.get('/update/:column/:dat/:whe/:whedat', (req,res) => {
	Venta.update({[req.params.column]: req.params.dat},
	{
		where: {
			[req.params.whe]: req.params.whedat
		}
	})
	.then(data => res.redirect("/Venta"))
	.catch(err  => {
		console.log(err);
		res.send("ERROR");
	})
})


// Eliminar registro
router.get('/delete/:column/:dat', (req,res) => {
	Venta.destroy({
		where: {
			[req.params.column]: req.params.dat
		}
	})
	.then(data => res.redirect("/Venta"))
	.catch(err => {
		console.log(err);
		res.send('ERROR');
	})
})

module.exports = router;