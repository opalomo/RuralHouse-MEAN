const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema ( {
  name: {type : String, required:true},
  surname: {type : String, required:true},
  email: {type : String, required:true},
  password: {type : String, required:true}
} );


// De esta forma le indico a MongoDB que este es el esquema a seguir con los usuarios
module.exports = mongoose.model('User', UserSchema);
