//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
export class Node {
  constructor(data) {
    this.data = data; // Value stored in the node
    this.next = null; // Pointer to the next node
  }
}

export class LinkedList {
  constructor() {
    this.head = null; // Start of the list
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  pop() {
    if (!this.head) return null;

    if (!this.head.next) {
      const value = this.head.data;
      this.head = null;
      return value;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const value = current.next.data;
    current.next = null;

    return value;
  }

  shift() {
    if (!this.head) return null;

    const value = this.head.data;
    this.head = this.head.next;
    return value;
  }

  unshift(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    return;
  }

  delete(value) {
    if (this.head.data === value) {
      this.shift();
      return;
    }

    let current = this.head;
    while (current.next && current.next.data !== value) {
      current = current.next;
    }

    if (current.next === null) return;

    current.next = current.next.next;
    return;
  }

  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }
}
