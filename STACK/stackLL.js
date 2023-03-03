class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class Stack{
    constructor(){
        this.top = null
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
    }

    pop(){
        if(this.top==null){
            console.log('underflow');
            return;
        }
        else{
            this.top = this.top.next
        }
    }

    display(){
        let temp = this.top
        while(temp!=null){
            console.log(temp.value);
            temp = temp.next
        }
    }
}

const stack = new Stack()
stack.push('J')
stack.push('A')
stack.push('V')
stack.push('A')
stack.pop()
stack.display()