// **1.hello world!示例**
// ```
// const Koa = require('koa')
// const app = new Koa()

// app.use(async ctx => {
//   ctx.body = 'Hello World'
// });

// app.listen(3000)
// ```
// 访问 http://localhost:3000/，Koa学习第一步就成功了，const Koa = require('koa')和const app = new Koa()搭建一个 HTTP 服务，中间的则是对用户访问的处理

////////////////////////////////////////////////////////////////////////////////////////////

// **2.简易路由实现**
// 根据ctx.request.url或者ctx.request.path获取用户请求的路径，来实现简单的路由
// ```
// const Koa = require('koa');
// const app = new Koa();

// app.use(async ctx => {
//   let _html = '404 NotFound'
//   switch (ctx.url) {
//     case '/':
//       _html = '<h1>Index</h1>';
//       break;
//     case '/adout':
//       _html = '<h1>About</h1>';
//       break;
//     case '/hello':
//       _html = '<h1>world</h1>';
//       break;
//     default:
//       break;
//   }
//   ctx.body = _html;
// });

// app.listen(3000);
// ```

/////////////////////////////////////////////////////////////////////////////////////////////////
// **3. 使用koa-router中间件**
// 下载koa-router
// ```
// npm i koa-router --save
// ```
// ```
// const Koa = require('koa');
// const Router = require('koa-router');

// const app = new Koa();
// const router = new Router();

// router.get('/', async (ctx) => {
//   let html = `
//       <ul>
//         <li><a href="/hello">helloworld</a></li>
//         <li><a href="/about">about</a></li>
//       </ul>
//     `
//   ctx.body = html
// }).get('/hello', async (ctx) => {
//   ctx.body = 'helloworld'
// }).get('/about', async (ctx) => {
//   ctx.body = 'about'
// })

// app.use(router.routes(), router.allowedMethods())

// app.listen(3000);
// ```

///////////////////////////////////////////////////////////////////////////////////////////////////
// **4.中间件**
// Koa中使用app.use()用来加载中间件。每个中间件默认接受两个参数，Context对象和next函数。只要调用next函数，就开始执行下一个中间件。
// ```
// const Koa = require('koa');
// const app = new Koa();

// // x-response-time

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   ctx.set('X-Response-Time', `${ms}ms`);
// });

// // logger

// app.use(async (ctx, next) => {
//   const start = Date.now();
//   await next();
//   const ms = Date.now() - start;
//   console.log(`${ctx.method} ${ctx.url} - ${ms}`);
// });

// // response

// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

// app.listen(3000);
// ```
// 执行顺序：请求 ==> x-response-time中间件 ==> logger中间件 ==> 响应中间件 ==> logger中间件 ==> response-time中间件 ==> 响应

/////////////////////////////////////////////////////////////////////////////////////////////
// **5.模板引擎**
// 安装koa模板使用中间件koa-views 
// 安装koa-views中间件
// ```
// $ npm i --save koa-views
// ```
// 安装ejs模板引擎
// ```
// $ npm i --save ejs
// ```
const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
    extension: 'ejs'
}))

app.use(async (ctx) => {
    let title = 'Koa2'
    await ctx.render('index', {
        title,
    })
})

app.listen(3000)
// ./view/index.ejs 模板

// <!DOCTYPE html>
// <html>
// <head>
//     <title><%= title %></title>
// </head>
// <body>
//     <h1><%= title %></h1>
//     <p>EJS Welcome to <%= title %></p>
// </body>
// </html>









// 更详细入门请转：https://github.com/liuxing/node-abc/tree/master/lesson9



