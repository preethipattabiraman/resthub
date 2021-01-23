var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    email : {
        type : String,
        required : true
    },
    
    gender : String,
    create_date : {
        type : Date,
        default : Date.now
    }
});

var Contact = mongoose.model('contact', contactSchema);
module.exports = Contact;
module.exports.get = function(callback, limit) {
    Contact.find(callback).limit(limit);
}