/**
 * Title: mongo.js
 * Author: Danielle Taplin
 * Date: 1/17/24
 */

"use strict";

const { MongoClient} = require("mongodb");

const MONGO_URL = "mongodb+srv://nodebucket_user:s3cret@nodebucket.05nu6mj.mongodb.net/nodebucket?retryWrites=true&w=majority"
//module to connect to mongo database, send a database query
const mongo = async(operations, next) => {
  try {
    console.log("Connecting to db. . .");
    const client = await MongoClient.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("nodebucket");
    console.log("Connected to db.");

    await operations(db);
    console.log("Operation was successful.");

    client.close();
    console.log("Connection to db closed.")
}
  catch (err) {
  const error = new Error("Error connecting to db:", err);
  error.status = 500;

  console.log("Error connecting to db:", err);
  next(error);
}
};

module.exports = { mongo };