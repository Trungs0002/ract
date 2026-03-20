const { MongoClient } = require('mongodb');

const uri =
  process.env.MONGODB_URI ||
  'mongodb+srv://trungnho0512_db_user:ffVkdD8V9VGjSwlM@car.7jniisv.mongodb.net/?appName=car';

const client = new MongoClient(uri);
let db = null;

async function connectToDb() {
  try {
    if (!db) {
      await client.connect();
      console.log('Connected to MongoDB Atlas successfully!');
      db = client.db('cars');
    }

    return db;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    throw err;
  }
}

module.exports = { connectToDb };
