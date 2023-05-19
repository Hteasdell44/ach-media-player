import { gql } from '@apollo/client';

export const ALL_USERS = gql`
    query AllUsers {
        allUsers {
        _id
        email
        password
        }
    }
`;

export const ALL_SONGS = gql`
    query AllSongs {
        allSongs {
        name
        _id
        album
        artist
        duration
        genre
        mp3Link
        }
    }
`;

export const SPECIFIC_SONG = gql`
    query SpecificSong($songId: ID!) {
        specificSong(songId: $songId) {
        name
        _id
        album
        artist
        duration
        genre
        }
    }
`;

export const SPECIFIC_USER = gql`
query SpecificUser($userId: ID!) {
    specificUser(userId: $userId) {
      _id
      email
      password
    }
  }
`;
