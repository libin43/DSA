class cirArr{
    constructor(size){
        this.Arr = new Array(size)
        this.front = -1
        this.rear = -1
    }

    enqueue(data){
        if(this.front==- 1 && this.rear==-1){
            this.front=0
            this.rear=0
            this.Arr[this.rear] = data
        }
        else if(((this.rear+1)%this.Arr.length)===this.front){
            console.log('queue overflow');
            return;
        }
        else{
            this.rear = (this.rear+1)%this.Arr.length
            this.Arr[this.rear] = data
        }
    }

    dequeue(){
        if(this.front==-1 && this.rear==-1){
            console.log('queue underflow');
            return;
        }
        else if(this.rear==this.front){
            this.front= this.rear=-1
        }
        else{
            this.Arr[this.front] = null
            this.front = (this.front+1)%this.Arr.length
        }
    }

    display(){
        let i=this.front
        while(i!=this.rear){
            console.log(this.Arr[i]);
            i=(i+1)%this.Arr.length
        }
        console.log(this.Arr[this.rear]);
    }
}

const cq = new cirArr(3)
cq.enqueue(3)
cq.enqueue(6)
cq.enqueue(9)
cq.dequeue()
cq.dequeue()
cq.enqueue(6)
cq.enqueue(3)
cq.display()