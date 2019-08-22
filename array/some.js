// some()方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个Boolean类型的值。
// 对于空数组上的任何条件，此方法返回false。

Array.prototype.mySome = function(func) {
    const newArr = this;
    if (newArr.length === 0) return false;
    for (let i = 0; i < newArr.length; i++) {
        if (func(newArr[i])) {
            return true;
        }
    }
    return false;
};

const arr = [1, 2, 3];
const isTrue = arr.mySome(v => {
    return v > 3;
});
console.log(isTrue);