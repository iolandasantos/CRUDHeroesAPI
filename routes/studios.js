var express = require('express');
var router = express.Router();

var studio = require("../controllers/StudiosController.js");

// Get all Studio
router.get('/', studio.list);

// Get single studios by id
router.get('/show/:id', studio.show);

// Create studios
router.get('/create', studio.create);

// Save studios
router.post('/save', studio.save);

// Edit studios
router.get('/edit/:id', studio.edit);

// Edit update
router.post('/update/:id', studio.update);

// Edit update
router.post('/delete/:id', studio.delete);


module.exports = router;