const { Schema, model } = require('mongoose');
const Song = require('./Song');

const artistSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  songs: [

    {
        type: Song
    }
    
  ]

});

const Artist = model('Artist', artistSchema);

module.exports = Artist;