class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class LL{
    constructor(){
        this.head = null
        this.tail = null
    }
    addNode(data){
        const newNode = new Node(data)
        if(this.head==null && this.tail==null){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }
   insertionSort(){
    while(this.head){
        let next = this.head.next
        let temp = dummy
        while(temp.next && temp.next.value<this.head.value){
            temp= temp.next
        }
        this.head.next = temp.next
        temp.next = this.head
        this.head = next
    }
   }
    display(){
        let temp = dummy.next
        while(temp!=null){
            process.stdout.write(temp.value+'->')
            temp = temp.next
        }
     }

}

const list = new LL()
const dummy = new Node(1000)
list.addNode(4)
list.addNode(1)
list.addNode(2)
list.addNode(3)
list.insertionSort()
list.display()
