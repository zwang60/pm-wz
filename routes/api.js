var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var db = mongodb.MongoClient.connect('mongodb://localhost/test1');

router.get('/c2', function(req, res, next) {
    db.then(function(db) {
        return db.collection('c2').find().toArray();
    }).then(res.json.bind(res)).catch(function(err) {
        console.log(err);
        next(err);
    });
});

router.post('/c2', function(req, res, next){
    var c2 = req.body;
    db.then(function(db){
        return db.collection('c2').insertOne(c2);
    }).then(function(){
        res.json(c2);
    }).catch(function(){
        console.log(err);
        next(err);
    })
});

module.exports = router;
