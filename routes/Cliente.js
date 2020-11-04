const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Cliente = require('../models/Cliente')

// Get todos los clientes
router.get('/', (req,res) => {
	Cliente.findAll()
	.then(data => {
		console.log(data);
		res.send(data);
	})
	.catch(error => {
		console.log("Error")
		console.log(error);
	})}
);


// Añadir cliente
router.get('/add/:id/:identi/:name/:lastname/:sex/:tel/:born', (req,res) => {
	const data = {
		id_cliente: req.params.id,
		identificacion: `${req.params.identi}`,
		nombre: `${req.params.name}`,
		apellido: `${req.params.lastname}`,
		sexo: `${req.params.sex}`,
		telefono: `${req.params.tel}`,
		fecha_nacimiento: `${req.params.born}`
	}
	let{ id_cliente, identificacion, nombre, apellido, sexo, telefono, fecha_nacimiento} = data;

	Cliente.create({
		id_cliente,
		identificacion,
		nombre,
		apellido,
		sexo,
		telefono,
		fecha_nacimiento
	})
	.then(clien => res.redirect('/Cliente'))
	.catch(err => {
		console.log(err);
		res.send('ERROR');
	})
})


// Acceder a un campo del cliente 
router.get('/getAll/:type', (req,res) => {
	Cliente.findAll({
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
	Cliente.findAll({
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
	Cliente.findAll({
		where: {
			id_cliente: req.params.id
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
	Cliente.update({[req.params.column]: req.params.dat},
	{
		where: {
			[req.params.whe]: req.params.whedat
		}
	})
	.then(data => res.redirect("/Cliente"))
	.catch(err  => {
		console.log(err);
		res.send("ERROR");
	})
})

// Eliminar registro
router.get('/delete/:column/:dat', (req,res) => {
	Cliente.destroy({
		where: {
			[req.params.column]: req.params.dat
		}
	})
	.then(data => res.redirect("/Cliente"))
	.catch(err => {
		console.log(err);
		res.send('ERROR');
	})
})

module.exports = router;