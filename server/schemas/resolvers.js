const { User, Song, Artist, Album } = require('../models');

const resolvers = {

  Query: {

    allUsers: async () => {
      return User.find({});
    },

    allSongs: async () => {
      return Song.find({});
    },

    allArtists: async () => {
      return Artist.find({});
    },

    allAlbums: async () => {
      return Album.find({});
    },

    // Get Specific User, Song, Artist, Album
    // Delete Specific User, Song, Artist, Album

  },

  Mutation: {

    createUser: async (parent, args) => {
      const newUser = await User.create(args);
      return newUser;
    },

    createSong: async (parent, args) => {
      const newSong = await Song.create(args);
      return newSong;
    },

    createArtist: async (parent, args) => {
      const newArtist = await Artist.create(args);
      return newArtist;
    },

    createAlbum: async (parent, args) => {
      const newAlbum = await Album.create(args);
      return newAlbum;
    },


    // Update User, Song, Artist, Album by ID
    // Delete User, Song, Artist, Album ID

  }

};

module.exports = resolvers;
