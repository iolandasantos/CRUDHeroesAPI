var mongoose = require("mongoose");

var Hero = require('../models/Hero');
var Studio = require('../models/studio');

var heroController = {};

heroController.list = function(req, res) {
  Hero.find({}).exec(function (err, heroes) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      console.log('heroes:', heroes.length);

      studioList()
        .then((studios) => {
          heroes.forEach((hero) => {
            let tempstudio = studios.find((studio) => {
              if (studio._id == hero.studio)
              return studio;
            });
            hero.studio = tempstudio.name;       
          });
          
          if(heroes.length === 0){
            res.render("../views/heroes/index", {heroes: heroes});
            return;
          }

          res.render("../views/heroes/index", {heroes: heroes});     
         })
        .catch((err) => { 
          


          res.render("../views/studios/index", {validacao: 'You must register at least one studio first', studio: []});
        });
    }
  });
};


heroController.create = function(req, res) {

  studioList()
    .then((studios) => {
      res.render("../views/heroes/heroForm", {hero: false, studios: studios, id: false});
    })
    .catch((err) => {
      res.render("../views/studios/index", {validacao: 'You must register at least one studio first', studio: []});
    });
};


heroController.save = function(req, res) {

  var dadosForm = req.body;

  req.assert('name',     `The field 'Name' is required`).notEmpty();
  req.assert('studio',   `The field 'Studio' is required`).notEmpty();
  req.assert('power',    `The field 'Power' is required`).notEmpty();
  req.assert('weakness', `The field 'Weakness' is required`).notEmpty();

  var erros = req.validationErrors();
  
  if(erros){
    studioList()
    .then((studios) => {
      res.render('../views/heroes/heroForm', {validacao: erros, hero: dadosForm, studios: studios, id: false});
      return;
    })
    .catch((err) => {
      res.render("../views/studios/index", {validacao: 'You must register at least one studio first', studio: []});
      return;
    });    
  }
  else{
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
  }
};


heroController.edit = function(req, res) {
  Hero.findOne({_id: req.params.id}).exec(function (err, hero) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      studioList()
      .then((studios) => {
        res.render("../views/heroes/heroForm", {hero: hero, studios: studios, id: req.params.id});
      })
      .catch((err) => {
        res.render("../views/studios/index", {validacao: 'You must register at least one studio first', studio: []});
      });      
    }
  });
};


heroController.update = function(req, res) {

  var dadosForm = req.body;

  req.assert('name',    `The field 'Name' is required`).notEmpty();
  req.assert('studio', `The field 'Studio' is required`).notEmpty();
  req.assert('power',   `The field 'Power' is required`).notEmpty();
  req.assert('weakness', `The field 'Weakness' is required`).notEmpty();

  var erros = req.validationErrors();

  if(erros){
    studioList()
    .then((studios) => {
      res.render('../views/heroes/heroForm', {validacao: erros, hero: dadosForm, studios: studios, id: req.params.id});
      return;
    })
    .catch((err) => {
      res.render("../views/studios/index", {validacao: 'You must register at least one studio first', studio: []});
      return;
    }); 
  }
  else {
    Hero.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, studio: req.body.studio, power: req.body.power, weakness: req.body.weakness }}, { new: true }, function (err, hero) {
      if (err) {
        console.log(err);
        //res.render("../views/heroes/edit", {hero: req.body});
      }
      res.redirect("/heroes");
    });
  }
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

function studioList () {
  return new Promise((resolve, reject) => {
    Studio.find({}).exec(function (err, studios) {
      if (err) {
        console.log("Error:", err);
        reject([]);
      }
      else {
        if(studios.length === 0){
          reject([]);
        }
        else {
          resolve(studios);
        }
      }
    });
  });
}


module.exports = heroController;
