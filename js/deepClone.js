/*
 * @Author: 张卓南
 * @Date: 2024-06-13 22:01:27
 * @LastEditTime: 2024-06-13 23:01:32
 * @Description:
 */
function isObj(value) {
  const typeValue = typeof value;
  return (typeValue === "object" || typeValue === "function") && value !== null;
}

function deepClone(target, map = new WeakMap()) {
  if (!isObj(target)) return target;
  if (typeof target === "symbol") return Symbol(target.description);
  if (target instanceof Date) {
    return new Date(target);
  }
  if (target instanceof RegExp) {
    return new RegExp(target);
  }
  if (target instanceof Set) {
    const newSet = new Set();
    target.forEach((value) => {
      newSet.add(deepClone(value, map));
    });
    return newSet;
  }
  // 处理map
  if (target instanceof Map) {
    const newMap = new Map();
    target.forEach((value,key) => {
      newMap.set(deepClone(key, map), deepClone(value, map));
    });
    return newMap
  }

  if (typeof target === "function") return target;

  if (map.get(target)) return target;

  const result = Array.isArray(target) ? [] : {};
  map.set(target, result);
  for (let i in target) {
    result[i] = deepClone(target[i], map);
  }
  return result;
}

const obj = {
  a: 1,
  obj2: { b: function a() {}, a: 2 },
};
obj.self = obj;

const obj1 = deepClone(obj);
console.log(obj1);
