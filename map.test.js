const map = require('./array/map');

test('map method', () => {
    expect(map([1,2,3], (num) => {
        return num * 2
    })[0]).toBe(2);
    expect(map([1,2,3], (num) => {
        return num * 2
    })[1]).toBe(4);
    expect(map([1,2,3], (num) => {
        return num * 2
    }).length).toBe(3);
});