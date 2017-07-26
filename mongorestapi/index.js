"use strict";
var express = require('express');
var mongodb = require('mongodb');
var uuidv4 = require('uuid/v4');
var mProducts = require('./modules/products');
var mOrders = require('./modules/orders');
var app = express();

    // products
    app.put('/products', function (req, res) {
        res.end();
    });

    app.post('/products', function (req, res) {
        res.end();
    });
    app.get('/products', function (req, res) {
        res.end();
    });

    app.delete('/products', function (req, res) {
        res.end();
    });

    // orders

    app.put('/orders', function (req, res) {
        res.end();
    });

    app.post('/orders', function (req, res) {
        res.end();
    });
    app.get('/orders', function (req, res) {
        res.end();
    });

    app.delete('/orders', function (req, res) {
        res.end();

    });


app.listen(3000, function () {
    console.log('Mongo app listening on port 3000!');
});
