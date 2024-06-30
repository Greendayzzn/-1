/*
 * @Author: 张卓南
 * @Date: 2024-06-19 01:21:12
 * @LastEditTime: 2024-06-19 01:52:14
 * @Description:
 */
function myConst(name, value) {
  if (typeof window[name] !== 'undefined') {
    throw new TypeError(`Identifier '${name}' has already been declared`);
  }
  Object.defineProperty(window, name, {
    value,
    writable: false,
    configurable: false,
  });
}

try {
  myConst("MY_CONST", 42);
  console.log(MY_CONST); // 输出 42
} catch (e) {
  console.error(e.message);
}
