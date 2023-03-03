class Node{
    constructor(data){
        this.value = data
        this.next = null
    }   
}

class stack{
    constructor(){
        this.top = null
        this.size = 0
    }

    push(data){
        const newNode = new Node(data)
        if(this.top==null){
            this.top = newNode
        }
        else{
            const addressPointer = this.top
            this.top = newNode
            this.top.next = addressPointer
        }
        this.size++
    }
    pop(){
        if(this.top==null){
            return null
        }
        else{
            let delVAl = this.top.value
            const newTop = this.top.next
            this.top =null
            this.top = newTop
            this.size--
            return delVAl
        }
    }
    display(){
        let temp = this.top
        while(temp!=null){
            process.stdout.write(temp.value+'->')
            temp = temp.next
        }
    }
}

class qu{
    constructor(){
        this.stackEnqueue = new stack()
        this.stackDequeue = new stack()
    }

    enqueue(data){
        this.stackEnqueue.push(data)
    }

    dequeue(){
        let rotate = this.stackEnqueue.size
        while(rotate){
            this.stackDequeue.push( this.stackEnqueue.pop())
            rotate--
        }
        return this.stackDequeue.pop()
    }

    display(){
        this.stackDequeue.display()
    }
}

const q = new qu()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.dequeue()
q.display()