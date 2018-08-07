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





































