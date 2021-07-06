let input = `internationalization
i12iz4n`
input = input.split('\n')
const regexp = new RegExp('^' + input[1].replace(/([1-9]{1}\d*)/g, '\\w{$1}') + '$')
console.log(`regexp`, regexp)
console.log(`regexp.test(input[0])?1:-1`, regexp.test(input[0]) ? 1 : -1)