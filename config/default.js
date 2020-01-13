const path = require('path');

module.exports = {
  secret: "mysecretkey",
  port: 3000,
  root: process.cwd(),
  publicDir: path.join(process.cwd(), 'public'),
  mongodb: {
    uri: 'mongodb://localhost:27017/db_name'
  }
}