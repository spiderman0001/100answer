// var obj = {
//   a: 1,
//   b: 2
// }

// obj[Symbol.iterator] = function () {
//   var values = Object.values(this);
//   var index = -1;
//   return {
//     next() {
//       index += 1;
//       return {
//         value: values[index],
//         done: index === values.length
//       }
//     },
//     return () {
//       console.log('returning');
//       return {
//         done: true
//       }
//     },
//     throw() {
//       console.log('throwing');
//     }
//   }
// }

// obj[Symbol.iterator] = function* () {
//   var values = Object.values(this);
//   yield* values;
// }

// for(let v of obj) {
//   console.log(v);
//   if (v === 1) {
//     break;
//   }
// }

function* a() {

}

var b = a();

console.log(b instanceof a);
console.log(b);


// console.log(b[Symbol.iterator]);
