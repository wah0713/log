function _btoa(str) {
    const base64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
    const a = [...str].map(item => item.charCodeAt().toString(2).padStart(8, '0')).join('')
    let list = []
    for (let i = 0; i < Math.ceil(a.length / 6); i++) {
        list.push(base64[parseInt(`00${a.slice(i * 6, (i + 1) * 6)}`.padEnd(8, '0'), 2)])
    }
    const res = list.join('')
    console.log(res.padEnd(Math.ceil(res.length / 4) * 4, '='))
}
_btoa('http://www.ruanyifeng.com/blog/2008/06/base64.html')
_btoa('Man')
_btoa('Ma')
_btoa('M')