function fetch(url) {
  return new Promise(resolve => {
    console.log(url);
    setTimeout(resolve, 1000)
  })
}


function sendRequest(urls, max, callback) {
  let count = 0;
  let now = 0;
  let done = false;

  const send = () => {
    fetch(urls[now]).then(() => {
      count -= 1;
      addRequest()
    });
    now += 1;
    count += 1;
  }

  const addRequest = () => {
    if(done) return;
    if(count < max && now !== urls.length) {
      send()
    } else {
      done = true;
      callback()
    }
  }

  for(; count < Math.min(max, urls.length);) {
    send()
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
