const superagent = require('superagent')
const fs = require('fs')
const cheerio = require('cheerio')
const Mdjs = require('md-js')
let nextUrl = 'nndss/nndss_weekly_tables_menu.asp?mmwr_year=2006&mmwr_week=04'
let localFilePath = 'tableDress.text'
let mdFilePath = '/Users/yangsir/Desktop/blog/my-project/build/md/importMdTest.md'
let i = 0

function eachPage (nextUrl, file) {
  nextUrl = 'https://wonder.cdc.gov/' + nextUrl
  console.log(nextUrl)
  if (i >= 10) {
    fs.close(file, err => {
      console.log(err ? 'close失败' + err : false)
    })
    return
  }
  i++
  if (file) {
    formatPage(nextUrl, file, eachPage)
  } else if (!file) {
    fs.open(localFilePath, 'a', function (err, file) {
      if (err) {
        return console.error(err)
      }
      formatPage(nextUrl, file, eachPage)
    })
  }
}

function formatPage (nextUrl, file, cb) {
  superagent.get(nextUrl).end((err, res) => {
    if (err) {
      console.log('获取数据链接失败', err)
      return
    }
    let responseText = res.text
    let $ = cheerio.load(responseText)
    let next = $('input[value="Next"]').parent().attr('href')
    let filePaths = []
    Array.from($('a:contains("Export Data")')).forEach(element => {
      filePaths.push(element.attribs['href'])
    })
    let fileDate = next + ':\n' + filePaths.join('\n') + '\n'
    let date = new Date().toString()
    fs.appendFile(file, date + '\n' + fileDate, {flag: 'a'}, function (err) {
      console.log(date, err ? '写入文件失败:' + err : false)
    })
    cb(next)
  })
}

function readMd (filePath) {
  if (!filePath) return
  return fs.readFileSync(filePath, function (err, data) {
    if (err) {
      console.log(`read ${filePath} failed ${err}`)
      return `read ${filePath} failed ${err}`
    }
    return data
  })
}

module.exports = {
  sthHappen: function () {
    console.log('接收到本次请求')
    return '你好'
  },
  baidu: function () {
    eachPage(nextUrl)
    superagent('https://wonder.cdc.gov/' + 'nndss_reps.asp?mmwr_year=2006&mmwr_week=04&mmwr_table=2A&request=Export')
    .end((err, res) => {
      console.log(err, '坏🍆')
      console.log(res, '好🍆')
    })
  },
  mdTest: function () {
    let mdText = readMd(mdFilePath).toString()
    return Mdjs.md2html(mdText)
  }
}
