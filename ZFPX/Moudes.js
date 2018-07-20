// let fs = require("fs")
// // 同步 拷贝
// function copySync(source, target) {
//     // writeFileSync
//     let res = fs.readFileSync(source)
//     fs.writeFileSync(target, res)
// }
// // copySync('1.txt', '2.txt')

// // 异步拷贝
// function copy(source, target, callback) {
//     fs.readFile(source, function(err, data) {
//         if (err) {
//             return callback(err)
//         } else {
//             fs.writeFile(target, data, function(err) {})
//         }
//     })
// }
// // copy('1.txt', '3.txt', function(err) {
// //     console.log(err)
// // })  

// // 创建目录,不能调剂创建，也就是没有aaa,就创建不了aaa/bbb
// fs.mkdir('aaa', function(err) {
//     console.log(err)
// })
// 递归创建多层目录
// function makep(url, callback) {
//     // a/b/c/d,首先将字符串分成4部分，第一步创建a，第二部创建b...
//     let urlArr = url.split('/')  //[a,b,c,d]
//     let idx = 0
//     function make(p){
//         // 循环完了，把递归停掉，不然会一直循环
//         if (urlArr.length < idx) return
//         // 在创建前看是否存在，如果不存在创建，存在继续下一次创建
//         fs.Stats.apply(p, function(err) {
//             if (err) {
//                 // err是不存在，创建
//                 fs.mkdir(p, function(err) {
//                     if (err) return console.log(err)
//                     idx++
//                     // 必须要将上一次创建的目录拼接上，不然递归出的结果就是a,b,c,d四个目录
//                     make(urlArr.slice(0, idx+1).join('/'))
//                 })
//             } else {
//                 idx++
//                 // 必须要将上一次创建的目录拼接上，不然递归出的结果就是a,b,c,d四个目录
//                 make(urlArr.slice(0, idx+1).join('/'))
//             }
//         })
//     }
//     make(urlArr[idx])
// }
// makep('a/b/c/d', function(err) {
//     console.log('创建成功')
// })




// path模块
// **2.**path.join，path.reslove方法
// let path = require('path')
// // 拼一个路径出来，path.join方法
// console.log(path.join('./a', './b'))  // 结果：a/b
// console.log(path.join(__dirname, './b')) //  __dirname当前文件的目录，并且是绝对路径，怎样能生成投绝对路径，结果：C:\Users\chao.wang\Desktop\NODE\ZFPX\b
// console.log(path.join(__dirname, './b', '..')) // b变为绝对路径，在提到上一级， 结果：C:\Users\chao.wang\Desktop\NODE\ZFPX

// // path.reslove方法 (解析一个绝对路径出来，就是你给他一个相对，他返回一个绝对给你)
// console.log(path.resolve('./a', './b'))  // 结果：C:\Users\chao.wang\Desktop\NODE\ZFPX\a\b
// // 可以看出：path.resolve('./a', './b') 和 path.join(__dirname, './b') 返回的结果相同，可相互替换

// // path.delimiter，环境变量分隔符（还是可能有用的，比如看是mac还是win环境还是Linux环境）
// console.log(path.delimiter)
// console.log(path.win32.delimiter)
// console.log(path.posix.sep)





// 事件的发布订阅
// let EventEmitter = require('events')
// let {inherits} = require('util')  // 实现继承

// function Person() {

// }
// let boy = new Person()
// inherits(Person, EventEmitter)  // 继承

// boy.on('smile', function(parm) {  // on就是事件的订阅(绑定)
//     console.log(parm)
//     console.log('哈哈')
// })
// // 执行
// boy.emit('smile', '这里是参数')  // 事件的发布（执行）
// // 移除
// boy.removeListener('smile')  // removeAllListener,移除所有事件


