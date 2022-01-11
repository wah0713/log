const fs = require('fs')
const path = require('path')
const Console = console.Console

try {
    fs.statSync('./compare')
} catch (error) {
    fs.mkdirSync('./compare')
}
// https://www.jianshu.com/p/e4b4d07d1b69
const index = fs.createWriteStream('./compare/index.log')
const can_tFind = fs.createWriteStream('./compare/can_tFind.log')
const fullNameList = fs.createWriteStream('./compare/fullNameList.log')
const fileNameUsed = fs.createWriteStream('./compare/fileNameUsed.log')
const logger = new Console(index, can_tFind)
const fileNameListLog = new Console(fullNameList, fileNameUsed)
const src = path.resolve(__dirname, 'src')
const set = new Set()
const fullNameArray = []

function walk(fileName) {
    const stat = fs.statSync(fileName)
    if (stat.isDirectory()) {
        fs.readdirSync(fileName).forEach(item => walk(path.resolve(fileName, item)))
    } else {
        getPath(fileName)
    }
}

function getPath(fileName) {
    fileNameListLog.log(fileName)
    fullNameArray.push(fileName.replace(/\\/g, '/').replace(/\..*$/, ''))
    logger.log(fileName)
    logger.log(`开始`)
    const str = fs.readFileSync(fileName).toString().replace(/\/\/.*/g, '')
    const res1 = str.match(/(?<=['|"])\.\/.*?(?=['|"])/g)
    logger.log('./')
    if (res1) {
        res1.forEach(item => {
            const name = path.join(fileName, `../${item}`)
            set.add(name.replace(/\..*$/g, '').replace(/\\/g, '/'))
            logger.log(name)
        })
    } else {
        logger.log('null')
    }
    const res2 = str.match(/(?<=['|"])\.\.\/.*?(?=['|"])/g)
    logger.log('../')
    if (res2) {
        res2.forEach(item => {
            const name = path.join(fileName, `../${item}`)
            set.add(name.replace(/\..*$/g, '').replace(/\\/g, '/'))
            logger.log(name)
        })
    } else {
        logger.log('null')
    }
    logger.log(`结束\n`)
}

walk(src);
[...set].forEach(item => {
    fileNameListLog.warn(item)
    if (!fullNameArray.some(ele => {
            return ele === item
        })) {
        logger.warn(item)
    }
});