// let co = require('./co.js')

function doTask1() {
    return new Promise((res) => {
        setTimeout(() => {
            res(1);
        }, 1000)
    })
}

function doTask2() {
    return new Promise((res) => {
        setTimeout(() => {
            res(2);
        }, 1000)
    })
}

function doTask3() {
    return new Promise((res) => {
        setTimeout(() => {
            res(3);
        }, 1000)
    })
}

function* init() {
    let res1 = yield doTask1()
    let res2 = yield doTask2();
    let res3 = yield doTask3();
    console.log([res1, res2, res3, ])
}


function runner(gen) {
    let it = gen();

    function run(args) {
        let result = it.next(args);
        if (result.done) {
            return result.value
        } else {
            return result.value.then(run)
        }
    }
    return run()

}
runner(init)
