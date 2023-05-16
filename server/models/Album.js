const { Schema, model } = require('mongoose');

const albumSchema = new Schema({

  name: {

    type: String,
    required: true,
  },

  songs: [

    {
      type: String,
    },

  ],

});

const Album = model('Album', albumSchema);

module.exports = Album;