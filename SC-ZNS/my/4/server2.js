const http = require('http')
const querystring = require('querystring')

http.createServer(function(req, res){
    var GET = {}

    if (req.url.indexOf('?')!=-1) {
        var arr = req.url.split('?')
        var url = arr[0]

        GET = querystring.parse(arr[1])

    } else {
        var url = req.url
    }

    console.log(url, GET)

    res.write('44444')
    res.end()

}).listen(8000)