var mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');

const FurnitureSchema = new mongoose.Schema({
  category: {type: String},
  name: {type: String},
  description: {type: String},
  weight: {type: String},
  value: {type: String},
});
    
var Furniture = mongoose.model('furniture', FurnitureSchema, "furniture");

module.exports = Furniture;