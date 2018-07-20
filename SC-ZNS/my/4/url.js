const urlLib = require('url')

var obj = urlLib.parse("http://www.baidu.com/index?a=111&b=222", true)

console.log(obj)