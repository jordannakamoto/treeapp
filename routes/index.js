var express = require('express');
var router = express.Router();
var items = require('../models/items');
var furniture = require('../models/furniture');
var equipment = require('../models/equipment');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lumeria Editor' });
});

/* mongoose */
/* initialized here so that the async fns can make the API*/

var mongoose = require('mongoose');

mongoose.connect('mongodb://jnaxtea:derp@ds043605.mlab.com:43605/treeapp');

var db = mongoose.connection;


var collections;
var documents = {};
var tree = {};


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

router.get('/:collection', function(req, res, next) {
    var collection = req.params.collection;
    findDocs(collection);
    res.send(tree[collection]);
  });
  
router.get('/schema/:name', function(req, res, next) {
    var schema = req.params.name;
    var payload = equipment[schema].schema.obj;
    res.send(payload)
});

router.post('/:collection/:doc_id/update', function(req, res, next) {
    console.log('updating:', req.body.name);
    var collection = req.params.collection;
    var doc_id = req.params.doc_id;
    console.log(req.body)
    updateDoc(collection,doc_id,req.body);
  });
  
router.post('/:collection/newDoc', function(req, res, next) {
    console.log('uploading new document: '+req.body.name);
    var collection = req.params.collection;
    newDoc(collection,req.body);
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
              if (collections[i].name.indexOf('.') > -1) { //remove system
                  collections.splice(i, 1);
              }
            }
          }
    });
  }
  
  function findDocs(collection) {
    eval(collection.toLowerCase())[collection].find({}, function (err, equipment) {
      tree[collection] = equipment;
    });

  }
  
  function updateDoc(collection,doc_id,update){
    eval(collection.toLowerCase())[update.category].findById(doc_id, function (err, doc) {
      if (err) return console.log(err);
      doc.set(update)
      console.log(doc)
      doc.save(function (err, updatedDoc) {
        if (err) return console.log(err);
        console.log(updatedDoc)
      });
    });
  }
  
  function newDoc(collection,data){
    equipment[data.category].create(data, function (err) {
    if (err) return handleError(err);
    })
  }


module.exports = router;
