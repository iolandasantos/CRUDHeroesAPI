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

  var dadosForm = req.body;
  console.log('req.body:', req.body)
  req.assert('name',    `The field 'Name' is required`).notEmpty();
  //req.assert('studio', 'Usuário não pode ser vazio').notEmpty();
  req.assert('power',   `The field 'Power' is required`).notEmpty();
  req.assert('weakness', `The field 'Weakness' is required`).notEmpty();

  var erros = req.validationErrors();

  if(erros){
      res.render('../views/heroes/heroForm', {validacao: erros, hero: dadosForm});
      return;
  }


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

  var dadosForm = req.body;

  req.assert('name',    `The field 'Name' is required`).notEmpty();
  //req.assert('studio', 'Usuário não pode ser vazio').notEmpty();
  req.assert('power',   `The field 'Power' is required`).notEmpty();
  req.assert('weakness', `The field 'Weakness' is required`).notEmpty();

  var erros = req.validationErrors();

  if(erros){
      res.render('../views/heroes/heroForm', {validacao: erros, hero: dadosForm});
      return;
  }

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
