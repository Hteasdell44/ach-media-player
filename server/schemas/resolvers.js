const { AuthenticationError } = require('apollo-server-express');
const { User, Song, Artist, Album } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {

  Query: {

    allUsers: async () => {
      return User.find({});
    },

    specificUser: async(parent, args) => {
      return User.findOne({ _id: args.userId });
    },

    allSongs: async () => {
      return Song.find({});
    },

    specificSong: async(parent, args) => {
      return Song.findOne({ _id: args.songId });
    },

    allArtists: async () => {
      return Artist.find({});
    },

    specificArtist: async(parent, args) => {
      return Artist.findOne({ _id: args.artistId });
    },

    allAlbums: async () => {
      return Album.find({});
    },

    specificAlbum: async(parent, args) => {
      return Album.findOne({ _id: args.albumId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    
   },


  Mutation: {

    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return {token, user};
    }, 
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args) => {
      const updatedUser = await User.findOneAndUpdate(
        { _id: args.userId },

        { 

          email: args.email,
          password: args.password

        },
        { new: true }
      );
      return updatedUser;
    },


    deleteUser: async (parent, args) => {
      const deletedUser = await User.findOneAndDelete({ _id: args.userId });
      return deletedUser;
    },

    createSong: async (parent, args) => {
      const newSong = await Song.create(args);
      return newSong;
    },

    updateSong: async (parent, args) => {
      const updatedSong = await Song.findOneAndUpdate(
        { _id: args.songId },

        { 
          name: args.name,
          artist: args.artist,
          duration: args.duration,
          genre: args.genre,
          album: args.album
         },

        { new: true }
      );
      return updatedSong;
    },

    deleteSong: async (parent, args) => {
      const deletedSong = await Song.findOneAndDelete({ _id: args.songId });
      return deletedSong;
    },

    createArtist: async (parent, args) => {
      const newArtist = await Artist.create(args);
      return newArtist;
    },

    updateArtist: async (parent, args) => {
      let updatedArtist = await Artist.findOneAndUpdate(
        { _id: args.artistId },
        { name: args.name},
        { new: true }
      );
      
      updatedArtist = await Artist.findOneAndUpdate(
        { _id: args.artistId },
        { $addToSet: { albums: { $each: args.albums } } },
        { new: true }
      );

      return updatedArtist;
    },

    deleteArtist: async (parent, args) => {
      const deletedArtist = await Artist.findOneAndDelete({ _id: args.artistId });
      return deletedArtist;
    },

    createAlbum: async (parent, args) => {
      const newAlbum = await Album.create(args);
      return newAlbum;
    },

    updateAlbum: async (parent, args) => {
      let updatedAlbum = await Album.findOneAndUpdate(
        { _id: args.albumId },
        { name: args.name},
        { new: true }
      );
      
      updatedAlbum = await Album.findOneAndUpdate(
        { _id: args.albumId },
        { $addToSet: { songs: { $each: args.songs } } },
        { new: true }
      );
      return updatedAlbum;
    },

    deleteAlbum: async (parent, args) => {
      const deletedAlbum = await Album.findOneAndDelete({ _id: args.albumId });
      return deletedAlbum;
    },

  }

};

module.exports = resolvers;
