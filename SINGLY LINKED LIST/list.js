class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class List{
    constructor(){
        this.head = null
        this.tail = null
    }

    addNode(data){
        const newNode = new Node(data)
        if(!this.head){
            this.head = newNode
        } else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    reverse(){
        let temp = this.head
        let prev = null
        while(temp){
            if(temp==this.head){
                this.tail = temp
            }
            let next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        this.head = prev
    }

    display(){
        let temp = this.head
        while(temp){
            console.log(temp.value)
            temp = temp.next
        }
    }
}

const ll = new List()

ll.addNode(2)
ll.addNode(4)
ll.addNode(8)
ll.addNode(10)
ll.addNode(12)
ll.reverse()
ll.display()
console.log(ll.head.value, 'head')
console.log(ll.tail.value, 'tail')
