// let express = require('express')
// let app = express()
// app.listen(8000)
// // app监听函数上扩展了很多方法，包括get，post,delete,put等
// // app.方法名('路径名'，fn)
// // 从上到下匹配，如果匹配到了并且结束响应，就不会往下走了
// app.get('/signin', function(req, res) {
//     res.end('登录')
// })
// app.get('/signup', function(req, res) {
//     res.end('注册')
// })
// // 上面都不匹配，all表示所有的方法，'*'表示所有路径
// app.all('*', function(req, res) {
//     res.end('404')
// })




// let express = require('express')
// let app = express()
// app.listen(8000)
// // 想区分是查询一个用户还是查询所有用户
// app.get('/user', function(req, res) {
//     console.log(req.query.id)  // (express扩展的方法)
//     console.log(req.url)  // 获取整个路径，包括？
//     console.log(req.path)  // 路径没有？号 --(express扩展的方法)
//     console.log(req.headers) // 请求头,所有都是小写
//     console.log(req.method)  // 请求的方法，所有的方法都是大写
// })




let express = require('express')
let app = express()
app.listen(8000)

// 如果访问/user?id=1 查一个， /user查所有，但这样路径都是/user，还是拆分
// user/1表示差一个， /user查所有，这样写就能区分差多个还是查一个
app.get('/user', function(req, res) {
    res.end('select all')
})
// 表示id是占位符，必须要有，但是可以随机
// /user/1/wc => {id:1, name:wc}
app.get('/user/:id/:name', function(req, res) {
    res.end('select one: ' + req.params.id + req.params.name)
})


