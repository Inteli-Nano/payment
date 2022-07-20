const isDev = process.env.NODE_ENV == "development";

module.exports = {
  PORT: isDev ? 8080 : 80,
};
