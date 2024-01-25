/**
 * Title: config.js
 * Author: Danielle Taplin
 * Date: 1/17/24
 */

"use strict";

//db object
const db = {
  username: "nodebucket_user",
  password: "s3cret",
  name: "nodebucket"
};

const config = {
  port: 3000,
  dbUrl: `mongodb+srv://${db.username}:${db.password}@bellevueuniversity.05nu6mj.mongodb.net/${db.name}?retryWrites=true&w=majority`,
  dbname: db.name
};

//exports
module.exports = config;