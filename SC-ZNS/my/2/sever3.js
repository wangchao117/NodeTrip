const http = require('http')
var server = http.createServer(function(req,res){
    switch(req.url){
        case '/1.html':
            res.write('123456489')
            break
        case '2.html':
            res.write('987654321')
            break
        default:
            res.write('404')
            break
    }

    res.end()
})

server.listen(8000)