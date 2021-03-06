/* tslint:disable:max-line-length */

export const blog4 = `## 一道闭包的面试题

此题对\`Hoisting\`、\`this\`、\`prototype\`等基本概念均有涉及，需要冷静分析，逐步推导，不然极易出错：

\`\`\`javascript
function Foo() {
	getName = function() { alert(1); }
    return this;
}
Foo.getName = function() { alert(2); };
Foo.prototype.getName = function() { alert(3); };
var getName = function() { alert(4); };
function getName() { alert(5); }

//请写出以下输出结果：
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3
new new Foo().getName(); // 3
\`\`\`

1. \`Foo.getName()\`会执行挂在在\`Foo\`函数上的\`getName\`方法，所以返回2；
2. \`getName\`被调用时，由于\`Foo\`函数并未调用，所以其中的\`getName\`方法并不会泄露到全局；而函数声明则会提升到代码顶部，被\`var getName = function() { alert(4); }\`覆盖，所以输出4；
3. \`Foo().getName()\`在调用\`Foo()\`时，作用域为\`window\`，所以返回值为全局\`window\`对象；在函数的执行过程中，将\`getName\`函数泄露到了全局，也就是\`window.getName = function() { alert(1); }\`，而表达式则变为\`window.getName()\`，也就是1；
4. \`getName()\`调用被\`Foo\`重写的\`getName\`方法，输出1；
5. \`new Foo.getName()\`执行时，会执行挂在\`Foo\`函数上的\`getName\`方法，也就是2；
6. \`new Foo().getName()\`首先会创建\`Foo\`函数的一个实例\`temp\`，则有\`temp.__proto__ = Foo.prototype\`，执行\`temp.getName()\`则会沿作用域查找到\`Foo.prototype\`对象上的\`getName\`函数，输出3；
7. \`new new Foo().getName()\`首先会执行中间的\`new Foo()\`，返回一个Foo的实例\`temp\`，则变化为执行\`new temp.getName()\`；而执行\`temp.getName()\`时会沿作用域查找到\`Foo.prototype\`对象上的\`Foo\`函数，相当于执行 \`new Foo.prototype.getName()\`，从而输出3.`;
