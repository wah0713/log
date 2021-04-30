const set1 = new Set([1, 2, 3, 4, 5, 6, 7, 8])
const set2 = new Set([1, 2, 3, 4, 5, 8, 13, 5])
const set3 = new Set([1, 2, 5, 4, 5, 2, 13, 5])

// 利用set的去重，add后和原来的size对比
function unique(set1, set2, set3) {
    const szie2 = set2.size
    const szie3 = set3.size
    const arr = []
    set1.forEach(element => {

        if (szie2 !== set2.add(element).size) {
            set2.delete(element)
            return
        }

        if (szie3 !== set3.add(element).size) {
            set3.delete(element)
            return
        }
        arr.push(element)
    });
    return arr
}

console.log(unique(set1, set2, set3))