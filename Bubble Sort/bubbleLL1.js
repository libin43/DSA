class Node {
    constructor(data){
        this.value = data
        this.next = null
    }
}
class LL{
    constructor(){
        this.head = null
        this.tail = null
        this.size = -1
    }

    addNode (data){
        const newNode = new Node(data)
        if(this.head==null && this.tail == null){
            this.head = newNode
        }else{
            this.tail.next = newNode
        }
        this.tail = newNode
        this.size++
    }

    bubbleSort(){
        
        let n = this.size 
        for(let i=0;i<n;i++){
            let temp = this.head
            let j=0
            while(j<n-i){
                if(temp.value>temp.next.value){
                    [temp.value,temp.next.value] = [temp.next.value,temp.value]
                }
                temp = temp.next
                j++
            }
        }
    }

    display(){
        let temp = this.head
        while(temp!=null){
            console.log(temp.value);
            temp = temp.next
        }
    }
}
const li = new LL
li.addNode(3)
li.addNode(2)
li.addNode(4)
li.addNode(1)
li.bubbleSort()
li.display()