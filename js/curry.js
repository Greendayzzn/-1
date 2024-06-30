/*
 * @Author: 张卓南
 * @Date: 2024-06-22 20:44:56
 * @LastEditTime: 2024-06-22 21:21:48
 * @Description: 函数科里化
 */
// 多参数柯里化；
const curry = function (fn) {
  function _curry(...args) {
    return function (...arguments) {
      const combinedArgs = args.concat(arguments);
      if (combinedArgs.length < fn.length) {
        return _curry(...combinedArgs);
      } else {
        return fn(...combinedArgs);
      }
    };
  }
  return _curry;
};

const curry1 = function (fn) {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        return curriedFn(...args.concat([...arguments]));
      };
    }
    return fn(...args);
  };
};

const fn = (x, y, z, a) => x + y + z + a;
const myfn = curry(fn);
console.log(myfn(1)(2)(3)(1));
