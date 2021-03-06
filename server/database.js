const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/RuralHouseWebApp'; // Case sensitive

mongoose.connect(URI, {useNewUrlParser: true})
  .then( db => console.log('... DB connected'))
    .catch(err => console.error(err));

  module.exports = mongoose;
