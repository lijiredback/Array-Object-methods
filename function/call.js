// call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用函数
// func.call(thisArg, arg1, arg2, ...)


// 思路：
Function.prototype.myCall = function(context, ...args) {
    // 1. myCall 其实是一个方法，那么谁调用了 myCall，myCall 内部的 this 就指向谁
    //    其实就是调用 myCall 的函数
    // 2. 调用 myCall 的必须是一个函数
    if (typeof this !== 'function') throw Error('Except a function')
    
    context.fn = this;
    context.fn(...args);
    delete context.fn;
};

const obj = {
    value: 1,
}

function test(name, age) {
    console.log(this.value);
    console.log(name);
    console.log(age);
}
test.myCall(obj, 'haha', 13);

