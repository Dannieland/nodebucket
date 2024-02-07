/**
 * Title: mongo.js
 * Author: Danielle Taplin
 * Date: 1/17/24
 */

"use strict"

// Import Mongo
const { MongoClient } = require('mongodb');
const config = require('./config');

// Define connection string
const MONGO_URL = config.dbUrl;

// Define mongo function
const mongo = async (operations, next) => {

  try {
    console.log('Connecting to database...');

    // Connect to database
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Define database
    const db = client.db(config.dbname);
    console.log('Connected to database');

    // Call operations
    await operations(db);
    console.log('Operation was successful');

    // Close connection
    client.close();
    console.log('Connection closed');

    // Error handling for database connection
  } catch (err) {
    const error = new Error('Application Error', err);
    error.status = 500;
    console.log("Error connecting to the database:", err);
  }
};

module.exports = { mongo };



