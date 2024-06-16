/*
 * @Author: 张卓南
 * @Date: 2024-06-14 19:19:45
 * @LastEditTime: 2024-06-15 12:35:46
 * @Description: 寄生组合式继承
 */
function Person(name) {
  this.name = name;
}

Person.prototype.hight = "175cm";

function Student(age, name) {
  Person.call(this, name);
  this.age = age;
}


function clone(parent, son) {
  son.prototype = Object.create(parent.prototype);
  // 修复了 constructor 属性，使其正确指向 Student。未修复则指向Parent
  son.prototype.constructor = son;
}

clone(Person, Student);

const stu1 = new Student(13, "zzn");
const person1 = new Person("gxy");
Student.prototype.run = "pao";

console.log(stu1.age, stu1.hight);
console.log(person1.age, person1.hight);
console.log(stu1.name, stu1.run,person1.run,Student.prototype.constructor);
