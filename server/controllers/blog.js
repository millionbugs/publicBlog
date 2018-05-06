let superagent = require('superagent')
module.exports = {
  sthHappen: function () {
    console.log('接收到本次请求')
    return '你好'
  },
  baidu: function () {
    superagent.get('http://vip.meituan.com').end((err, res) => {
      console.log(err)
      console.log(res, '茄子🍆')
      console.log(res.data)
    })
  }
}
