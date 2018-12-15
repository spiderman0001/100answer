
//static 的this指向Test
class Test {
    static say() {
        console.log(this);
    }
}
var a = Test.say
a()