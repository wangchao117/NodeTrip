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



// // buffer
// const buf = Buffer.from('王超', 'utf8');
// console.log(buf)
// // 输出 72756e6f6f62
// console.log(buf.toString('hex'));
// // 输出 cnVub29i
// console.log(buf.toString('base64'));




// Buffer 提供了以下 API 来创建 Buffer 类：
// Buffer.alloc(size[, fill[, encoding]])： 返回一个指定大小的 Buffer 实例，如果没有设置 fill，则默认填满 0
// Buffer.allocUnsafe(size)： 返回一个指定大小的 Buffer 实例，但是它不会被初始化，所以它可能包含敏感的数据
// Buffer.allocUnsafeSlow(size)
// Buffer.from(array)： 返回一个被 array 的值初始化的新的 Buffer 实例（传入的 array 的元素只能是数字，不然就会自动被 0 覆盖）
// Buffer.from(arrayBuffer[, byteOffset[, length]])： 返回一个新建的与给定的 ArrayBuffer 共享同一内存的 Buffer。
// Buffer.from(buffer)： 复制传入的 Buffer 实例的数据，并返回一个新的 Buffer 实例
// Buffer.from(string[, encoding])： 返回一个被 string 的值初始化的新的 Buffer 实例





// // 创建一个长度为 10、且用 0 填充的 Buffer。
// const buf1 = Buffer.alloc(10);

// // 创建一个长度为 10、且用 0x1 填充的 Buffer。 
// const buf2 = Buffer.alloc(10, 1);

// // 创建一个长度为 10、且未初始化的 Buffer。
// // 这个方法比调用 Buffer.alloc() 更快，
// // 但返回的 Buffer 实例可能包含旧数据，
// // 因此需要使用 fill() 或 write() 重写。
// const buf3 = Buffer.allocUnsafe(10);

// // 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
// const buf4 = Buffer.from([1, 2, 3]);

// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer。
// const buf5 = Buffer.from('tést');

// // 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
// const buf6 = Buffer.from('tést', 'latin1');



// 可读流
// var fs = require("fs");
// var data = '';
// // 创建可读流
// var readerStream = fs.createReadStream('1.txt');
// // 设置编码为 utf8。
// readerStream.setEncoding('UTF8');
// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk) {
//    data += chunk;
// });
// readerStream.on('end',function(){
//    console.log(data);
// });
// readerStream.on('error', function(err){
//    console.log(err.stack);
// });
// console.log("程序执行完毕");



// // 自己重新写
// let fs = require('fs')
// let m = ''
// let readerStream = fs.createReadStream('1.txt')
// readerStream.on('data', (chunk) => {
//     m += chunk
// })
// readerStream.on('end', () => {
//     console.log(m)
// })
// readerStream.on('error', (err) => {
//     console.log(err)
// })





// 写入流
// var fs = require("fs");
// var data = '菜鸟教程官网地址：www.runoob.com';
// // 创建一个可以写入的流，写入到文件 output.txt 中
// var writerStream = fs.createWriteStream('2.txt');
// // 使用 utf8 编码写入数据
// writerStream.write(data,'UTF8');
// // 标记文件末尾
// writerStream.end();
// // 处理流事件 --> data, end, and error
// writerStream.on('finish', function() {
//     console.log("写入完成。");
// });
// writerStream.on('error', function(err){
//    console.log(err.stack);
// });
// console.log("程序执行完毕");



// // 自己重写
// let fs = require('fs')
// let data = '这里是文字'
// let writerStream = fs.createWriteStream('2.txt')
// writerStream.write(data, 'utf8')
// writerStream.end()
// writerStream.on('error', (err) => {
//     console.log(err)
// })




// // 管道流
// var fs = require("fs");
// // 创建一个可读流
// var readerStream = fs.createReadStream('1.txt');
// // 创建一个可写流
// var writerStream = fs.createWriteStream('2.txt');
// // 管道读写操作
// // 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
// readerStream.pipe(writerStream);
// console.log("程序执行完毕");



















