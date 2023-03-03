class Node {
    constructor(data){
        this.value = data
        this.prev = null
        this.next = null
    }
}
class DLL{
    constructor(){
        this.head = null
        this.tail = null
    }

    addNode (data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
        }
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
        }
        this.tail = newNode
    }

    display(){
        let temp = this.head
        while(temp != null){
            console.log(temp.value,'->');
            temp = temp.next
        }
    }
}

const List = new DLL()
List.addNode(10)
List.addNode(20)
List.addNode(30)
List.addNode(40)
List.addNode(50)
List.addNode(60)
List.display()
