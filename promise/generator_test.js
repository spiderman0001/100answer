//消息传递
function* foo(x) {
    var y = x * (yield)
    return y
}
var it = foo(6)
it.next();
var res = it.next(7)
console.log(res)

//消息传递是双向的

function* foo(x) {
    var y = x * (yield "Hello")
    return y

}
var it = foo(6)
var res = it.next()
console.log(res.value)
res = it.next(7)
console.log(res.value)

//多个迭代器
var z =1
function* foo(x) {
    var x = yield 2
    z++
    var y = yield x * z
    console.log(x,y,z)
}

var it1 =foo();
var it2 =foo();
var val1 = it1.next().value;//2
var val2 = it2.next().value;//2
console.log(val2,val1)
val1 = it1.next(val2 * 10).value;// 2* 10 * 2
val2 = it2.next(val1 * 5).value;// 40* 5 * 3
console.log(val2,val1)
it1.next(val2/2)//20 300 3 z不变

it2.next(val1/2)//200 20 3 z不变


