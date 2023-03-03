class Node {
    constructor(data){
        this.value = data
        this.next = null
    }
}

class SLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }

     addNode(data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
        }
        else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    removeNode(data){
        this.temp = this.head
        this.prev = null
       
         if(this.temp !=null && this.temp.value == data){
            this.head = this.temp.next
            return;
        }
        while(this.temp != null && this.temp.value != data){
            this.prev = this.temp
            this.temp = this.temp.next
        }
        if(this.temp == this.tail){
            this.tail = this.prev
        }
        this.prev.next = this.temp.next
    }

    insertAfter(nextTo,data){
        const newNode = new Node(data)
        this.temp = this.head
        while(this.temp.value != nextTo){
            this.temp = this.temp.next
        }
        newNode.next = this.temp.next
        this.temp.next = newNode

        if(this.tail == this.temp){
            this.tail = newNode
            newNode.next = null
            return;
        }
    }

    insertBefore(prevTo,data){

    }

    display(){
        console.log('head :',this.head,'\n tail :',this.tail);
    }
}

const list = new SLinkedList()
list.addNode(2)
list.addNode(4)
list.addNode(6)
list.addNode(8)
list.addNode(10)
list.insertAfter(10,11)
list.display()