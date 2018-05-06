let blog = require('../controllers/blog.js')
let Router = require('koa-router')
let router = Router()
router.get('blog', blog.sthHappen)
router.get('baidu', blog.baidu)

module.exports = router
