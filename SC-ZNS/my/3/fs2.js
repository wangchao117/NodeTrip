const fs = require('fs')

fs.writeFile('bbb.txt', '新写入的内容', function(err){
    console.log(err)
})