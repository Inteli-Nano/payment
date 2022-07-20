const isDev = process.env.NODE_ENV == "development";
const cfgServer = require("./server");
const mongodb = require("./db");

module.exports = {
  mongodb: mongodb,
  SERVER: cfgServer,
  jwt: {
    accessTokenSecret: "nightfury",
    secretOrPrivateKey: "fury's json web token",
  },
};
