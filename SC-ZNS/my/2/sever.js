const http = require('http')
var server = http.createServer(function(req,res){
    console.log("访问")
})
server.listen(8000)