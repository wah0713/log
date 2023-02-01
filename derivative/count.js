const fs = require('fs')
const path = require('path')
const Console = console.Console


if (!fs.existsSync(path.resolve(__dirname, './countTemp'))) {
    fs.mkdirSync(path.resolve(__dirname, './countTemp'))
}

const index = fs.createWriteStream(path.resolve(__dirname, './countTemp/index.log'))
const repeat = fs.createWriteStream(path.resolve(__dirname, './countTemp/repeat.log'))
const fullNameList = fs.createWriteStream(path.resolve(__dirname, './countTemp/fullNameList.log'))
const fileNameUsed = fs.createWriteStream(path.resolve(__dirname, './countTemp/fileNameUsed.log'))
const html = fs.createWriteStream(path.resolve(__dirname, './countTemp/index.html'))
const logger = new Console(index, repeat)
const fileNameListLog = new Console(fullNameList, fileNameUsed)
const htmlLog = new Console(html, html)

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
    if (res) {
        const naemList = fileName.replace(/[\D]/g, '').match(/\d{6}$/)[0].replace(/(\d)(?=(\d{2})+$)/g, '$1,').split(',')
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
walk(path.resolve(__dirname, '../'));
const arr = []
Object.keys(obj).forEach(item => {
    const o = {
        name: item,
        type: 'line',
        smooth: true,
        data: Array(12).fill(null).map((i, index) => {
            const num = obj[item][String(index + 1).padStart(2, '0')]
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

htmlLog.log(`<!DOCTYPE html><html><head><meta charset="utf-8"/><title>这才不是统计图</title><!--引入刚刚下载的ECharts文件--><script src="https://cdn.bootcdn.net/ajax/libs/echarts/5.3.2/echarts.common.min.js"></script></head><body><div id="main"style="width: 1200px;height:800px;"></div><script type="text/javascript">var myChart=echarts.init(document.getElementById('main'));`)
var option = {
    title: {
        text: '这才不是统计图'
    },
    tooltip: {
        trigger: 'axis',
        hideDelay: '999999',
        formatter(arr) {
            return `${arr[0].name}<br/>` + arr.filter(item => item.data).sort((a, b) => (b.data -
                a.data)).map(item => (
                `${item.marker}${item.seriesName}                                 ${item.data}`)).join(
                '<br />')
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec',
        ]
    },
    yAxis: {
        type: 'value'
    },
    legend: {
        data: []
    }
};
option.series = arr
option.legend.data = Object.keys(obj)

function obj2Str(obj, key) {
    switch (typeof (obj)) {
        case 'object':
            var ret = [];
            if (obj instanceof Array) {
                for (var i = 0, len = obj.length; i < len; i++) {
                    ret.push(obj2Str(obj[i]));
                }
                return '[' + ret.join(',') + ']';
            } else if (obj instanceof RegExp) {
                return obj.toString();
            } else {
                for (var a in obj) {
                    ret.push(a + ':' + obj2Str(obj[a], a));
                }
                return '{' + ret.join(',') + '}';
            }
            case 'function':
                var str = String(obj)
                str = str.replace(/.*\(([\s\S]*?)\)(\s*)({[\s\S]*})/g, 'function($1)$3')
                return str;
            case 'number':
                return obj.toString();
            case 'string':
                return "\"" + obj.replace(/(\\|\")/g, "\\$1").replace(/\n|\r|\t/g, function (a) {
                    return ("\n" == a) ? "\\n" : ("\r" == a) ? "\\r" : ("\t" == a) ? "\\t" : "";
                }) + "\"";
            case 'boolean':
                return obj.toString();
            default:
                return obj.toString();
    }
}
htmlLog.log(`var option=${obj2Str(option)}`)
htmlLog.log(`myChart.setOption(option);</script></body></html>`)

const exec = require("child_process").exec;
exec(`explorer.exe ${path.resolve(__dirname, './countTemp/index.html')}`)