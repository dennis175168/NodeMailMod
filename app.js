var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var Mail = require('./fuctions/gmail');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.get('/', function (req, res) {
    res.send("Dennis Mail API");
    // Mail.SendMail();
});

app.post('/send_mail', function (req, res) {
    var form = req.body.form;
    Mail.SendMail(form, function (err, results) {
        res.send(results);
    } );
});

app.listen(3002, function () {
    console.log('Example app listening on port 3002!');
});