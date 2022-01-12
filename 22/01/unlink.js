const fs = require('fs')
const path = require('path')

function deleteFile(fileName) {
  const arr = fs.readFileSync(fileName).toString().split('\n').filter(Boolean)
  arr.forEach(item=>fs.unlinkSync(item))
}

console.log('开始删除')
console.time('耗时')
deleteFile(path.resolve(__dirname, 'compare/can_tFind.log'))
console.timeEnd('耗时')
console.log('结束删除')
