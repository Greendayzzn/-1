function mergeSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
  }
}
// JS代码压缩 CSS代码压缩 Html文件代码压缩  文件大小压缩 图片压缩 Tree Shaking 代码分离 内联 chunk

function quickSort(arr) {
  const len = arr.length;
  if (len <= 1) return arr;
  const middle = Math.floor(len / 2);
  let pivot = arr[middle];
  const left = [];
  const right = [];
  for (let i = 0; i < len; i++) {
    if (i != Math.floor(len / 2)) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [1, 2, 43, 4, 5, 3, 8, 12, 0];

// console.log(quickSort(arr));

function curry(fn) {
  return function _curry(...ars) {
    if (ars.length < fn.length) {
      return function () {
        return _curry(...ars.concat([...arguments]));
      };
    }
    return fn(...ars);
  };
}

const fn = (x, y) => x + y;

function isObj(source) {
  return typeof source === "object" && source !== null;
}
function deepClone(target, map = new WeakMap()) {
  if (!isObj(target)) return target;

  if (typeof target === "function") return target;

  if (map.has(target)) return map.get(target);
  const result = Array.isArray(target) ? [] : {};
  map.set(target, result);
  for (let i in target) {
    if (target.hasOwnProperty(i)) {
      result[i] = deepClone(target[i], map);
    }
  }
  return result;
}

// console.log(curry(fn)(1)(2));

const obj = {
  a: { b: { name: "111" } },
};
obj.c = obj;

// console.log(deepClone(obj));

function format(num, n) {
  let absNum = Math.abs(num).toFixed(n);
  let isFu = num < 0;
  const str = String(absNum);
  const [int, xiaoshu] = str.split(".");
  let result = "";
  let count = 0;
  for (let i = int.length - 1; i >= 0; i--) {
    result = int[i] + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      count = 0;
      result = "," + result;
    }
  }
  if (xiaoshu) {
    result = result + "." + xiaoshu;
  }

  if (isFu) {
    result = "-" + result;
  }
  return result;
}

console.log(format(-234444.45, 3));
console.log(format(234444, 2)); // 输出: "234,444.00"
console.log(format(-987654321.123, 2)); // 输出: "-987,654,321.12"
console.log(format(1000, 0)); // 输出: "1,000"
console.log(format(12345.6789, 3)); // 输出: "12,345.679"
console.log(format(0.12345, 2)); // 输出: "0.12"
