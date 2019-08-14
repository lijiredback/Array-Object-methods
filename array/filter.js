// filter() 方法，返回一个符合条件元素组成的新数组

const orginalArr = [1, 2, 3, 4, 5];
// const b = orginalArr.filter(v => v > 3)
// console.log(b);

function filter(array, func) {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        func(array[i]) && newArr.push(func(array[i]));
    }
    return newArr;
}

const ret = filter(orginalArr, function(item) {
    if (item > 4) return item;
});

console.log(ret);