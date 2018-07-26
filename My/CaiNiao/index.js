// let http = require('http')
// let fs = require('fs')

// http.createServer((req, res) => {
//     res.setHeader('Content-type', 'text/plain;charset=utf8')
//     res.end('中文')
// }).listen(2000)



// var fs = require("fs");
// var data = fs.readFileSync('1.txt');
// console.log(data.toString());
// console.log("程序执行结束!");



// 异步
// var fs = require("fs");
// fs.readFile('1.txt', function (err, data) {
//     if (err) return console.error(err);
//     console.log(data.toString());
// });
// console.log("程序执行结束!");



// 引入 events 模块
var events = require('events');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 绑定事件及事件的处理程序
eventEmitter.on('eventName', eventHandler);
// 触发事件
eventEmitter.emit('eventName');
function eventHandler() {
    console.log("eventName时间触发，eventHandler函数执行")
}

















