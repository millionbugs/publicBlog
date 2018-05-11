let blog = require('../controllers/blog.js')
let Router = require('koa-router')
let router = Router()
router.get('/blog', blog.sthHappen)
router.get('/baidu', blog.baidu)
router.get('/mdtest', blog.mdTest)

module.exports = router
