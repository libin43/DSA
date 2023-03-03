class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class myQueue{
    constructor(){
        this.front = null
        this.rear = null
        this.size  = 0
    }

    enqueue(data){
        const newNode = new Node(data)
        if(this.size===0){
            this.front=newNode
            this.rear=newNode
        }
        else{
            this.rear.next = newNode
            this.rear = newNode
        }
        this.size++
    }

    dequeue(){
        if(!this.size){
            console.log('underflow');
            return;
        }
       
        else{
            let frontDel = this.front.value
            this.front = this.front.next
            this.size--;
            return frontDel
        }

    }

    peek(){
        console.log(this.front.value)
    }

    display(){
        
        let temp  = this.front
        while(temp!=null){  
            process.stdout.write(temp.value+'->')
            temp = temp.next
        }
    }

   
}

class myStack{
    constructor(){
        this.queue = new myQueue()
    }
    push(val) {
        let rotate = this.queue.size

        this.queue.enqueue(val)

        while (rotate) {
            this.queue.enqueue(this.queue.dequeue())
            rotate--
        }
    }
    pop(){
        this.queue.dequeue()
    }

    top(){
        this.queue.peek()
    }

    display(){
      return  this.queue.display()
    }

   
}

const sq = new myStack()
sq.push(10)
sq.push(20)
sq.push(30)
sq.push(400)
sq.pop()

sq.display()
