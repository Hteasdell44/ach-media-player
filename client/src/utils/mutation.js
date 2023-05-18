import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            email
            password
        }
        }
    }
`;

export const CREATE_USER = gql`
    mutation CreateUser($email: String!, $password: String!) {
        createUser(email: $email, password: $password) { 
        token
        user {
        _id
        email
        password
       }
     }
    }   
`;

export const DELETE_USER = gql`
    mutation DeleteUser($userId: ID!) {
        deleteUser(userId: $userId) {
          _id
          email
          password
        }
      }
`;

export const CREATE_SONG = gql`
    mutation CreateSong($name: String!, $artist: String!, $album: String, $genre: String, $duration: Int) {
        createSong(name: $name, artist: $artist, album: $album, genre: $genre, duration: $duration) {
        _id
        album
        duration
        artist
        genre
        name
        }
    }
`;

export const DELETE_SONG = gql`
    mutation DeleteSong($songId: ID!) {
        deleteSong(songId: $songId) {
        name
        _id
        album
        artist
        duration
        genre
        }
    }
`;

export const ADD_USER = gql`
  mutation addUser( $email: String!, $password: String!) {
    addUser(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;