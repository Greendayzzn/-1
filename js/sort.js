/*
 * @Author: 张卓南
 * @Date: 2024-06-02 19:12:29
 * @LastEditTime: 2024-06-16 00:12:16
 * @Description:
 */
const arr = [1, 3, 2, 4, 7, 8, 4, 3, 2, 5];

// 选择排序
const selectSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[i]) {
        const k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
    }
  }
  return arr;
};

// 优化后的选择排序
const selectSort1 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // if (minIndex !== i) {
    //   const k = arr[minIndex];
    //   arr[minIndex] = arr[i];
    //   arr[i] = k;
    // }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
};

// 冒泡排序 相邻的俩俩比较交换把大的放在末尾
const pupSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // const k = arr[j + 1];
        // arr[j + 1] = arr[j];
        // arr[j] = k;
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
};

// 每一轮选择最小的放在左侧
const selectSort2 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let tem = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = tem;
  }
  return arr;
};

const pupSort2 = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let tem = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tem;
      }
    }
  }
  return arr;
};


/**
 * 时间复杂度：nlogn
 * 空间复杂度：n
 * @param {*} arr 
 * @returns 
 */
// 拆再合
const mergeSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;
  const middle = Math.floor(len / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
};

const merge = (left, right) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  result = [...result, ...left.slice(i), ...right.slice(j)];
  return result;
};

/**
 * 时间复杂度：最好nlogn，最差n^2
 * 空间复杂度：平均logn 最差n
 * @param {*} arr 
 * @returns 
 */
const quickSort = (arr) => {
  const len = arr.length;
  if (len <= 1) return arr;
  const pivot = arr[Math.floor(len / 2)];
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
};
console.log(quickSort(arr));
