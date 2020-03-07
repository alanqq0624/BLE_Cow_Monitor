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

var cow_data = [
    {
        name: "cow1",
        cid: 1,
        time: '2020-02-28 15-01-43',
        ambient: 12,
        object: 12,
        walk: 1,
        ruminating: 4,
        eat_time: 2
    },
    {
        name: "cow2",
        cid: 2,
        time: '2020-03-01 17-01-23',
        ambient: 24,
        object: 24,
        walk: 2,
        ruminating: 5,
        eat_time: 1
    },
    {
        name: "cow3",
        cid: 3,
        time: '2020-03-04 22-26-55',
        ambient: 33,
        object: 33,
        walk: 3,
        ruminating: 8,
        eat_time: 2
    },
    {
        name: "cow4",
        cid: 4,
        time: '2020-03-04 22-26-55',
        ambient: 215,
        object: 34,
        walk: 9,
        ruminating: 3,
        eat_time: 1
    },
    {
        name: "cow5",
        cid: 5,
        time: '2020-02-27 12-44-53',
        ambient: 22,
        object: 22,
        walk: 7,
        ruminating: 3,
        eat_time: 8
    },
    {
        name: "cow6",
        cid: 6,
        time: '2020-02-25 14-44-55',
        ambient: 23,
        object: 23,
        walk: 8,
        ruminating: 6,
        eat_time: 4
    }
]

// receive data from BLE 
app.post('/upload', function (req, res) {
    // TODO: receive data
    res.send('data receive!!');
    console.log(res);
    // TODO: send into DB
});

app.post('/', function (req, res) {
    // TODO: send data to the front page
    console.log("Request receive!");
    res.send(cow_data);
});