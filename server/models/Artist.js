const { Schema, model } = require('mongoose');

const artistSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  albums: [

    {
      type: String
    },
    
  ]

});

const Artist = model('Artist', artistSchema);

module.exports = Artist;