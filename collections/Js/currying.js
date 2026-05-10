// 柯里化
const currying = fn => {
    const arr = []
    const a = (...rest) => {
        if (rest.length === 0) return fn(...arr)
        arr.push(...rest)
        return a
    }
    return a
}

// 简单累加
const sum = (...rest) => rest.reduce((acc, item) => acc + item, 0)

const b = currying(sum)
b(1)
b(2, 3)
b(4)(5)
console.log(`b()`, b())