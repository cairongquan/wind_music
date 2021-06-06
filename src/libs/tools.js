export default {
    changeUnit(num) { //单位转换
        if (num < 10000) return num;
        if (num >= 10000) return (num / 10000) + '万';
    }
}