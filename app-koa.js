const Koa = require('koa')
const app = new Koa()

const blog = require('./server/routes/blog.js')
const Router = require('koa-router')
let router = Router()

router.use('/api', blog.routes())

app.use(router.routes())

app.use(async ctx => {
  console.log('hello world')
})

app.listen(3000)
