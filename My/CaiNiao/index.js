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



// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
// // 绑定事件及事件的处理程序
// eventEmitter.on('eventName', eventHandler);
// // 触发事件
// eventEmitter.emit('eventName');
// function eventHandler() {
//     console.log("eventName时间触发，eventHandler函数执行")
// }




// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();
// // 创建事件处理程序
// var connectHandler = function connected() {
//    console.log('连接成功。'); 
//    // 触发 data_received 事件 
//    eventEmitter.emit('data_received');
// }
// // 绑定 connection 事件处理程序
// eventEmitter.on('connection', connectHandler); 
// // 使用匿名函数绑定 data_received 事件
// eventEmitter.on('data_received', function(){
//    console.log('数据接收成功。');
// });
// // 触发 connection 事件 
// eventEmitter.emit('connection');
// console.log("程序执行完毕。");





// var fs = require("fs");
// fs.readFile('11.txt', function (err, data) {
//    if (err){
//       console.log(err);
//       return;
//    }
//    console.log(data.toString());
// });
// console.log("程序执行完毕");




// let EventEmitter = require('events').EventEmitter
// let e = new EventEmitter()
// e.on('ev', () => {
//     console.log('ev事件触发')
// })
// setTimeout(() => {
//     e.emit('ev')
// }, 1000)




// // EventEmitter 提供了多个属性，如 on 和 emit。on 函数用于绑定事件函数，emit 属性用于触发一个事件
// // 当事件触发时，注册到这个事件的事件监听器被依次调用，事件参数作为回调函数参数传递
// var events = require('events'); 
// var emitter = new events.EventEmitter();
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener1', arg1, arg2); 
// }); 
// emitter.on('someEvent', function(arg1, arg2) { 
//     console.log('listener2', arg1, arg2); 
// }); 
// // 只执行一次
// emitter.once('someEvent', function () {
//     console.log('Ah, we have our first user!');
// });
// setInterval(() => {
//     emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');
// },1000)




// // 事件示例
// var events = require('events');
// var eventEmitter = new events.EventEmitter();

// // 监听器 #1
// var listener1 = function listener1() {
//    console.log('监听器 listener1 执行。');
// }

// // 监听器 #2
// var listener2 = function listener2() {
//   console.log('监听器 listener2 执行。');
// }

// // 绑定 connection 事件，处理函数为 listener1 
// eventEmitter.addListener('connection', listener1);

// // 绑定 connection 事件，处理函数为 listener2
// eventEmitter.on('connection', listener2);

// var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// // 处理 connection 事件 
// eventEmitter.emit('connection');

// // 移除监绑定的 listener1 函数
// eventEmitter.removeListener('connection', listener1);
// console.log("listener1 不再受监听。");

// // 触发连接事件
// eventEmitter.emit('connection');

// eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
// console.log(eventListeners + " 个监听器监听连接事件。");

// console.log("程序执行完毕。");




// // error函数
// var events = require('events'); 
// var emitter = new events.EventEmitter(); 
// emitter.emit('error'); 





















