let express = require('express');
let router = require('./api-routes');
let app = express();
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

var port = process.env.port || 8090;
var host = "localhost";

app.use(bodyParser.urlencoded({
    extended : true
}));
app.use(bodyParser.json());


mongoose.connect("mongodb://localhost:27017/resthub", {useNewUrlParser : true, useUnifiedTopology : true});
var dbConnect = mongoose.connections[0]; 

if(dbConnect) {
    console.log("Connected!");
}
else {
    console.log("Not Connected!");
}

app.get("/", (req, res) => {"Welcome to Node JS REST"});
app.use('/api', router);

app.listen(port, host, function(){
    console.log("Running on nodemon @" + host + ":/" + port);
});