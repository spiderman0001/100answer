闭包
function A() {
    var name = '123';
    function setName(val) {
        name = val;
    }
    function getName() {
        return name
    }

    return {
        getName,
        setName,
    }
}

let a =A()
a.setName('ss')
console.log(a.getName())

模块模式

this执行

var a = {
    name: 1,
    test:function() {
        !function(){
            console.log(this.name)
        }()
    }
}
a.test();
var test = a.test;
test();
global.name ='sd'
var a = {
    name: 1,
    test:() => {
        console.log(this)
    }
}
a.test();
var test = a.test;
test();

setTimeout(() => {
})
console.log(this === global)
// node环境中this不是global





