function fetch(url) {
  return new Promise(resolve => {
    console.log(url);
    setTimeout(resolve, 1000)
  })
}


function sendRequest(urls, callback) {
  let now = 0;

  const addRequest = () => {
    if(now !== urls.length - 1) {
      now += 1;
      fetch(urls[now]).then(() => {
        addRequest()
      })
    } else {
      callback()
    }
  }

  fetch(urls[now]).then(() => {
    addRequest()
  });
}

const urls = [
  '111',
  '222',
  '333',
  '444',
  '555',
  '666',
  '777',
  '888',
]

sendRequest(urls, () => {
  console.log('done')
})
