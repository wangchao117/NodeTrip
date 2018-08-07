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



















































