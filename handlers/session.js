const session = require('koa-session');
const config = require('config');

// const sessionConfig = {
//   signed: false,
// }

module.exports.init = app => app.use(session(app))