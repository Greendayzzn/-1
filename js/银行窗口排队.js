/*
 * @Author: 张卓南
 * @Date: 2024-06-29 19:54:59
 * @LastEditTime: 2024-06-29 22:04:22
 * @Description:
 */
function timeout(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
class SuperTask {
  constructor(count = 2) {
    this.count = count;
    this.runningTasks = 0;
    this.tasks = [];
  }
  add(task) {
    return new Promise((resolve, reject) => {
      this.tasks.push({ task, resolve, reject });
      this.run();
    });
  }
  run() {
    // 用while还是if?
    if (this.runningTasks < this.count && this.tasks.length) {
      const { task, resolve, reject } = this.tasks.shift();
      this.runningTasks++;
      Promise.resolve(task())
        .then(resolve, reject)
        .finally(() => {
          this.runningTasks--;
          this.run();
        });
    }
  }
}
const superTask = new SuperTask();

function addTask(time, name) {
  superTask
    .add(() => timeout(time))
    .then(() => {
      console.log(`${name}完成`);
    });
}

addTask(10000, 1); // 10s后任务1完成
addTask(5000, 2); //5S
addTask(3000, 3); // 8s
addTask(4000, 4); // 12s
addTask(5000, 5); // 15
// 2,3,1,4,5
