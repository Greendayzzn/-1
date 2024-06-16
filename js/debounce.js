/*
 * @Author: 张卓南
 * @Date: 2024-06-04 14:18:34
 * @LastEditTime: 2024-06-16 19:35:37
 * @Description:
 */
// function debounce(fn, wait) {
//   let timer = null;
//   function _debounce(...args) {
//     if (timer) clearTimeout(timer);
//     timer = setTimeout(() => {
//       fn.apply(this, args);
//       timer = null;
//     }, wait);
//   }

//   return _debounce;
// }

function throttle(fn, interval) {
  let startTime = 0;
  function _throttle(...args) {
    let endTime = new Date().getTime();
    if (endTime - startTime >= interval) {
      fn.apply(this, args);
      startTime = endTime;
    }
  }
  return _throttle;
}

function debounce(fn, wait, immediate = false) {
  let timer = null;
  const _debounce = function (...args) {
    const context = this;
    if (timer) clearTimeout(timer);
    if (immediate) {
      let callNow = !timer;
      timer = setTimeout(() => {
        timer = null;
      }, wait);
      if (callNow) {
        fn.apply(context, args);
      }
    } else {
      timer = setTimeout(() => {
        fn.apply(context, args);
        timer = null;
      }, wait);
    }
  };

  return _debounce;
}
