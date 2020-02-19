module.exports = function reverse(n) {
    if (String(n).charAt(0) == '-') {
        return parseInt(String(n).substr(1).split('').reverse().join(''));
    } else {
        return parseInt(String(n).split('').reverse().join(''));
    }
}