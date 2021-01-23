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


//Fetch by ID
exports.viewOne = function(req, res) {
    Contact.findById(req.params.contact_id, (err, contact) =>{
        if(err) {
            res.json({
                status : "Failure",
                message : err
            });
        }
        else {
            res.json({
                status : "Success",
                data : contact
            })
        }
    })
}


//Update the contact
exports.updateOne = function(req, res) {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if(err) {
            res.json({
                status : "Failure",
                message : err
            })
        }
        else {
            contact.name = req.body.name ? req.body.name : contact.name;
            contact.gender = req.body.gender ? req.body.gender : contact.gender;
            contact.email = req.body.email ? req.body.email : contact.email;

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
                        message : "Contact updated"
                    })
                }
            })
        }
    });
}

//Delete the contact
exports.deleteContact = function(req, res) {
    Contact.deleteOne({
        _id : req.params.contact_id
    }, (err, contact) => {
        if(err) {
            res.json({
                status : "Failure",
                message : err
            })
        }
        else {
            res.json({
                status : "Success",
                message : "Contact deleted"
            })
        }
    })
}