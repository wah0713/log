let input = `5 3
1 0 1
5 2 6
1 2 2
5 2 4
1 3 3
2 4 1`
// 第一行为 5组 3次
// 第二行为 升序为1 降序为0
let inputArray = input.split('\n')
let [n, length] = inputArray[0].split(' ')
const orders = inputArray[1].split(' ')
inputArray = inputArray.splice(2, n)
inputArray.map(item => item.split(' ').map(Number)).sort((a, b) => {
    let sign = 0
    for (let i = 0; i < orders.length; i++) {
        if (a[i] === b[i]) {
            continue
        }
        sign = orders[i] === '1' ? a[i] - b[i] : b[i] - a[i]
        break
    }
    return sign
}).forEach(item => console.log(item.join(' ')))
