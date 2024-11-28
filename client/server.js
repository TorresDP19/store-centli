"use strict";

const express = require ('express');
const path = require ('path');

const app = express();

app.use(express.static(__dirname + '/client/dist/client'));

app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(process.env.PORT || 4200);