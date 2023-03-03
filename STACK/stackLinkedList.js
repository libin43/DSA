class Node{
    constructor(data){
        this.value =data
        this.next = null
    }
}

class linkedList{
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
            return
        }
        else{
            const newTop = this.top.next
            this.top = null
            this.top = newTop
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

const list = new linkedList()
list.push(4)
list.push(2)
list.push(6)
list.push(3)
list.push(8)
list.pop()
list.pop()
list.display()