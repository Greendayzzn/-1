/*
 * @Author: 张卓南
 * @Date: 2024-06-29 10:55:45
 * @LastEditTime: 2024-06-29 11:20:22
 * @Description: 
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(val) {
    const newNode = new ListNode(val);
    if (this.head == null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }
}

const list = new LinkedList();
list.append(1);
console.log(list);
