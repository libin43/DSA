class Node {
    constructor(data){
        this.value = data
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.front = null;
        this.rear = null
    }

    enQueue(data){
        const newNode = new Node(data)
        if(this.front == null && this.rear==null){
            this.rear = newNode
            this.front = newNode
        }
        else{
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue(){
        if(this.front == null && this.rear == null){
            console.log('empty');
        }
        else{
            this.front = this.front.next
        }
    }

    display(){
        if(this.front == null && this.rear==null){
            console.log('empty queue');
        }
        else{
            console.log(this.front);
            console.log(this.rear);
        }
    }
}

const list = new Queue()
list.enQueue(5)
list.enQueue(7)
list.enQueue(3)
list.dequeue()
list.display()





