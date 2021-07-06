function add(a, b) {
    return a + b
}
const num1 = 1
const num2 = 1
console.time()
for (let i = 0; i < 100000000; i++) {
    add(num1, num2)
}
// add(1, 'a')
// for (let i = 0; i < 100000000; i++) {
//     add(num1, num2)
// }
console.timeEnd()

// 64.575ms 1倍