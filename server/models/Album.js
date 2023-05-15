const { Schema, model } = require('mongoose');

const albumSchema = new Schema({

  name: {

    type: String,
    required: true,
  },

  songs: [

    {
        type: Song,
    }

  ],

});

const Album = model('Album', albumSchema);

module.exports = Album;