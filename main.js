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

// // connect to MongoDB
// var MongoDB_Client = require('mongodb').MongoClient
// var DB_url = "mongodb://localhost:40020";

// init date
var d = new Date()

var cow_data = [
    {
        name: 1,
        Time: '2020-02-28 15-01-43',
        Ambient: 12,
        Object: 12,
        Walk: 1,
        Ruminating: 4,
        Eat_time: 2
    },
    {
        name: 2,
        Time: '2020-03-01 17-01-23',
        Ambient: 24,
        Object: 24,
        Walk: 2,
        Ruminating: 5,
        Eat_time: 1
    },
    {
        name: 3,
        Time: '2020-03-04 22-26-55',
        Ambient: 33,
        Object: 33,
        Walk: 3,
        Ruminating: 8,
        Eat_time: 2
    }
]

// receive data from BLE 
app.post('/upload', function (req, res) {
    // TODO: receive data
    res.send('data receive!!');
    console.log(req.body);
    // TODO: send into DB
    cow_data = [req.body]
});

app.post('/', function (req, res) {
    // TODO: send data to the front page
    console.log("Request data receive!");
    res.send(cow_data);
});

app.post('/time', function (req, res) {
    // TODO: send data to the front page
    console.log("Request time receive!");
    res.send(cow_data);
});