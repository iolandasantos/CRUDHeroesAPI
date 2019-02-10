var express = require('express');
var router = express.Router();

var hero = require("../controllers/HeroesController.js");

// Get all Heroes
router.get('/', hero.list);
//router.get('/heroes', hero.list);

// Get single hero by id
router.get('/show/:id', hero.show);

// Create hero
router.get('/create', hero.create);

// Save hero
router.post('/save', hero.save);

// Edit hero
router.get('/edit/:id', hero.edit);

// Edit update
router.post('/update/:id', hero.update);

// Edit update
router.post('/delete/:id', hero.delete);


module.exports = router;
