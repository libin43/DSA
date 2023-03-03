class Stack{
    constructor(){
        this.arr = []
        this.top = -1
    }

    push(data){
            this.arr.push(data)
            this.top+=1
    }

    pop(){
        this.arr.pop()
        this.top -=1
    }

    display(){
        console.log(this.arr);
        console.log(this.arr[this.top]);
    }
}

const myStack = new Stack();
myStack.push(2)
myStack.push(12)
myStack.push(33)
myStack.push(38)
myStack.pop();
myStack.display()
