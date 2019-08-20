// map 方法返回一个函数，不改变原函数

const originalArr = [1, 2, 3, 4, 5];

function map(array, func) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        newArr.push(func(array[i]));
    }
    return newArr;
}

const ret = map(originalArr, function(item) {
    return item * 3;
});

console.log(ret);

module.exports = map;