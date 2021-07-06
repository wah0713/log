let countArr = []
let deleteArr = []
let del = [220, 320, 230, 330, 240, // z
    022, 024, 033, 042, 044, // x
    204, 303, 302, 402 // y
]
for (let x = 1; x <= 5; x++) {
    for (let y = 1; y <= 5; y++) {
        for (let z = 1; z <= 5; z++) {
            let isDel = false
            del.forEach(del => {
                del = del + ""
                if (x === (del[0] - 0 || x) &&
                    y === (del[1] - 0 || y) &&
                    z === (del[2] - 0 || z)) {
                    isDel = true
                    return false
                }
            })

            if (isDel) {
                deleteArr.push({
                    x,
                    y,
                    z
                })
            } else {
                countArr.push({
                    x,
                    y,
                    z
                })
            }
        }
    }
}
console.log('countArr', countArr.length);
console.log('deleteArr', deleteArr.length);