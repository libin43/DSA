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
        this.size = 0
    }
    enqueue(data){
        const newNode = new Node(data)
        if(this.front==null && this.rear ==null){
            this.front = newNode
            this.rear = newNode
            this.size++
        }
        else{
            this.rear.next = newNode
            this.rear = newNode
            this.size++
        }
    }

    dequeue(){
        if(this.front==null && this.rear==null){
            return null;
        }
        else{
            let delVAl = this.front.value
            this.front = this.front.next
            this.size--
            return delVAl
        }
    }

    display(){
        let temp = this.front
        while(temp!=null){
            process.stdout.write(temp.value+'->')
            temp = temp.next
        }
       
    }

}

class Stack{
    constructor(){
        this.queue = new Queue()
    }
    push(data){
        let rotate = this.queue.size
        this.queue.enqueue(data)
        while(rotate){
            this.queue.enqueue(this.queue.dequeue())
            rotate--
        }
    }
    pop(){
        this.queue.dequeue()
    }
    display(){
        this.queue.display()
    }
}

const st = new Stack()
st.push(1)
st.push(2)
st.push(3)
st.push(4)
st.pop()
st.display()