var express = require('express');
var path = require('path');
var app = express();

var staticPath = path.join(__dirname);
var port = 8080;

app.use(express.static(staticPath))
    .get('/', function (req, res) {
        res.sendFile('index.html', {
            root: staticPath
        });
    })
    .get('*', function (req, res) {
        res.redirect('/#/nomatch');
    })
    .listen(port, function (err) {
        if (err) { console.log(err) };
        console.log('Listening at localhost:' + port);
    });