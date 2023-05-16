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
  name: String!
  albums: [String]
}

type Album {
  name: String!
  songs: [String]
}

type Query {
  allUsers: [User]
  allSongs: [Song]
  allArtists: [Artist]
  allAlbums: [Album]
}

type Mutation {
  createUser(email: String!, password: String!): User
  createSong(name: String!, album: String, artist: String!, genre: String, duration: Int): Song
  createArtist(name: String!, albums: [String]): Artist
  createAlbum(name: String!, songs: [String]): Album
}
`;

module.exports = typeDefs;
