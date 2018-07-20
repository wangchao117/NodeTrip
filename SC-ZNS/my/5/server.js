const http = require('http')
const querystring = require('querystring')

http.createServer(function(req, res){
    var str = ''

    var i = 0;
    req.on('data', function(data){
        console.log(`第${i++}次收到数据`)
        str += data
    })

    req.on('end', function(){
        var POST = querystring.parse(str)
        console.log(POST)
    })
    res.end()
}).listen(8000)