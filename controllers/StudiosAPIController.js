var mongoose = require("mongoose");

var Studio = require('../models/studio');

var studioAPIController = {};

studioAPIController.index = function(req, res) {
  Studio.get(function (err, studios) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Studios retrieved successfully",
      data: studios
    });
  });
};


studioAPIController.new = function(req, res) {
  var studio = new Studio();

  studio.name = req.body.name ? req.body.name : studio.name;
  studio.website = req.body.website;
  studio.headquarter = req.body.headquarter;

  // save the studio and check for errors
  studio.save()
  .then(data => {
    res.json({
      status: "success",
      message: 'Studio Info updated',
      data: studio
    });
  }).catch(err => {
      res.status(500).send({
          message: err.message || "Some error occurred while creating the Note."
      });
  });
};


// Handle view studio info
studioAPIController.view = function (req, res) {
  Studio.findById(req.params._id, function (err, studio) {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: 'Studio details loading..',
      data: studio
    });
  });
};

// Handle update studio info
studioAPIController.update = function (req, res) {
  Studio.findById(req.params._id, function (err, studio) {
    if (err)
      res.send(err);
    
    studio.name = req.body.name ? req.body.name : studio.name;
    studio.website = req.body.website;
    studio.headquarter = req.body.headquarter;
    
    // save the studio and check for errors
    studio.save(function (err) {
      if (err)
        res.json({
          status: "error",
          message: err,
        });
        
      res.json({
        status: "success",
        message: 'Studio Info updated',
        data: studio
      });
    });
  });
};
// Handle delete studio
studioAPIController.delete = function (req, res) {
  Studio.remove({
    _id: req.params._id
  }, function (err) {
    if (err)
      res.json({
        status: "error",
        message: err,
      });
    res.json({
      status: "success",
      message: 'Studio deleted'
    });
  });
};

module.exports = studioAPIController;
