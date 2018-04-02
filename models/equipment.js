var mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');

const EquipmentSchema = new mongoose.Schema({
  name: {type: String},
  category: {type: String},
  
  description: {type: String},
  weight: {type: String},
  value: {type: String},
});
    
var Equipment = mongoose.model('equipment', EquipmentSchema, "equipment");

module.exports = Equipment;