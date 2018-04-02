var mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');

const ItemSchema = new mongoose.Schema({
  name: {type: String},
  category: {type: String},
  
  description: {type: String},
  weight: {type: String},
  value: {type: String},
});
    
var Item = mongoose.model('item', ItemSchema, "items");

module.exports = Item;