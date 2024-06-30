/*
 * @Author: 张卓南
 * @Date: 2024-06-17 10:13:45
 * @LastEditTime: 2024-06-29 22:49:40
 * @Description:
 */

const num = -123456789.1234;
function format(num, n) {
  const zf = num > 0;
  let absNum = Math.abs(num);
  let fixedNumm = absNum.toFixed(n);
  const arr = fixedNumm.toString().split(".");
  let str = arr[0];
  console.log(arr);
  let count = 0;
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    let val = str[i];
    result = val + result;
    count++;
    if (count % 3 === 0 && i !== 0) {
      count = 0;
      result = "," + result;
    }
  }
  if (!zf) {
    result = "-" + result;
  }
  if (arr[1] !== "") {
    result = result + "." + arr[1];
  }
  return result;
}

console.log(format(num, 2));
console.log(format(123, 2));

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

promise
  .then((resolve, reject) => {
    return resolve;
  })
  .then((res) => {
    console.log(res);
  });