// let EventEmitter = require('events')
// class EventEmitter {
//     // 'smile':[eat, cry, shopping]
//     constructor() {
//         this._events = {}
//     }
//     on(eventName, callback) {
//         // 判断是否有这个事件
//         if (!this._events[eventName]) {
//             // 有
//             this._events[eventName] = [callback]
//         } else {
//             // 没有这个事件，放入
//             this._events[eventName].push(callback)
//         }
//     }
//     emit(eventName) {
//         this._events[eventName].forEach(cb => cb())
//     }
// }
// let e = new EventEmitter()
// let haha = () =>{
//     console.log('smile')
// }
// e.on('smile', haha)  // 绑定几次执行几次
// e.emit('smile')



// 可读流
// let fs = require('fs')
// // 读文件必须存在,每次能读多少，默认64k。 读取默认是buffer
// let rs = fs.createReadStream('1.txt')
// // 需要监听事件（流失基于事件），数据到来的事件 rs.emit('data', 数据)
// // 默认是非流动模式，监听事件后变为流动模式
// let arr = []
// rs.on('data',function(data) {
//     arr.push (data)
//     rs.pause() // 暂停，暂停的是on('data)的触发
//     // 恢复触发 rs.resume()
//     setTimeout(function(){
//         rs.resume()
//     },1000)
// })

// // 默认data事件是不停的触发，知道文件的数据被全部读出来,,所有有一个读取结束的方法
// rs.on('end', function() {
//     console.log('end')
//     // 拿最终数据
//     console.log(Buffer.concat(arr).toString())
// })
// // 报错
// res.on('err', function(err){
//     console.log(err)
// })
// rs.pause()
// 暂停，暂停的是on('data)的触发
// 恢复触发 rs.resume()



// 可写流createWriteStream
// let fs = require('fs')
// // 可写流默认占用16k
// let ws = fs.createWriteStream('./4.txt',{highWaterMark: 5})  // 新建了个文件4.txt
// console.log(ws)
// // 可写流的两个方法 write 和 end, 也是异步的，可接受回调函数
// // 可写流写数据，必须是字符串类型或者buffer类型
// ws.write('12', fn)  // 调用下就会往文件里写一下，调用3次，4.txt内容121212
// console.log(ws.write('12', fn))  // false ---> 和设置的highWaterMark有关，及如果空间不够的前一步开始返回false
// ws.write('12', fn) 
// console.log(ws.write('12', fn))  //false
// ws.write('12', fn) 
// console.log(ws.write('12', fn))  //false 
// // 结束调用end，调用end后，不能再用write，同时会把所有write中的内容以最快的速度写入文件
// ws.end('结束', fn)  // end内容也会写入文件，
// function fn() {
//     console.log(1)
// }
// // drain事件，当读入的文件全部写入后，就恢复读取（如果end方法调用了，就不会执行了，end会让内容快速写入）
// ws.on('drain', function() {
//     console.log('处理完了')
// })



// 读写流封装
// 30b 读取4b 5次 读取一次就开始写，只能写1b
// let fs = require('fs') 
// function pipe(source, target) {
//     let rs = fs.createReadStream(source, {highWaterMark: 4})
//     let ws = fs.createWriteStream(target, {highWaterMark: 1})
//     // 开启可读流
//     rs.on('data', function(chunk) {
//         // 如果可写流不能继续写入了，就暂停读取
//         if (ws.write(chunk) === false) {
//             rs.pause()
//         }
//     })
//     // 当当前读入的内容都写入到了文件中，调用继续读取
//     ws.on('drain', function() {
//         console.log(`打印几次就读了几次`)
//         rs.resume()
//     })
//     // 当读取完毕，强制将内存中未写入的内容写入到文件中，关闭文件
//     rs.on('end', function() {
//         ws.end()
//     })
// }  
// pipe('4.txt', '5.txt')
// // 通过流可以实现分段，但是不关心文件中的内容，readFile可以看到文件中的具体内容（读一个很大的文件采用流）

// 换一种快捷的方式
// 30b 读取4b 5次 读取一次就开始写，只能写1b
// let fs = require('fs') 
// function pipe(source, target) {
//     let rs = fs.createReadStream(source, {highWaterMark: 4})
//     let ws = fs.createWriteStream(target, {highWaterMark: 1})
//     rs.pipe(ws)
// }  
// pipe('4.txt', '5.txt')

