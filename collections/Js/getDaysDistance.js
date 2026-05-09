/**
 *  获取两个时间的天数差值
 * @param {string} time1 第一个时间（2020-11-11）
 * @param {string} time2 第二个时间没有为当前时间
 */
function getDaysDistance(time1, time2 = new Date()) {
    if (!time1) {
        throw ReferenceError('至少有个时间入参')
    }
    const timeStamp1 = Date.parse(time1)
    const timeStamp2 = Date.parse(time2)
    return (Math.abs(timeStamp1 - timeStamp2) / 1000 / 60 / 60 / 24).toFixed(1)
}

console.log(`getDaysDistance('2020-11-11')`, getDaysDistance('2020-11-11'))