// // 00 01 11 10
// // 000 001 011 010 110 111 101 100


// var grayCode = function (n) {
//   if (n === 0) {
//     return [0]
//   }
//   let res = 0;
//   const result = [res];
//   for(let i = 1; i < n; i++) {
//     res = res | (res ^ 1 << (i - 1));
//     result.push(res);
//     for(let j = 0; j < i - 1; j++) {
//       res = res | (1 << (j - 1));
//       result.push(res)
//     }
//   }
//   return result
// };

// console.log(grayCode(1));
// console.log(grayCode(2));
// console.log(grayCode(3));
// console.log(grayCode(4));

// // 0000 0  0 0
// // 0001 1  1 1
// // 0011 3  2 1
// // 0010 2  1 -1
// // 0110 6  3 /
// // 0111 7  1 1
// // 0101 5  2 1
// // 0100 4  1 -1
// // 1100 12 4 /
// // 1101 13 1 /
// // 1111 15 2 1
// // 1110 14 1 -1
// // 1010 10 3 2
// // 1011 11 1 13
// // 1001 9  2 14
// // 1000 8  1 15

// 00 0
// 10 2
// 11 3
// 01 1

// 000 0
// 100 4
// 110 6
// 010 2
// 011 3
// 111 7
// 101 5
// 001 1


// 0000 0
// 1000 8
// 1100 12
// 0100 4
// 0110 6
// 1110 14
// 1010 10
// 0010 2
// 0011 3
// 1011 11
// 1111 15
// 0111 7
// 0101 5
// 1101 13
// 1001 9
// 0001 1





// console.log(add())
// console.log(add(1)())
// console.log(add(1)(2)())
// console.log(add(1)(2,3)())
// console.log(add(1)(2,3)(4)())
// console.log(add(1)(2,3)(4)(5)())


// function add(...args) {
//   if (args.length === 0) {
//     return 0;
//   }
//   const nums = [...args];
//   return function a(...newArgs) {
//     if (newArgs.length === 0) {
//       return nums.reduce((res, num) => res + num, 0);
//     }
//     nums.push(...newArgs)
//     return a;
//   }
// }

// add(1, 2, 3, 4);

function add(...nums) {
  return nums.reduce((result, num) => result + num, 0)
}


function currify(fun) {
  const args = [];
  return function currified(...arg) {
    if (arg.length === 0) {
      return fun.call(null, ...args);
    }
    args.push(...arg);
    return currified;
  }
}

var currifiedAdd = currify(add);

console.log(add(1, 2, 3, 4));
console.log(currifiedAdd(1)(2, 3)(4)());





add(1)(2, 3)(4)() // 10




