class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
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
  
    mergeSort() {
      if (!this.head || !this.head.next) {
        return this.head;
      }
  
      const middle = this._getMiddle(this.head);
      const nextToMiddle = middle.next;
      middle.next = null;
  
      const left = new LinkedList();
      left.head = this.head;
      const right = new LinkedList();
      right.head = nextToMiddle;
  
      const sortedLeft = left.mergeSort();
      const sortedRight = right.mergeSort();
  
      return this._merge(sortedLeft, sortedRight);
    }
  
    _getMiddle(head) {
      let slow = head;
      let fast = head.next;
  
      while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
      }
  
      return slow;
    }
  
    _merge(left, right) {
      const result = new LinkedList();
      console.log(left,'hai');
  
      let leftPointer = left;
      let rightPointer = right;
  
      while (leftPointer && rightPointer) {
        if (leftPointer.data <= rightPointer.data) {
          result.append(leftPointer.data);
          leftPointer = leftPointer.next;
        } else {
          result.append(rightPointer.data);
          rightPointer = rightPointer.next;
        }
      }
  
      while (leftPointer) {
        result.append(leftPointer.data);
        leftPointer = leftPointer.next;
      }
  
      while (rightPointer) {
        result.append(rightPointer.data);
        rightPointer = rightPointer.next;
      }
  
      return result.head;
    }
  }
  
  // example usage
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(3);
  linkedList.append(4);
  linkedList.append(1);
  linkedList.append(2);  
  const sortedList = linkedList.mergeSort();
  console.log(sortedList); // prints Node { data: 1, next: Node { data: 2, next: Node { data: 3, next: Node { data: 4, next: null } } } }
  