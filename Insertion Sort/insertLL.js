class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class ILL{
    constructor(){
        this.head = null
        this.tail = null
        this.size = -1
    }
    addNode(data){
        const newNode = new Node(data)
        if(this.head==null && this.tail==null){
            this.head =newNode
            this.size+=1
        }else{
            this.tail.next = newNode
            this.size+=1
        }
        this.tail = newNode
    }

    insertionSort(){
        while(this.head){
            let next = this.head.next
            let temp = dummy
            while(temp.next!=null && temp.next.value<this.head.value){
                temp = temp.next
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


const ill = new ILL()
const dummy = new Node(1000)
ill.addNode(4)
ill.addNode(5)
ill.addNode(1)
ill.addNode(2)
ill.addNode(3)
ill.insertionSort()
ill.display()
