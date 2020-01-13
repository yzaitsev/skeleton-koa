const User = require('../models/User');

module.exports = router => {
  router.get('/users', async (ctx) => {
    try {
      const users = await User.find();
      console.log(users)
      ctx.body = users;
    } catch(err) {
      console.log(`---e route get /users`, err)
    }
  })


  router.post('/users', async (ctx) => {
    try {
      const { body } = ctx.request;
      if (body._id) {
        ctx.response.status = 400;
        return ctx.body = 'Bad request';  
      }
      const user = await User.create(body)
      ctx.body = user;
    } catch (err) {
      console.log(`---e route post /users`, err)
      ctx.body = err.message
    }
  })

  router.patch('/users/:id', async ctx => {
    const { body } = ctx.request;
    try {
      if (body._id) {
        ctx.response.status = 400;
        return ctx.body = 'Bad request';  
      }

      // let user = await User.findOne({ _id: ctx.params.id })

      const user = await User.findByIdAndUpdate(ctx.params.id, { ...body }, { new: true }); 
      if (!user) {
        ctx.response.status = 400;
        return ctx.body = 'Invalid user!';  
      }
      ctx.body = user
    } catch(err) {
      console.log(`---e route patch /users:id`, err)
      ctx.body = err.message
    }
  })
}