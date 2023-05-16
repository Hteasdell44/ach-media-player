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
    type: String,
    required: true,
  },

  genre: {
    type: String,
  },

  duration: {
    type: Number,
  },

});

const Song = model('Song', songSchema);

module.exports = Song;