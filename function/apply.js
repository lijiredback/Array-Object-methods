Function.prototype.myApply = function(context, array) {
    if (typeof this !== 'function') throw new Error('expect a function')
    if (array && !(array instanceof Array)) throw new Error('must be an Array');
    // todo , 判断要修改，没传的时候，会报错

    context.fn = this;
    context.fn(...array);
    delete context.fn;
}

const obj = {
    value: 2
};

function test(name, age) {
    console.log(this.value);
    console.log(`I'm ${name}, ${age} years old`);
}

test.myApply(obj, ['lee', 18]);