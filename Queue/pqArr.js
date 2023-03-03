class PriorityQueue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element, priority) {
      const item = { element, priority };
      let added = false;
      for (let i = 0; i < this.items.length; i++) {
        if (priority < this.items[i].priority) {
          this.items.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.items.push(item);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift().element;
    }
  
    front() {
      return this.isEmpty() ? null : this.items[0].element;
    }
  
    size() {
      return this.items.length;
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
    display() {
        for (const item of this.items) {
          console.log(`[${item.priority}] ${item.element}`);
        }
      }
  }
  