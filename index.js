const express = require('express');
const app = express();

app.listen(80);

app.get('/asd', function(req, res){
    res.end("Hello from: " + req.url);
})

app.get('/local_host', function(req, res){
    res.end("Hello from: " + req.url);
})

app.get('/*', function(req, res){
    res.end("Hello from: " + req.url);
})