class Queue{
    constructor(){
        this.Array = []
        this.size = -1
    }

    enqueue(data){
        this.Array.push(data)
        this.size+=1
    }

    dequeue(){
        if(this.size<0){
            console.log('empty');
        }
       else{
        this.Array.shift()
       }
    }

    display(){
        console.log(this.Array);
    }
}

const q = new Queue()
q.enqueue(4)
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(5)
q.display()