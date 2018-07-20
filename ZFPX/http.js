// let http = require('http')
// let port = 8000
// http.createServer((req, res) => { 
    

// }).listen(port, () => { 
//     console.log(`服务开启成功,端口为${port}`)
// })





// let http = require('http')
// let fs = require('fs')
// let port = 8000
// http.createServer((req, res) => { 
//     //不写编码类型buffer类型会自动转换为字符串
//     res.setHeader('Content-type', 'text/plain;charset=utf8')
//     // 如果读的文件是html且html上也有utf8的话，不需要设置请求头也会正常解析中文
//     fs.readFile('./1.txt', 'utf8', function(err, data) { 
//         res.end(data)
//     })
// }).listen(port, () => { 
//     console.log(`服务开启成功,端口为${port}`)
// })



// let http = require('http')
// let fs = require('fs')
// let port = 8000
// http.createServer((req, res) => { 
//     res.setHeader('Content-type', 'text/plain;charset=utf8')
//     fs.createReadStream('1.txt').pipe(res)
// }).listen(port, () => { 
//     console.log(`服务开启成功,端口为${port}`)
// })




// let http = require('http')
// let fs = require('fs')
// let url = require('url') // 把一个路径解析成一个对象
// let path = require('path')
// let port = 8000
// http.createServer((req, res) => { 
//     // 如下：如果访问的是'/'，显示主页html，如果访问的是文件，将文件内容读取返回，如果访问的是文件夹，默认去找html文件，如果文件不存在，返回404
//     let {pathname, query} = url.parse(req.url, true) // true的作用是将query转换成一个对象,pathname是带'/'
//     fs.stat('.' + pathname, function(err, stats) {
//         if(err) {
//             res.statusCode = 404  // 找不到就是404
//             res.end(`${pathname} not found`)
//         } else if (stats.isFile) {
//             // 是文件的情况(这里没写头)
//             fs.createReadStream('.' + pathname).pipe()
//         } else if (stats.isDirectory()) {
//             // 如果是文件夹，默认查找index.html，'./'也是文件夹，获取到当前的路径和我的index.html进行拼接
//             let p = path.join('.' + pathname, 'index.html')  // 拼出来读写的内容
//             fs.createWriteStream(p).pipe(res)
//         }
//     })
// }).listen(port, () => { 
//     console.log(`服务开启成功,端口为${port}`)
// })




// let http = require('http')
// let fs = require('fs')
// let url = require('url') // 把一个路径解析成一个对象
// let path = require('path')
// let port = 8000
// // 获取后缀
// let mine = {
//     '.js': 'application/javascript',
//     '.css': 'text/css',
//     './html': 'text/html'
// }
// http.createServer((req, res) => { 
//     // 如下：如果访问的是'/'，显示主页html，如果访问的是文件，将文件内容读取返回，如果访问的是文件夹，默认去找html文件，如果文件不存在，返回404
//     let {pathname, query} = url.parse(req.url, true)
//     fs.stat('.' + pathname, function(err, stats) {
//         if(err) {
//             res.statusCode = 404  // 找不到就是404
//             res.end(`${pathname} not found`)
//         } else if (stats.isFile) {
//             // 这里可还能是js,css，html等，可以获取后缀，来确定类型
//             let extName = pathname.match(/\.\w+$/)[0]   // 正则匹配后缀
//             res.setHeader('Content-type', mine[extName] + ';charset=utf8')
//             fs.createReadStream('.' + pathname).pipe()
//         } else if (stats.isDirectory()) {
//             // 这里头文件是html
//             res.setHeader('Content-type', 'text/html;charset=utf8')
//             let p = path.join('.' + pathname, 'index.html')
//             fs.createWriteStream(p).pipe(res)
//         }
//     })
// }).listen(port, () => { 
//     console.log(`服务开启成功,端口为${port}`)
// })






// fetch方法基于promise
let http = require('http')
let fs = require('fs')
let url = require('url') // 把一个路径解析成一个对象
let path = require('path')
let port = 8000
http.createServer((req, res) => { 
    
}).listen(port, () => { 
    console.log(`服务开启成功,端口为${port}`)
})