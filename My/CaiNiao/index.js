let http = require('http')
http.createServer((req, res) => {
    res.setHeader('Content-type', 'text/plain;charset=utf8')
    res.end('中文')
}).listen(2000)