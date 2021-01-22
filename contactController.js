Contact = require("./contactModel");

exports.index = function(req, res) {
    Contact.get(function(err, contacts){
        if(err) {
            res.json({
                status : "Failure",
                message : err
            });
        }
        else {
            res.json({
                status : "Success",
                message : "Contacts retrieved successfully.",
                data : contacts
            })
            
        }
    });
}

//Insert new contact
exports.new = function(req, res) {
    var contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;

    contact.save((err) => {
        if(err) {
            res.json({
                status : "Failure",
                message : err
            })
        }
        else {
            res.json({
                status : "Success",
                message : "New Contact created",
                data : contact
            })
        }
    });
}

