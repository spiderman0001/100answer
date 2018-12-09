- String
- Number
- Boolean
- Null
- Undefined
- Symbol

- Object

 String == Number 
 1+''
 1..toString();
 String(1)

 console.log(null == undefined)

 var a = Symbol('sdf')
 var b = Symbol('sdf')
 console.log(a === b)

 iterator  
var obj = [1,2,3]
var obj = {a:1,b:2}÷

obj[Symbol.iterator] = function() {
    var values = Object.values(this)
    // var obj = this;
    var index = -1;

    return {
        next: function() {
            index += 1;
            var value = values[index];
            return {
                value: value,
                done: index === 2
            }
        },
    }
}

for(var i of obj) {
    console.log(i)
}

