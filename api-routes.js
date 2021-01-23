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
    

router.route('/contacts/:contact_id')
    .get(contactController.viewOne)
    .put(contactController.updateOne)
    .delete(contactController.deleteContact);


module.exports = router;