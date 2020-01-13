const Router = require('koa-router');
const router = new Router();

require('./user')(router);


module.exports.init = app => app.use(router.routes())