const fs = require('fs')
const path = require('path')
const Console = console.Console

if (!fs.existsSync('./temp')) {
    fs.mkdirSync('./temp')
}

const index = fs.createWriteStream('./temp/index.log')
const repeat = fs.createWriteStream('./temp/repeat.log')
const fullNameList = fs.createWriteStream('./temp/fullNameList.log')
const fileNameUsed = fs.createWriteStream('./temp/fileNameUsed.log')
const logger = new Console(index, repeat)
const fileNameListLog = new Console(fullNameList, fileNameUsed)

function walk(fileName) {
    const stat = fs.statSync(fileName)
    if (stat.isDirectory()) {
        fs.readdirSync(fileName).forEach(item => walk(path.resolve(fileName, item)))
    } else if (fileName.search(/\\\d+\.md$/) > 0) {
        fileNameListLog.log(fileName)
        main(fileName)
    }
}

const obj = {}

function main(fileName) {
    logger.log(fileName)
    logger.log(`开始`)
    const str = fs.readFileSync(fileName).toString()
    const res = str.match(/^#{2,3}\s/gm)
    console.log(`res`, res)
    if (res) {
        const naemList = fileName.replace(/[\D]/g, '').replace(/(\d)(?=(\d{2})+$)/g, '$1,').split(',')
        if (!obj[naemList[0]]) {
            obj[naemList[0]] = {
                total: 0
            }
        }
        if (!obj[naemList[0]][naemList[1]]) {
            obj[naemList[0]][naemList[1]] = {
                total: 0
            }
        }

        res.forEach(item => {
            logger.log(item)
        })
        obj[naemList[0]][naemList[1]][naemList[2]] = {
            total: res.length
        }
        obj[naemList[0]][naemList[1]].total += res.length
        obj[naemList[0]].total += res.length
    } else {
        logger.log('null')
    }
    logger.log(`结束\n`)
}

console.log('开始扫描')
console.time('耗时')
walk('../');
console.log(`obj`, JSON.stringify(obj))
const arr = []
Object.keys(obj).forEach(item => {
    const o = {
        name: item,
        type: 'line',
        data: Array(12).fill(null).map((i, index) => {
            const num = obj[item][String(index).padStart(2, '0')]
            if (!num) {
                return 0
            }
            return num.total
        })
    }
    arr.push(o)
})
console.log(JSON.stringify(arr))
console.timeEnd('耗时')
console.log('结束扫描')

// /[\D]/g,
//