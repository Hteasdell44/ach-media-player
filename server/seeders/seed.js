const db = require('../config/connection');
const { User, Song, Artist, Album } = require('../models');

const userData = require('./data/userData.json');
const songData = require('./data/songData.json');
const artistData = require('./data/artistData.json');
const albumData = require('./data/albumData.json');

db.once('open', async () => {
  await User.deleteMany({});
  await Song.deleteMany({});
  await Artist.deleteMany({});
  await Album.deleteMany({});

  await User.insertMany(userData);
  await Song.insertMany(songData);
  await Artist.insertMany(artistData);
  await Album.insertMany(albumData);

  console.log('The Music Database Has Been Seeded!');
  process.exit(0);
});