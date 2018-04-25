let blog = require('../controllers/blog.js')
let Router = require('koa-router')

let router = Router()

router.get('blog', blog)

module.exports = router
