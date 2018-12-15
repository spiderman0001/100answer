case:
promise A+ 
https://github.com/promises-aplus/promises-tests
运行promises-aplus-tests Promise.js

本地运行
node promises-tests/lib/cli.js ./Promise.js 
args[0] 是promise文件的路径
args[1] promises-tests/tests下面的文件名
其他是mocha参数
eg：
node promises-tests/lib/cli.js ./Promise.js 2.1.2