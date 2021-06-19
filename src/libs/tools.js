export default {
    changeUnit(num) { //单位转换
        if (num < 10000) return num;
        if (num >= 10000) return (num / 10000) + '万';
    },
    DateFormatNumG(time, fmt) { //时间戳转换
        const t = new Date(time)
        // 日期格式
        fmt = fmt || 'Y-M-D H:I:S'

        const hash = {
            'y': t.getFullYear(),
            'm': t.getMonth() + 1,
            'd': t.getDate(),
            'h': t.getHours(),
            'i': t.getMinutes(),
            's': t.getSeconds()
        }
        // 是否补 0
        const isAddZero = (o) => {
            return /M|D|H|I|S/.test(o)
        }
        return fmt.replace(/\w/g, o => {
            let rt = hash[o.toLocaleLowerCase()]
            return rt > 10 || !isAddZero(o) ? rt : `0${rt}`
        })
    },
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //含最大值，含最小值  0<1
    }
}