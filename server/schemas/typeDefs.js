const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
  _id: ID!
  email: String!
  password: String!
  favoriteSongs: [String]
}

type Song {
  _id: ID!
  name: String!
  album: String
  artist: String!
  genre: String
  duration: Int
}

type Artist {
  _id: ID!
  name: String!
  albums: [String]
}

type Album {
  _id: ID!
  name: String!
  songs: [String]
}

type Auth {
  token: ID!
  user: User
}

type Query {
  allUsers: [User]
  specificUser(userId: ID!): User
  allSongs: [Song]
  specificSong(songId: ID!): Song
  allArtists: [Artist]
  specificArtist(artistId: ID!): Artist
  allAlbums: [Album]
  specificAlbum(albumId: ID!): Album
  me: User
}

type Mutation {
  login(email: String!, password: String!): Auth
  createUser(email: String!, password: String!): Auth
  updateUser(userId: ID!, email: String!, password: String!): User
  deleteUser(userId: ID!): User
  createSong(name: String!, album: String, artist: String!, genre: String, duration: Int): Song
  updateSong(songId:ID!, name: String!, album: String, artist: String!, genre: String, duration: Int): Song
  deleteSong(songId: ID!): Song
  createArtist(name: String!, albums: [String]): Artist
  updateArtist(artistId: ID!, name: String!, albums: [String]): Artist
  deleteArtist(artistId: ID!): Artist
  createAlbum(name: String!, songs: [String]): Album
  updateAlbum(albumId: ID!, name: String!, songs: [String]): Album
  deleteAlbum(albumId: ID!): Album
}
`;

module.exports = typeDefs;
