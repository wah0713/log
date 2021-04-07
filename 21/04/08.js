function func() {
    let sou = inputArray[0]
    let m = ""
    let stack = []
    for (let i of sou) {
        if (i == "(") {
            stack.push(m)
        } else if (i == ")") {
            m = stack.pop() + m.split("").reverse().join("")
        } else {
            m += i
        }
    }
    console.log(`m`, m)
}
// 栈使用