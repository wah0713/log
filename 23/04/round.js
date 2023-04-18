function round(X = 8, Y = 8) {
    let add = Y
    let acc = 0
    let round = 0

    const arr = Array(X).fill(1).map(item => Array(Y).fill(0))

    function main(i) {
        let x, y
        const round2 = (round + 2) / 2 | 0
        const roundNum = round / 4 | 0
        let newAdd = X - round2
        if (round % 4 === 0) {
            x = roundNum
            y = i - acc + roundNum
        } else if (round % 4 === 1) {
            newAdd = Y - round2
            x = i - acc + roundNum + 1
            y = Y - 1 - roundNum
        } else if (round % 4 === 2) {
            x = X - 1 - roundNum
            y = acc + add - i + roundNum - 1
        } else if (round % 4 === 3) {
            newAdd = Y - round2
            x = acc + add - i + roundNum
            y = roundNum
        }

        if (acc + add === i + 1) {
            acc += add
            add = newAdd
            round++
        }

        return {
            x,
            y
        }
    }
    for (let i = 0; i < X * Y; i++) {
        const {
            x,
            y
        } =
        main(i)
        arr[x][y] = i + 1
    }
    console.table(arr)
}
round(3, 3)