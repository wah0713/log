let arr = [{
        a: '2',
        b: '3',
        c: '4',
        d: '5'
    },
    {
        a: '2',
        b: '8',
        c: '44',
        d: '5'
    },
    {
        a: '4',
        b: '3',
        c: '34',
        d: '5'
    },
    {
        a: '2',
        b: '3',
        c: '4',
        d: '6'
    },
    {
        a: '2',
        b: '9',
        c: '4',
        d: '5'
    },
    {
        a: '7',
        b: '5',
        c: '94',
        d: '65'
    },
    {
        a: '2',
        b: '3',
        c: '47',
        d: '5'
    },
    {
        a: '6',
        b: '4',
        c: '4',
        d: '5'
    }
]

function handleArr1(arr) {
    console.time('handleArr1')
    let tempArr = arr.map((current, index, arr) => ({
            e: "" + current.a + current.b,
            ...current
        })),
        obj = {}
    tempArr.forEach((item, index) => {
        if (!obj[item.e]) {
            obj[item.e] = item
        }
    })
    tempArr = []
    for (const item in obj) {
        tempArr.push(obj[item])
    }
    console.log(tempArr)
    console.timeEnd('handleArr1')
}

function handleArr2(obj = {}) {
    console.time('handleArr2')
    const tmp = {}
    obj.forEach(res => {
        tmp["" + res.a + res.b] = res
    })
    const newArr = []
    for (let item in tmp) {
        newArr.push(tmp[item])
    }
    console.log(newArr)
    console.timeEnd('handleArr2')
}

function handleArr3(arr) {
    console.time('handleArr3')
    let arr2 = []
    arr.forEach(r => {
        const exist = arr2.find(r2 => (r2.a + r2.b) === (r.a + r.b)) // 查找arr2中是否存在 （a+b）相同的数据
        if (!exist) { // 如果不存在就 push 到arr2中
            arr2.push(r)
        }
    })
    console.log(arr2)
    console.timeEnd('handleArr3')
}

handleArr1(arr)
handleArr2(arr)
handleArr3(arr)