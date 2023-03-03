class Node {
    constructor(data){
        this.value = data
        this.next = null
    }
}

class List{
    constructor(){
        this.head =null
        this.tail = null

    }
    addNode(data){
        const newNode = new Node(data)
        if(this.head == null && this.tail==null){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    selectionSort(){
       let temp = this.head
       while(temp!=null){
        let next = temp.next
        let smallest = temp
        while(next!=null){
            if(smallest.value>next.value){
                smallest = next
            }
            next = next.next
        }
        let temporary = temp.value
        temp.value = smallest.value
        smallest.value = temporary
        temp = temp.next
       }
    }
    

    display(){
        let temp = this.head
        while(temp!=null){
            process.stdout.write(temp.value+'->')
            temp = temp.next
        }
    }
}

const li = new List()
li.addNode(3)
li.addNode(4)
li.addNode(1)
li.addNode(5)
li.addNode(2)
li.selectionSort()
li.display()