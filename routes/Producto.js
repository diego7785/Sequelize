const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Producto = require('../models/Producto')

// Get todos los productos
router.get('/', (req,res) => {
	Producto.findAll()
	.then(data => {
		console.log(data);
		res.send(data);
	})
	.catch(error => {
		res.send("Error");
		console.log(error);
	})}
);

// Agregar producto
router.get('/add/:id/:name/:desc/:precuni', (req,res) => {
	const data = {
		id: req.params.id,
		nombre: `${req.params.name}`,
		descripcion: `${req.params.desc}`,
		precio_unitario: `${req.params.precuni}`
	}

	let {id, nombre, descripcion, precio_unitario} = data;

	Producto.create({
		id,
		nombre,
		descripcion,
		precio_unitario
	})
	.then(prod => res.redirect('/Producto'))
	.catch(err => {
		console.log(err);
		res.send('ERROR');
	})
})

// Acceder a un campo del producto 
router.get('/getAll/:type', (req,res) => {
	Producto.findAll({
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
	Producto.findAll({
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
	Producto.findAll({
		where: {
			id: req.params.id
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
	Producto.update({[req.params.column]: req.params.dat},
	{
		where: {
			[req.params.whe]: req.params.whedat
		}
	})
	.then(data => res.redirect("/Producto"))
	.catch(err  => {
		console.log(err);
		res.send("ERROR");
	})
})

// Eliminar registro
router.get('/delete/:column/:dat', (req,res) => {
	Producto.destroy({
		where: {
			[req.params.column]: req.params.dat
		}
	})
	.then(data => res.redirect("/Producto"))
	.catch(err => {
		console.log(err);
		res.send('ERROR');
	})
})


module.exports = router;