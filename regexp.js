var reg1 = new RegExp('[0-9]+','g')
var reg2 = /[0-9]+/g
var reg3 = /[0-9]+/g

// console.log(reg1 === reg2);
// console.log(reg2 === reg3);

reg1.test()
// g m i u y  unicode 
// reg1.test()

''.replace()
''.match()
''.search()
''.split()

// exec
// test



// * ? + 

// 单词 \b 

// \s  \W \w   

// {1,}

// (<>)  $1

// ?:非捕获

// var re = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;  
// let value = re.exec('123-123-1233')
// console.log(value)
console.log(/^(\+86)?(?<a>1[3,5,6,7,8]\d{9})$/.exec('+8615000000000'))
// console.log(/^(\+86)?(1[3,5,6,7,8]\d{9})$/.test(15000000000))
// var res = '15000000000'.search(/^(\+86)?(1[3,5,6,7,8]\d{9})$/)

// console.log(res);






