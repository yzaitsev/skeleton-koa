const bodyParser = require('koa-bodyparser');

module.exports.init = app => app.use(bodyParser())