class Node {
    constructor(data){
        this.value = data
        this.next = null
    }
}
class CLL{
    constructor(){
        this.front = null
        this.rear = null
    }

    enqueue(data){
        const newNode = new Node(data)
        if(this.front==null && this.rear == null){
            this.front = newNode
            this.rear = newNode
        }
        else{
            this.rear.next = newNode
            this.rear = newNode
            this.rear.next = this.front 
        }
    }

    dequeue(){
        if(this.front == null && this.rear == null){
            console.log('queue underflow');
            return
        }
        else if(this.front == this.rear){
            this.front = this.rear = null
        }
        else{
            this.front = this.front.next 
            this.rear.next = this.front
        }
    }

    display(){
        let temp = this.front
        while(temp.next!=this.front){
            console.log(temp.value);
            temp = temp.next
        }
        console.log(temp.value);
    }
}

const cq = new CLL()
cq.enqueue(4)
cq.enqueue(2)
cq.enqueue(6)
cq.enqueue(8)
cq.enqueue(1)
cq.dequeue()
cq.dequeue()
cq.enqueue(10)
cq.display()