var express = require('express');
var router = express.Router();
var items = require('../models/items');
var furniture = require('../models/furniture');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lumeria Editor' });
});

/* mongoose */
/* initialized here so that the async fns can make the API*/

var mongoose = require('mongoose');
mongoose.connect('mongodb://jnaxtea:benedict232@ds043605.mlab.com:43605/treeapp');

var db = mongoose.connection;


var collections;
var documents = {};
var test = {};


db.once('open', function (ref) {
    console.log('Connected to mongo server.');
    //trying to get collection names
     queryCollections();
})

/* GET collections. */
router.get('/collections', function(req, res, next) {
    queryCollections();
    var payload = collections.map(a => a.name); //get only the name . maybe total items or something later
  res.send(payload.slice(1));
});

router.get('/finddocs/:collection', function(req, res, next) {
    var collection = req.params.collection;
    findDocs(collection);
    res.send(test[collection]);
  });



/* QUERIES */

  function queryCollections() {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
          console.log(err);
        } else {
          collections = names;
            for (var i=collections.length-1; i>=0; i--) {
              if (collections[i].name.indexOf('_') == 0) { //remove hidden collections
                  collections.splice(i, 1);
              }
            }
          }
    });
  }
  
  function findDocs(collection) {
    eval(collection.toLowerCase()).find({}, function (err, equipment) {
      test[collection] = equipment;
    });

  }

module.exports = router;
