let http = require('http')
let fs = require('fs')
let url = require('url') // 把一个路径解析成一个对象
let path = require('path')
let port = 8000
http.createServer((req, res) => { 
    // 如下：如果访问的是'/'，显示主页html，如果访问的是文件，将文件内容读取返回，如果访问的是文件夹，默认去找html文件，如果文件不存在，返回404
    let {pathname, query} = url.parse(req.url, true) // true的作用是将query转换成一个对象,pathname是带'/'
    fs.stat('.' + pathname, function(err, stats) {
        if(err) {
            res.statusCode = 404  // 找不到就是404
            res.end(`${pathname} not found`)
        } else if (stats.isFile) {
            // 是文件的情况(这里没写头)
            fs.createReadStream('.' + pathname).pipe()
        } else if (stats.isDirectory()) {
            // 如果是文件夹，默认查找index.html，'./'也是文件夹，获取到当前的路径和我的index.html进行拼接
            res.setHeader('Content-type', 'text/html;charset=utf8')
            let p = path.join('.' + pathname, 'index.html')  // 拼出来读写的内容
            fs.createWriteStream(p).pipe(res)
        }
    })
}).listen(port, () => { 
    console.log(`服务开启成功,端口为${port}`)
})