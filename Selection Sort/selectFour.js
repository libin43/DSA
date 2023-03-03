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
        this.size = -1

    }
    addNode(data){
        const newNode = new Node(data)
        if(this.head == null && this.tail==null){
            this.head = newNode
            this.s
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }
    selectionSort(){
        let temp = this.head
        while(temp){
          
          let next = temp.next
            let smallest = temp
            console.log(smallest,'smallest current');
            while(next!=null){
                console.log(next.next,'temp next');
                if(smallest.value>next.value){
                    smallest = next
                    console.log(smallest,'smallest');
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