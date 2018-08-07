// 字符串的扩展

// // includes(), startsWith(), endsWith()
// // includes()：返回布尔值，表示是否找到了参数字符串。
// // startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
// // endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
// let s = 'Hello world!';
// s.startsWith('Hello') // true
// s.endsWith('!') // true
// s.includes('o') // true
// // 这三个方法都支持第二个参数，表示开始搜索的位置。
// let s = 'Hello world!';
// s.startsWith('world', 6) // true
// s.endsWith('Hello', 5) // true
// s.includes('Hello', 6) // false
// 上面代码表示，使用第二个参数n时，endsWith的行为与其他两个方法有所不同, 它针对前n个字符，而其他两个方法针对从第n个位置直到字符串结束。





// // repeat方法返回一个新字符串，表示将原字符串重复n次。
// 'x'.repeat(3) // "xxx"
// 'hello'.repeat(2) // "hellohello"
// 'na'.repeat(0) // ""

// // 参数如果是小数，会被取整。
// 'na'.repeat(2.9) // "nana"

// // 如果repeat的参数是负数或者Infinity，会报错。
// 'na'.repeat(Infinity)
// // RangeError
// 'na'.repeat(-1)
// // RangeError

// // 但是，如果参数是 0 到-1 之间的小数，则等同于 0，这是因为会先进行取整运算。0 到-1 之间的小数，取整以后等于-0，repeat视同为 0。
// 'na'.repeat(-0.9) // ""

// // 参数NaN等同于 0。
// 'na'.repeat(NaN) // ""

// // 如果repeat的参数是字符串，则会先转换成数字。
// 'na'.repeat('na') // ""
// 'na'.repeat('3') // "nanana"





// padStart()，padEnd()。ES2017 引入了字符串补全长度的功能。如果某个字符串不够指定长度，会在头部或尾部补全。padStart()用于头部补全，padEnd()用于尾部补全。
// 'x'.padStart(5, 'ab') // 'ababx'
// 'x'.padStart(4, 'ab') // 'abax'
// 'x'.padEnd(5, 'ab') // 'xabab'
// 'x'.padEnd(4, 'ab') // 'xaba'
// // 上面代码中，padStart和padEnd一共接受两个参数，第一个参数用来指定字符串的最小长度，第二个参数是用来补全的字符串。

// // 如果原字符串的长度，等于或大于指定的最小长度，则返回原字符串。
// 'xxx'.padStart(2, 'ab') // 'xxx'
// 'xxx'.padEnd(2, 'ab') // 'xxx'

// 如果用来补全的字符串与原字符串，两者的长度之和超过了指定的最小长度，则会截去超出位数的补全字符串。
// 'abc'.padStart(10, '0123456789')
// // '0123456abc'

// // 如果省略第二个参数，默认使用空格补全长度。
// 'x'.padStart(4) // '   x'
// 'x'.padEnd(4) // 'x   '

// // padStart的常见用途是为数值补全指定位数。下面代码生成 10 位的数值字符串。
// '1'.padStart(10, '0') // "0000000001"
// '12'.padStart(10, '0') // "0000000012"
// '123456'.padStart(10, '0') // "0000123456"
// // 另一个用途是提示字符串格式。
// '12'.padStart(10, 'YYYY-MM-DD') // "YYYY-MM-12"
// '09-12'.padStart(10, 'YYYY-MM-DD') // "YYYY-09-12"





// // 模板字符串。模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。
// // 普通字符串
// `In JavaScript '\n' is a line-feed.`
// // 多行字符串
// `In JavaScript this is
//  not legal.`
// console.log(`string text line 1
// string text line 2`);
// // 字符串中嵌入变量
// let name = "Bob", time = "today";
// `Hello ${name}, how are you ${time}?`

// // 上面代码中的模板字符串，都是用反引号表示。如果在模板字符串中需要使用反引号，则前面要用反斜杠转义。
// let greeting = `\`Yo\` World!`;

// // 如果使用模板字符串表示多行字符串，所有的空格和缩进都会被保留在输出之中。
// $('#list').html(`
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// `);

// // 上面代码中，所有模板字符串的空格和换行，都是被保留的，比如<ul>标签前面会有一个换行。如果你不想要这个换行，可以使用trim方法消除它。
// $('#list').html(`
// <ul>
//   <li>first</li>
//   <li>second</li>
// </ul>
// `.trim());

// // 模板字符串中嵌入变量，需要将变量名写在${}之中
// function authorize(user, action) {
//     if (!user.hasPrivilege(action)) {
//       throw new Error(
//         // 传统写法为
//         // 'User '
//         // + user.name
//         // + ' is not authorized to do '
//         // + action
//         // + '.'
//         `User ${user.name} is not authorized to do ${action}.`);
//     }
//   }

// // 大括号内部可以放入任意的 JavaScript 表达式，可以进行运算，以及引用对象属性。
// let x = 1;
// let y = 2;
// `${x} + ${y} = ${x + y}`
// // "1 + 2 = 3"
// `${x} + ${y * 2} = ${x + y * 2}`
// // "1 + 4 = 5"
// let obj = {x: 1, y: 2};
// `${obj.x + obj.y}`
// // "3"

// // 模板字符串之中还能调用函数。
// function fn() {
//     return "Hello World";
//   }
//   `foo ${fn()} bar`
//   // foo Hello World bar

// // 如果模板字符串中的变量没有声明，将报错。
// // 变量place没有声明
// let msg = `Hello, ${place}`;
// // 报错

// // 由于模板字符串的大括号内部，就是执行 JavaScript 代码，因此如果大括号内部是一个字符串，将会原样输出。
// `Hello ${'World'}`
// // "Hello World"

// // 模板字符串甚至还能嵌套。
// const tmpl = addrs => `
//   <table>
//   ${addrs.map(addr => `
//     <tr><td>${addr.first}</td></tr>
//     <tr><td>${addr.last}</td></tr>
//   `).join('')}
//   </table>
// `
// // 上面代码中，模板字符串的变量之中，又嵌入了另一个模板字符串，使用方法如下。
// const data = [
//     { first: '<Jane>', last: 'Bond' },
//     { first: 'Lars', last: '<Croft>' },
// ];
// console.log(tmpl(data));
// // <table>
// //
// //   <tr><td><Jane></td></tr>
// //   <tr><td>Bond</td></tr>
// //
// //   <tr><td>Lars</td></tr>
// //   <tr><td><Croft></td></tr>
// //
// // </table>

// // 如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。
// // 写法一
// let str = 'return ' + '`Hello ${name}!`';
// let func = new Function('name', str);
// func('Jack') // "Hello Jack!"
// // 写法二
// let str = '(name) => `Hello ${name}!`';
// let func = eval.call(null, str);
// func('Jack') // "Hello Jack!"






























