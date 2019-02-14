var mongoose = require("mongoose");

var Studio = require('../models/studio');


var studioController = {};

studioController.list = function(req, res) {
  Studio.find({}).exec(function (err, studio) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/studios/index", {studio: studio});
    }
  });
};

studioController.show = function(req, res) {
  Studio.findOne({_id: req.params.id}).exec(function (err, studio) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      res.render("../views/studios/show", {studio: studio});
    }
  });
};;


studioController.create = function(req, res) {
  const studio = false;
  res.render("../views/studios/studiosForm", {studio: studio, id: false});
};


studioController.save = function(req, res) {

  var dadosForm = req.body;
  console.log('dadosForm:', dadosForm)

  req.assert('name',        `The field 'Name' is required`).notEmpty();
  req.assert('headquarter', `The field 'Headquarter' is required`).notEmpty();
  req.assert('website',     `The field 'Website' is required`).notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render('../views/studios/studiosForm', {validacao: erros, studio: dadosForm, id: false});
    return;
  }

  var studio = new Studio(req.body);

  studio.save(function(err) {
    if(err) {
      console.log(err);
      res.render("../views/studios/create");
    } else {
      console.log("Successfully created an studio.");
      res.redirect("/studios");
    }
  });
};


studioController.edit = function(req, res) {
  Studio.findOne({_id: req.params.id}).exec(function (err, studio) {
    if (err) {
      console.log("Error:", err);
    }
    else {
      console.log('studio: ', studio);
      res.render("../views/studios/studiosForm", {studio: studio, id: req.params.id});
    }
  });
};


studioController.update = function(req, res) {

  var dadosForm = req.body;

  req.assert('name',        `The field 'Name' is required`).notEmpty();
  req.assert('headquarter', `The field 'Headquarter' is required`).notEmpty();
  req.assert('website',     `The field 'Website' is required`).notEmpty();

  var erros = req.validationErrors();

  if(erros){
    res.render('../views/studios/studiosForm', {validacao: erros, studio: dadosForm, id: req.params.id});
    return;
  }

  Studio.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, headquarter: req.body.headquarter, website: req.body.website }}, { new: true }, function (err, hero) {
    if (err) {
      console.log(err);
    }
    res.redirect("/studios");
  });
};


studioController.delete = function(req, res) {
  Studio.remove({_id: req.params.id}, function(err) {
    if(err) {
      console.log(err);
    }
    else {
      console.log("Studio deleted!");
      res.redirect("/studios");
    }
  });
};


module.exports = studioController;