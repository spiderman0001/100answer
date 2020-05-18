const promise = new Promise(resolve=> {
  console.log('11111')
  setTimeout(() => {
    console.log('22222')
  }, 0);
  resolve()
  // reject()
  throw new Error('error')
})

promise.then(()=> {
  console.log('33333')
  setTimeout(() => {
    console.log('44444')
  }, 0);
},()=> {
  console.log('reject')
}).catch(()=> {
  console.log('catch')
})
console.log('55555')


 