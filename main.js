//express server
//server open and environmet value
const express = require('express');
const app = express();
const port_express = 40010;
//let express can use .body. to get data for method'post'
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));
//use data at '/public'
app.use(express.static(__dirname + '/public'));
//listen port
app.listen(port_express, function () {
    console.log('Example app listening on port ' + port_express + ' !');
});