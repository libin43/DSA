class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class SLinkedList{
    constructor (){
        this.head = null
        this.tail = null
        this.obj = {}
    }

    addNode (data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
    }

    deleteNode(data){
        this.temp = this.head
        this.prev = null
        if(this.temp.value == data && this.temp != null){
            this.head = this.temp.next
            return
        }
        while(this.temp != null && this.temp.value != data){
            this.prev = this.temp
            this.temp = this.temp.next
        }
        if(this.tail == this.temp){
            this.tail = this.prev
            this.tail.next = null
            return
        }
        this.prev.next = this.temp.next
    }

    insertAfter(nextTo,data){
        this.temp = this.head
        const newNode = new Node(data)
        while(this.temp !=null && this.temp.value != nextTo){
            this.temp = this.temp.next
        }
        if(this.tail == this.temp){
            this.tail.next = newNode
            this.tail = newNode
            return
        } 
        newNode.next = this.temp.next
        this.temp.next = newNode
    }

    insertBefore (prevTo,data){
       const newNode = new Node(data)
       this.temp = this.head
       this.prev = null
       if(this.temp.value == prevTo && this.temp!=null){
        this.head = newNode
        this.head.next = this.temp
        return;
       } 
       while(this.temp != null && this.temp.value != prevTo){
        this.prev = this.temp
        this.temp = this.temp.next
       }
       this.prev.next = newNode
       newNode.next = this.temp
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeDuplicates() {
        let prev = null
        let temp = this.head
        while(temp!=null){
            if(temp.value in (this.obj)){
                prev.next = temp.next
            }else {
                this.obj[temp.value] = "val"
                prev = temp
            }
            temp = temp.next
        }
        this.tail = prev
    }

    arrayToList(arr){
        for(let i = 0;i<arr.length;i++){
         this.addNode(arr[i])   
        }
    }
    
    display(){
        this.temp = this.head   
        while(this.temp != null){
            console.log(this.temp.value);
            this.temp = this.temp.next
        }
        // console.log('head :',this.head,'tail :',this.tail );
    }
    
    
}

function reverse(temp){
    if(temp == null){
        return ;
    }
    reverse(temp.next)
    process.stdout.write(`${temp.value} ->`)
}

const List = new SLinkedList()
List.addNode(20)
List.addNode(10)
List.addNode(40)
List.addNode(30)
List.addNode(40)
List.addNode(90)
// List.deleteNode(20)
// List.deleteNode(70)
// List.deleteNode(30)
// List.insertAfter(10,90)
// List.insertAfter(80,190)
// List.insertAfter(40,100) 
// List.insertBefore(20,10)
// List.insertBefore(30,88)
List.removeDuplicates()
// reverse(List.head)
// List.arrayToList([2,3,45,6])
List.display()