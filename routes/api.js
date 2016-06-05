var express = require('express');
var router = express.Router();
//var mongodb = require('mongodb');
//var db = mongodb.MongoClient.connect('mongodb://localhost/test1');
//var db = mongoose.connection;
var C2 = require('../models/c2');

router.get('/c2', function(req, res, next) {
    C2.find().then(res.json.bind(res)).catch(function(err) {
        console.log(err);
        next(err);
    });
});

router.post('/c2', function(req, res, next) {
    var c2 = new C2(req.body);
    c2.save().then(res.json.bind(res)).catch(function(err) {
        console.log(err);
        next(err);
    });
    /*
    db.then(function(db){
        return db.collection('c2').insertOne(c2);
    }).then(function(){
        res.json(c2);
    }).catch(function(){
        console.log(err);
        next(err);
    })*/
});

router.delete('/c2/:id', function(req, res, next) {
    C2.findById(
        req.params.id
    ).then(function(c2) {
        return c2.remove();//Asynchronized
    }).then(res.json.bind(res)).catch(function(err) {
        console.log(err);
        res.status(500).json({
            status: false,
            msg: err
        });
    });
})

router.put('/c2/:id', function(req, res, next){
    C2.findById(req.params.id)
    .then(function(c2){
        return c2.update(new C2(req.body));
    })
    .then(function(){
        return C2.find();
    })
    .then(res.json.bind(res)).catch(function(err){
        console.log(err);
        res.status(500).json({
            status: false,
            msg: err
        })
    })
})

module.exports = router;
