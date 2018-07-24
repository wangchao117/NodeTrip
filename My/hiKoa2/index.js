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














// 更详细入门请转：https://github.com/liuxing/node-abc/tree/master/lesson9



