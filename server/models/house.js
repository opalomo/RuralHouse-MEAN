const mongoose = require('mongoose');
const {Schema} = mongoose;

const HouseSchema = new Schema ( {
  houseName: {type : String, required:true},
  owner: {type : String, required:true},
  rooms: {type : Number, required:true},
  beds: {type : Number, required:true},
  bathrooms: {type : Number, required:true}
} );

module.exports = mongoose.model('House', HouseSchema);
