/*
 * @Author: 张卓南
 * @Date: 2024-06-13 22:01:27
 * @LastEditTime: 2024-06-23 18:41:44
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
    target.forEach((value, key) => {
      newMap.set(deepClone(key, map), deepClone(value, map));
    });
    return newMap;
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
  c: { d: { name: "zzn" } },
};
obj.self = obj;
const originalMap = new Map([
  ["key1", { subKey: "value1" }],
  ["key2", { subKey: "value2" }],
]);
obj.map = originalMap;

const obj1 = deepClone(obj);
// console.log(obj1);

function isObj(obj) {
  return typeof obj === "object" && obj !== null;
}
function deepClone1(origin, map = new WeakMap()) {
  if (!isObj(origin)) return origin;
  if (origin instanceof Map) {
    const newMap = new Map();
    origin.forEach((value, key) => {
      newMap.set(deepClone1(key, map), deepClone1(value, map));
    });
    return newMap;
  }
  if (origin instanceof Set) {
    const set = new Set();
    for (const value of origin) {
      set.add(deepClone1(value, map));
    }
    return set;
  }
  if (typeof origin === "function") return origin;
  if (map.get(origin)) return map.get(origin);
  const result = Array.isArray(origin) ? [] : {};
  map.set(origin, result);
  for (let i in origin) {
    result[i] = deepClone1(origin[i], map);
  }
  return result;
}

console.log(deepClone1(obj));
