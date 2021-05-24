// 初始10分，每答对一题所有的分数乘2，打错则扣除对应题目序号分数
// o为题目数量，k为目标分数

let input = `20 1568`

/*
// 1、
const [o, k] = input.split(' ').map(Number)
const arr = new Array(o + 1).fill(null).map(item => new Map())
for (let i = 1; i <= o; i++) {
    if (i === 1) {
        arr[1].set(9, 1)
        arr[1].set(20, 1)
    } else {
        arr[i - 1].forEach((key, value) => {
            const map = arr[i]
            const num1 = value - i
            const num2 = value * 2
            if (!map.has(num1)) {
                map.set(num1, key)
            } else {
                map.set(num1, map.get(num1) + key)
            }

            if (!map.has(num2)) {
                map.set(num2, key)
            } else {
                map.set(num2, map.get(num2) + key)
            }
        })
    }
}
console.log(arr[o].get(k) || 0) */


// 2、逆向推导
var arr = input.split(' ')
var n, s, num = 0
n = parseInt(arr[0])
s = parseInt(arr[1])

function method(n, s) {
    if (n > 0) {
        method(n - 1, s + n)
        if (s % 2 === 0) { // 只有被2整除才进入下次计算（因为不存在小数情况）
            method(n - 1, s / 2)
        }
    } else {
        if (n === 0 && s === 10) {
            num++
        }
    }
}
method(n, s)
console.log(num)