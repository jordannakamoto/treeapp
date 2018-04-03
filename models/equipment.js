var mongoose = require('mongoose');
const extendSchema = require('mongoose-extend-schema');

const EquipmentSchema = new mongoose.Schema({
  name: {type: String},
  category: {type: String},
  
  description: {type: String},
  baseLvl: {type: Number},
  
});

const BlankSchema = new mongoose.Schema({ //for querying all documents
});
    
var EquipmentModel = mongoose.model('test', EquipmentSchema, "equipment");
var BlankModel = mongoose.model('equipment', BlankSchema, "equipment");

const WeaponSchema = extendSchema(EquipmentSchema, {
    range: {type: Array},
    damage: {type: Array}
})
const SwordSchema = extendSchema(WeaponSchema, {
    category: {type: String, default: 'sword'},
});
const WandSchema = extendSchema(WeaponSchema, {
    category: {type: String, default: 'wand'},
});
const OrbSchema = extendSchema(WeaponSchema, {
    category: {type: String, default: 'orb'},
});

const JewelrySchema = extendSchema(EquipmentSchema, {
    category: {type: String, default: 'jewelry'},
});

const PouchSchema = extendSchema(EquipmentSchema, {
    category: {type: String, default: 'pouch'},
    slots: {type: Number}
});



var SwordModel = mongoose.model('sword', SwordSchema, "equipment");
var WandModel = mongoose.model('equipment', WandModel, "equipment");
var OrbModel = mongoose.model('orb', OrbSchema, "equipment");
var JewelryModel = mongoose.model('jewelry', JewelrySchema, "equipment");
var PouchModel = mongoose.model('pouch', PouchSchema, "equipment");


module.exports = {
  equipment: BlankModel, //needs to be named equipment right now
  sword: SwordModel,
  wand: WandModel,
  orb: OrbModel,
  jewelry: JewelryModel,
  pouch: PouchModel
}