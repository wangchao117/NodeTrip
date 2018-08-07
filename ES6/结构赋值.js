// 结构赋值默认值为函数时，函数是惰性的，能取到值就不会执行
// function f() {
//     return 'aaa'
// }
// let [a, x = f()] = [1];
// console.log(x)



// 默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
// let [x = 1, y = x] = [];     // x=1; y=1
// let [x = 1, y = x] = [2];    // x=2; y=2
// let [x = 1, y = x] = [1, 2]; // x=1; y=2
// let [x = y, y = 1] = [];     // ReferenceError: y is not defined
// 上面最后一个表达式之所以会报错，是因为x用y做默认值时，y还没有声明。




// 对象的结构赋值
// 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let { foo, bar } = { bar: "bbb", foo: "aaa", ccc: '123456' };
// console.log(foo, bar)





// // 如果变量名与属性名不一致，必须写成下面这样。
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// // baz // "aaa"
// let obj = { first: 'hello', last: 'world' };
// let { first: f, last: l } = obj;
// // f // 'hello'
// // l // 'world'
// let { foo: foo, bar: bar } = { foo: "aaa", bar: "bbb" };
// // 也就是说，对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
// let { foo: baz } = { foo: "aaa", bar: "bbb" };
// baz // "aaa"
// foo // error: foo is not defined
// // 上面代码中，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。





// // 与数组一样，解构也可以用于嵌套结构的对象。
// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };

// let { 
//     p: [
//         x, 
//         { y }
//     ] 
// } = obj;
// x // "Hello"
// y // "World"
// // 注意，这时p是模式，不是变量，因此不会被赋值。如果p也要作为变量赋值，可以写成下面这样。
// let obj = {
//     p: [
//       'Hello',
//       { y: 'World' }
//     ]
//   };
  
//   let { p, p: [x, { y }] } = obj;
//   x // "Hello"
//   y // "World"
//   p // ["Hello", {y: "World"}]





// // 对象的解构也可以指定默认值。
// var {x = 3} = {};
// x // 3
// var {x, y = 5} = {x: 1};
// x // 1
// y // 5
// var {x: y = 3} = {};
// y // 3
// var {x: y = 3} = {x: 5};
// y // 5
// var { message: msg = 'Something went wrong' } = {};
// msg // "Something went wrong"
// // 默认值生效的条件是，对象的属性值严格等于undefined。
// var {x = 3} = {x: undefined};
// x // 3
// var {x = 3} = {x: null};
// x // null
// // 上面代码中，属性x等于null，因为null与undefined不严格相等，所以是个有效的赋值，导致默认值3不会生效。





// // 如果解构失败，变量的值等于undefined。
// let {foo} = {bar: 'baz'};
// foo // undefined




// // 如果解构模式是嵌套的对象，而且子对象所在的父属性不存在，那么将会报错。
// let {foo: brz} = {baz: 'baz'};
// console.log(foo)
// // 上面代码中，等号左边对象的foo属性，对应一个子对象。该子对象的bar属性，解构时会报错。原因很简单，因为foo这时等于undefined，再取子属性就会报错，请看下面的代码。




// // 如果要将一个已经声明的变量用于解构赋值，必须非常小心
// // 错误的写法
// let x;
// {x} = {x: 1};
// // SyntaxError: syntax error
// // 上面代码的写法会报错，因为 JavaScript 引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免 JavaScript 将其解释为代码块，才能解决这个问题。
// // 正确的写法
// let x;
// ({x} = {x: 1});
// // 上面代码将整个解构赋值语句，放在一个圆括号里面，就可以正确执行。关于圆括号与解构赋值的关系，参见下文。





// // 解构赋值允许等号左边的模式之中，不放置任何变量名。因此，可以写出非常古怪的赋值表达式。
// ({} = [true, false]);
// ({} = 'abc');
// ({} = []);




// // 由于数组本质是特殊的对象，因此可以对数组进行对象属性的解构
// let arr = [1, 2, 3];
// let {0 : first, [arr.length - 1] : last} = arr;
// first // 1
// last // 3
// // 上面代码对数组进行对象解构。数组arr的0键对应的值是1，[arr.length - 1]就是2键，对应的值是3。方括号这种写法，属于“属性名表达式”（参见《对象的扩展》一章）。





// 字符串也可以解构赋值。这是因为此时，字符串被转换成了一个类似数组的对象。
// const [a, b, c, d, e] = 'hello';
// a // "h"
// b // "e"
// c // "l"
// d // "l"
// e // "o"



