var express = require('express');
var router = express.Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
       status: 'API Its Working',
       message: 'Welcome to CRUDHeroesAPI',
    });
});

var heroesApiController = require("../controllers/HeroesAPIController.js");

// Hero routes
router.route('/heroes')
    .get(heroesApiController.index)
    .post(heroesApiController.new);

router.route('/heroes/:_id')
    .get(heroesApiController.view)
    .patch(heroesApiController.update)
    .put(heroesApiController.update)
    .delete(heroesApiController.delete);

var studioApiController = require("../controllers/StudiosAPIController.js");

// Studio routes
router.route('/studios')
    .get(studioApiController.index)
    .post(studioApiController.new);
    
router.route('/studios/:_id')
    .get(studioApiController.view)
    .patch(studioApiController.update)
    .put(studioApiController.update)
    .delete(studioApiController.delete);

// Export API routes
module.exports = router;