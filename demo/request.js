function fetch(url) {
  return new Promise(resolve => {
    console.log(url);
    setTimeout(resolve, 1000)
  })
}


function sendRequest(urls, max, callback) {
  let count = 0;
  let now = 0;
  if (urls.length <= max) {
    return Promise.all(urls.map(url => fetch(url))).then(callback)
  }

  const addRequest = () => {
    // console.log(count, now);
    if(count < max && now !== urls.length - 1) {
      now += 1;
      count += 1;
      fetch(urls[now]).then(() => {
        count -= 1;
        addRequest()
      })
    } else {
      callback()
    }
  }

  for(; count < max; count++) {
    fetch(urls[now]).then(() => {
      count -= 1;
      addRequest()
    });
    now += 1;
  }
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

sendRequest(urls, 4, () => {
  console.log('done')
})
