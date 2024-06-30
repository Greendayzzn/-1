/*
 * @Author: 张卓南
 * @Date: 2024-06-28 20:39:53
 * @LastEditTime: 2024-06-28 21:34:05
 * @Description:
 */
function myall(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      return reject(new TypeError("Argument must be an array"));
    }
    let resolvedCount = 0;
    let len = arr.length;
    const result = [];
    if (arr.length === 0) {
      return resolve(result);
    }
    arr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value;
          resolvedCount += 1;
          if (resolvedCount === len) {
            resolve(result);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
  });
});

const promise2 = Promise.resolve(3);

// myall([promise1, promise2]).then((value) => {
//   console.log(value);
// });

// myall([]).then((value) => {
//   console.log(value);
// });

function myrace(arr) {
  if (!Array.isArray(arr)) {
    return reject(new TypeError("Argument must be an array"));
  }
  if (arr.length === 0) return;
  return new Promise((resolve, reject) => {
    arr.forEach((promise) => {
      Promise.resolve(promise)
        .then((v) => resolve(v))
        .catch((error) => reject(error));
    });
  });
}

myrace([promise1, promise2]).then((value) => {
  console.log(value);
});
