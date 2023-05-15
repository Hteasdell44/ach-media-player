const { Schema, model } = require('mongoose');

const songSchema = new Schema({

  name: {
    type: String,
    required: true,
  },

  album: {
    type: String,
  },

  artist: {
    type: Artist,
    required: true,
  },

  genre: {
    type: String,
  },

  duration: {
    type: Integer,
  },

});

const Song = model('Song', songSchema);

module.exports = Song;