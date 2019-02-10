var mongoose = require("mongoose");

//var Hero = mongoose.model('../models/hero.js');
var Hero = require('../models/Hero');


var heroController = {};

heroController.list = function(req, res) {
  Hero.find({}).exec(function (err, heroes) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/heroes/index", {heroes: heroes});
    }
  });
};

heroController.show = function(req, res) {
  Hero.findOne({_id: req.params.id}).exec(function (err, hero) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/heroes/show", {hero: hero});
    }
  });
};;


heroController.create = function(req, res) {
  const hero = false;
  res.render("../views/heroes/heroForm", {hero: hero});
};


heroController.save = function(req, res) {
  var hero = new Hero(req.body);

  hero.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/heroes/create");
    } else {
      console.log("Successfully created an hero.");
      res.redirect("/heroes");
    }
  });
};


heroController.edit = function(req, res) {
  Hero.findOne({_id: req.params.id}).exec(function (err, hero) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/heroes/heroForm", {hero: hero});
    }
  });
};


heroController.update = function(req, res) {
  console.log('update: ', req.body);
  Hero.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, studio: req.body.studio, power: req.body.power, weakness: req.body.weakness }}, { new: true }, function (err, hero) {
    if (err) {
      console.log(err);
      //res.render("../views/heroes/edit", {hero: req.body});
    }
    res.redirect("/heroes");
  });
};


heroController.delete = function(req, res) {
  Hero.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Hero deleted!");
      res.redirect("/heroes");
    }
  });
};


module.exports = heroController;