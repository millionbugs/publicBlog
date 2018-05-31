let blog = require('../controllers/blog.js')
let Router = require('koa-router')
let router = Router()
router.get('/blog', blog.sthHappen)
router.get('/baidu', blog.baidu)
router.get('/mdtest', blog.mdTest)
router.get('/scrollbetter', blog.scrollBetter)
router.get('/wyys', blog.wyySongs)
router.get('/vue', blog.vue)

module.exports = router
