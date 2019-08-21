// 实现一个数组的拼接
Array.prototype.myConcat = function(arr) {
    const newArr = this;
    console.log(this);
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i]); // 如果不能用 push 怎么办，如果要多个数组怎么办？

    }
    return newArr;
};

const arr1 = [1, 2, 8];
const arr2 = arr1.myConcat([3, 5, 7]);
console.log(arr2);
