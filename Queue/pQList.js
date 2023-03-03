class PriorityQueue {
    constructor() {
      this.head = null;
    }
  
    enqueue(element, priority) {
      const node = new Node(element, priority);
      if (!this.head || priority < this.head.priority) {
        node.next = this.head;
        this.head = node;
      } else {
        let curr = this.head;
        while (curr.next && priority >= curr.next.priority) {
          curr = curr.next;
        }
        node.next = curr.next;
        curr.next = node;
      }
    }
  
    dequeue() {
      if (!this.head) {
        return null;
      }
      const element = this.head.element;
      this.head = this.head.next;
      return element;
    }
  
    front() {
      return this.head ? this.head.element : null;
    }
  
    size() {
      let count = 0;
      let curr = this.head;
      while (curr) {
        count++;
        curr = curr.next;
      }
      return count;
    }
  
    isEmpty() {
      return this.head === null;
    }

        display() {
            let curr = this.head;
            while (curr) {
              console.log(`[${curr.priority}] ${curr.element}`);
              curr = curr.next;
            }
          }
        } 

  class Node {
    constructor(element, priority) {
      this.element = element;
      this.priority = priority;
      this.next = null;
    }
  }

  const pq = new PriorityQueue()
  pq.enqueue(4,1)
  pq.enqueue(5,2)
  pq.enqueue(6,3)
  pq.enqueue(7,4)
  pq.dequeue()
  pq.dequeue()
  pq.display()