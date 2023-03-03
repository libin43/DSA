class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class Queue{
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(data){
        const newNode = new Node(data)
        if(this.front ==null && this.rear==null ){
            this.rear = newNode 
            this.front = newNode
        }else{
            this.rear.next = newNode
            this.rear = newNode
        }
    }

    dequeue(){
        if(this.front ==null && this.rear==null ){
            console.log('empty');
            return
        }else{
            this.front = this.front.next
        }
    }

    display(){
        let temp = this.front
        while(temp!=null){
            console.log(temp.value);
            temp = temp.next
        }
    }
}

const queue = new Queue()
queue.enqueue(2)
queue.enqueue(4)
queue.enqueue(6)
queue.enqueue(7)
queue.enqueue(1)
queue.dequeue()
queue.display()