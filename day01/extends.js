class B {

}
class A extends B {

}
// function A(){}
var a = new A()

a.constructor = null
console.log(a instanceof A)

// function A() {
// }
// function B() {

// }
// B.prototype = new A();

// new B();



// var obj = {};
// var arr = []
// var fun = function(){}
// var now = new Date();
// console.log(arr.__proto__ === Array.prototype)
// console.log(fun.__proto__ === Function.prototype)
// console.log(now.__proto__ === Date.prototype)

// console.log(Object.prototype.__proto__ === null)

// var setProtoAttibute(obj) {
//     let proto = Object.getPrototypeOf(obj);
// }

// function hasOwnProty(obj,key) {
//     return Object.prototype.hasOwnProperty.call(obj,key)
//     // return obj.hasOwnProperty && obj.hasOwnProperty(key)
// }
// // console.log(hasOwnProty({name:1}, 'name'))

// console.log(hasOwnProty(Object.create(null), 'name'))


function isFunction(func) {
    if (typeof func === 'function') return true
}
function isArray(arr) {
    // return arr instanceof Array 
    console.log(Object.prototype.toString.call(arr))
    return Object.prototype.toString.call(arr) === '[object Array]'
}

console.log(isFunction(function(){}))
console.log(isArray([]))