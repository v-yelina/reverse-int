module.exports = function reverse(n) {
    const numArr = (n + "").split("");
    return parseInt(numArr.reverse().join(""));
};
