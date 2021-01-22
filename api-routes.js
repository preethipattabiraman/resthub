let router = require('express').Router();
var contactController = require('./contactController');

router.get("/", (req, res) => {
    res.json({
        status : "API is working",
        message : "Welcome to REST API - Node JS - Crafted with love"
    });
});

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
    
module.exports = router;