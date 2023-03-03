class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    addNode(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;

      } else {
        this.tail.next = newNode;
      }
      this.tail = newNode;
    }
  
    quickSort() {
      this.head = this.quickSortRecursive(this.head, this.tail);
    }
  
    quickSortRecursive(head, tail) {
      if (!head || head.next === tail) {
        return head;
      }
  
      let pivot = this.partition(head, tail);
  
      if (head !== pivot) {
        let leftTail = head;
        while (leftTail.next !== pivot) {
          leftTail = leftTail.next;
        }
        leftTail.next = null;
        head = this.quickSortRecursive(head, leftTail);
        leftTail.next = pivot;
      }
  
      pivot.next = this.quickSortRecursive(pivot.next, tail);
  
      return head;
    }
  
    partition(head, tail) {
      let pivotValue = tail.value;
      let pivot = head;
      let current = head;
  
      while (current !== tail) {
        if (current.value < pivotValue) {
          [pivot.value, current.value] = [current.value, pivot.value];
          pivot = pivot.next;
        }
        current = current.next;
      }
      [pivot.value, tail.value] = [tail.value, pivot.value];
      return pivot;
    }
  }
  
  let list = new LinkedList();
  list.addNode(4);
  list.addNode(2);
  list.addNode(1);
  list.addNode(3);
  list.addNode(6);
  list.addNode(5);
  
  list.quickSort();
  
  let current = list.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }