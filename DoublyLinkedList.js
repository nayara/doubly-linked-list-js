class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;

    this.length = 0;
  }

  push(data) {
    const node = new Node(data);

    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }

    this.length++;
  }

  pop() {
    if (!this.head) return "Empty list: no elments to remove";

    let popedItem = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popedItem.prev;
      this.tail.next = null;
      popedItem.prev = null;
    }

    this.length--;
  }

  unshift(value) {
    const node = new Node(value);

    if (!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
  }

  shift() {
    if (!this.head) return "Empty list: no elments to shift";

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let oldHead = this.head;

      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.head;

    let currentElement = this.head;
    for (let i = 0; i < index; i++) {
      currentElement = currentElement.next;
    }

    return currentElement;
  }

  set(index, value) {
    if (index === 0) this.unshift(value);

    const foundNode = this.getByIndex(index);
    if (foundNode === null) return null;

    foundNode.value = value;
  }

  removeHead() {
    if (this.length === 0) return null;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
  }

  insertAtIndex(index, value) {
    if (index < 0 || index > this.length) return null;

    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      let node = new Node(value);
      let prevNode = this.getByIndex(index - 1);
      let nextNode = prevNode.next;

      prevNode.next = node;
      node.prev = prevNode;
      node.next = nextNode;
      nextNode.prev = node;

      this.length++;
    }
  }

  removeAtIndex(index) {
    if (index < 0 || index > this.length) return null;
    if (index === 0 && this.length === 1) {
      this.pop();
      return null;
    }
    if (index === 0 && this.length > 0) {
      this.shift();
      return null;
    }
    if (index === this.length) {
      this.pop();
      return;
    }

    let nodeToRemove = this.getByIndex(index);
    let prevNode = nodeToRemove.prev;
    let nextNode = nodeToRemove.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    nodeToRemove.next = null;
    nodeToRemove.prev = null;

    this.length--;
  }

  print() {
    let output = ` `;
    let current = this.head;
    while (current) {
      output = `${output}${current.value} <-> `;
      current = current.next;
    }

    console.log(`${output}null`);
  }
}

DoublyLinkedList.fromValues = function (...values) {
  const doublyLinkedList = new DoublyLinkedList();

  for (let index = 0; index < values.length; index++) {
    doublyLinkedList.push(values[index]);
  }

  return doublyLinkedList;
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

module.exports = DoublyLinkedList;
