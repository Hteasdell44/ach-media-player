const { Schema, model } = require('mongoose');

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },

  password: {
    type: String,
    required: true,
    minLength: 5,
  },

  favoriteSongs: [

    {
        type: Song,
    }

  ]

});

const User = model('User', userSchema);

module.exports = User;