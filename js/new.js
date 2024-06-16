/*
 * @Author: 张卓南
 * @Date: 2024-06-05 23:43:35
 * @LastEditTime: 2024-06-13 11:06:44
 * @Description:
 */
function _new(constructor, ...args) {
  const obj = {};
  obj.__proto__ = constructor.prototype;
  const result = constructor.apply(obj, args);
  return typeof result === "object" && typeof result !== null ? result : obj;
}

Function.prototype.myApply = function (obj, args) {
  obj.fn = this;
  const result = args ? obj.fn(...args) : obj.fn();
  delete obj.fn;
  return result;
};

// Function.prototype.myBind = function (obj, ...arg2) {
//   const fn = this;
//   return function (...arg1) {
//     return fn.apply(obj, arg2.concat(arg1));
//   };
// };

Function.prototype.myBind = function (obj, ...args) {
  const fn = this;
  return function (...arg1) {
    obj.fn = fn; // 将当前函数赋给 obj 的一个属性
    console.log(this)// 指向全局对象
    const result = obj.fn(...[...args, ...arg1]);
    delete obj.fn;
    return result;
  };
};


Function.prototype.myCall = function (obj, ...args) {
  obj.fn = this;
  // const arr = Array.from(args);
  const arr = args;
  const result = obj.fn(...arr);
  delete obj.fn;
  return result;
};

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}

const person = { name: "Alice" };

const result = greet.myCall(person, "Hello", "!");
// console.log(result); // "Hello, Alice!"

const fn1 = greet.myBind(person, "Hello");

console.log(fn1("!"));
