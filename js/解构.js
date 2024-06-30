/*
 * @Author: 张卓南
 * @Date: 2024-06-28 19:29:17
 * @LastEditTime: 2024-06-28 20:11:33
 * @Description:
 */
const obj = {
  a: "1",
  b: "2",
  [Symbol.iterator]() {
    let index = 0;
    const keys = Object.keys(this);
    let that = this;

    return {
      next() {
        if (index < keys.length) {
          return { value: that[keys[index++]], done: false };
        }
        return {
          value: undefined,
          done: true,
        };
      },
    };
  },
};

const [a, b] = obj;
console.log(a, b);
