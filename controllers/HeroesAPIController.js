var mongoose = require("mongoose");

var Hero = require('../models/Hero');
var Studio = require('../models/studio');

var heroAPIController = {};

heroAPIController.index = function(req, res) {
  Hero.get(function (err, heroes) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Heroes retrieved successfully",
      data: heroes
    });
  });
};


heroAPIController.new = function(req, res) {
  var hero = new Hero();

  hero.name = req.body.name ? req.body.name : hero.name;
  hero.studio = req.body.studio
  hero.power = req.body.power;
  hero.weakness = req.body.weakness;

  // save the hero and check for errors
  hero.save(function (err) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    } 
    
    res.json({
        message: 'New hero added!',
        data: hero
    });
  });
};


// Handle view hero info
heroAPIController.view = function (req, res) {
  Hero.findById(req.params._id, function (err, hero) {
      if (err)
          res.send(err);
      res.json({
          message: 'Hero details loading..',
          data: hero
      });
  });
};

// Handle update hero info
heroAPIController.update = function (req, res) {
  Hero.findById(req.params._id, function (err, hero) {
    if (err)
      res.send(err);
    
    hero.name = req.body.name ? req.body.name : hero.name;
    hero.studio = req.body.studio
    hero.power = req.body.power;
    hero.weakness = req.body.weakness;
    
    // save the hero and check for errors
    hero.save(function (err) {
      if (err)
        res.json(err);
      res.json({
        message: 'Hero Info updated',
        data: hero
      });
    });
  });
};
// Handle delete hero
heroAPIController.delete = function (req, res) {
  Hero.remove({
    _id: req.params._id
  }, function (err, contact) {
    if (err)
      res.send(err);
    res.json({
      status: "success",
      message: 'Hero deleted'
    });
  });
};

module.exports = heroAPIController;
