class Node {
    constructor(data){
        this.value = data
        this.next = null
        this.prev = null
    }
}

class DLL {
    constructor(){
        this.head = null
        this.tail = null
    }
    
    addNode(data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
        }else{
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
    }
}

const List = new DLL()