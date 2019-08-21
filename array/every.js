//  every() 不会对空数组进行检测
//  every() 不会改变原始数组

Array.prototype.myEvery = function(func) {
    if (this.length === 0) return true;
    const newArr = JSON.parse(JSON.stringify(this));
    for (let i = 0; i < newArr.length; i++) {
        if (!func(newArr[i])) return false;
        return true;
    }
};

const arr = [1, 2, 3];
const flag = arr.myEvery(v => {
    return v > -2;
});
console.log(flag);