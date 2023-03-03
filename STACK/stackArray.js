class Stack{
    constructor(){
        this.array =[]
        this.top = -1
    }

    add(data){
        this.array.push(data)
        this.top += 1

    }

    remove(){
        this.array.pop()
        this.top -=1
    }

    display(){
        console.log(this.array)
        console.log(this.top);
        console.log('top of stack',this.array[this.top]);
    }
}

const myStack = new Stack();
myStack.add(2)
myStack.add(12)
myStack.add(33)
myStack.add(38)
myStack.remove();
myStack.display()