// // 类似数组的对象都有一个length属性，因此还可以对这个属性解构赋值。
// let {length : len} = 'hello';
// len // 5




// // 解构赋值时，如果等号右边是数值和布尔值，则会先转为对象。
// let {toString: s} = 123;
// s === Number.prototype.toString // true

// let {toString: s} = true;
// s === Boolean.prototype.toString // true
// // 上面代码中，数值和布尔值的包装对象都有toString属性，因此变量s都能取到值。





// // 解构赋值的规则是，只要等号右边的值不是对象或数组，就先将其转为对象。由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错。
// let { prop: x } = undefined; // TypeError
// let { prop: y } = null; // TypeError





// // 函数的参数也可以使用解构赋值。
// function add([x, y]){
//   return x + y;
// }
// add([1, 2]); // 3
// // 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。

// // 下面是另一个例子。
// [[1, 2], [3, 4]].map(([a, b]) => a + b);
// // [ 3, 7 ]





// // 函数参数的解构也可以使用默认值。
// function move({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, 0]
// move({}); // [0, 0]
// move(); // [0, 0]
// // 上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。





// // 注意，下面的写法会得到不一样的结果。
// function move({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }

// move({x: 3, y: 8}); // [3, 8]
// move({x: 3}); // [3, undefined]
// move({}); // [undefined, undefined]
// move(); // [0, 0]
// // 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。





// // 以下三种解构赋值不得使用圆括号。
// // （1）变量声明语句

// // 全部报错
// let [(a)] = [1];

// let {x: (c)} = {};
// let ({x: c}) = {};
// let {(x: c)} = {};
// let {(x): c} = {};

// let { o: ({ p: p }) } = { o: { p: 2 } };
// // 上面 6 个语句都会报错，因为它们都是变量声明语句，模式不能使用圆括号。

// // （2）函数参数

// // 函数参数也属于变量声明，因此不能带有圆括号。

// // 报错
// function f([(z)]) { return z; }
// // 报错
// function f([z,(x)]) { return x; }
// // （3）赋值语句的模式

// // 全部报错
// ({ p: a }) = { p: 42 };
// ([a]) = [5];
// // 上面代码将整个模式放在圆括号之中，导致报错。

// // 报错
// [({ p: a }), { x: c }] = [{}, {}];
// // 上面代码将一部分模式放在圆括号之中，导致报错。






// 结构赋值的用途
// // 1.交换变量的值
// let x = 1;
// let y = 2;
// [x, y] = [y, x];

// // 2.从函数返回多个值
// // 函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。
// function example() {
//     return [1, 2, 3];
//   }
//   let [a, b, c] = example();
  
//   // 返回一个对象
  
//   function example() {
//     return {
//       foo: 1,
//       bar: 2
//     };
//   }
//   let { foo, bar } = example();

// // 3.函数参数的定义
// // 解构赋值可以方便地将一组参数与变量名对应起来。
// // 参数是一组有次序的值
// function f([x, y, z]) { ... }
// f([1, 2, 3]);
// // 参数是一组无次序的值
// function f({x, y, z}) { ... }
// f({z: 3, y: 2, x: 1});

// // 4.提取 JSON 数据
// // 解构赋值对提取 JSON 对象中的数据，尤其有用
// let jsonData = {
//     id: 42,
//     status: "OK",
//     data: [867, 5309]
// };
// let { id, status, data: number } = jsonData;
// console.log(id, status, number);
// // 42, "OK", [867, 5309]

// // 5.函数参数的默认值
// jQuery.ajax = function (url, {
//     async = true,
//     beforeSend = function () {},
//     cache = true,
//     complete = function () {},
//     crossDomain = false,
//     global = true,
//     // ... more config
//   } = {}) {
//     // ... do stuff
//   };
// // 指定参数的默认值，就避免了在函数体内部再写var foo = config.foo || 'default foo';这样的语句。

// // 6.遍历 Map 结构
// // 任何部署了 Iterator 接口的对象，都可以用for...of循环遍历。Map 结构原生支持 Iterator 接口，配合变量的解构赋值，获取键名和键值就非常方便
// const map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }
// // first is hello
// // second is world

// // 如果只想获取键名，或者只想获取键值，可以写成下面这样
// // 获取键名
// for (let [key] of map) {
//     // ...
//   }
  
//   // 获取键值
//   for (let [,value] of map) {
//     // ...
//   }

// // 7.输入模块的指定方法
// // 加载模块时，往往需要指定输入哪些方法。解构赋值使得输入语句非常清晰。
// const { SourceMapConsumer, SourceNode } = require("source-map");




