const Koa = require('koa')
const app = new Koa()

const blog = require('./server/routes/blog.js')
const Router = require('koa-router')
let router = Router()

router.use('/api', blog.routes())

app.use(router.routes())

app.listen(3000)
// let {symbolIterator} = require('/Users/yangsir/Desktop/blog/my-project/server/controllers/iterator.js')
// symbolIterator();

// var http = require('http');
// http.createServer(
//   function (req, res) {
//     res.writeHead(200, {
//       'Content-Type': 'text/plain'
//     });
//     res.end('Hello World\n');
//   }
// ).listen(1337, '127.0.0.1');
// console.log('Server running at http://127.0.0.1:1337/');

