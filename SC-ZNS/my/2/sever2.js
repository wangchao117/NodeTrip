const http = require('http')
var server = http.createServer(function(req,res){
    res.write('123456789')
    res.end()
})

server.listen(8000)