function deepClone(obj, newObj) {
    newObj = newObj || {}
    for (var key in obj) {
        if (typeof obj[key] === 'object') {
            newObj[key] = Object.prototype.toString.call(obj[key]) === '[object Array]' ? [] : {};
            console.log(newObj[key])
            deepClone(obj[key], newObj[key])
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj
}
var a = {
    name: 1,
    nums: [1, 2, 3],
    house: {
        name: 'house'
    }
}
var obj = deepClone(a)
obj.nums[0] = 2
console.log(obj,a)
