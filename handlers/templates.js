const pug = require('pug');
const path = require('path');
const config = require('config');

module.exports.init = app => app.use(async (ctx, next) => {
  ctx.render = (templatePath, locals) => {
    return pug.renderTemplate(
      path.join(config.get('publicDir'), templatePath),
      locals
    )
  }

  await next()
})