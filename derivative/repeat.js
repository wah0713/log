const fs = require('fs')
const path = require('path')
const Console = console.Console

if (!fs.existsSync(path.resolve(__dirname, './repeatTemp'))) {
  fs.mkdirSync(path.resolve(__dirname, './repeatTemp'))
}
const index = fs.createWriteStream(path.resolve(__dirname, './repeatTemp/index.log'))
const repeat = fs.createWriteStream(path.resolve(__dirname, './repeatTemp/repeat.log'))
const fullNameList = fs.createWriteStream(path.resolve(__dirname, './repeatTemp/fullNameList.log'))
const fileNameUsed = fs.createWriteStream(path.resolve(__dirname, './repeatTemp/fileNameUsed.log'))
const logger = new Console(index, repeat)
const fileNameListLog = new Console(fullNameList, fileNameUsed)
const set = new Set()

function walk(fileName) {
  const stat = fs.statSync(fileName)
  if (stat.isDirectory()) {
    fs.readdirSync(fileName).forEach(item => walk(path.resolve(fileName, item)))
  } else if (fileName.search(/\\\d+\.md$/) > 0) {
    getPath(fileName)
  }
}

function getPath(fileName) {
  fileNameListLog.log(fileName)
  logger.log(fileName)
  logger.log(`开始`)
  const str = fs.readFileSync(fileName).toString()
  const res = str.match(/http(s)?.+?(?=[\)|\(|\?|#|'|"|\s])/g)
  if (res) {
    res.forEach(item => {
      logger.log(item)
      if (set.has(item)) {
        logger.warn(fileName)
        logger.warn(item)
      }
      set.add(item)
    })
  } else {
    logger.log('null')
  }
  logger.log(`结束\n`)
}

console.log('开始扫描')
console.time('耗时')
walk(path.resolve(__dirname, '../'));
console.timeEnd('耗时')
console.log('结束扫描')

// /^#{2, }\s/gm
// /http(s)?.+?(?=[\)|\(|\?|#|'|"|\s])/g
// /http(s)?.+/g

// /[\D]/g,
// /(\d)(?=(\d{2})+$)/g, '$1, '