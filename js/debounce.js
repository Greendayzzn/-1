/*
 * @Author: 张卓南
 * @Date: 2024-06-04 14:18:34
 * @LastEditTime: 2024-06-04 17:11:46
 * @Description:
 */
function debounce(fn, wait) {
  let timer = null;
  function _debounce(...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
      // fn(...args);
      timer = null;
    }, wait);
  }

  return _debounce;
}

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
