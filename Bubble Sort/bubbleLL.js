class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}
class BLL{
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
    bubbleSort(){
       
        let n = this.size
        for(let i=0;i<n;i++){
            let temp = this.head
            for(let j=0;j<n-i;j++){
    
                if(temp.value>temp.next.value){
       
                   [temp.value,temp.next.value] = [temp.next.value,temp.value]
     
                }
                temp = temp.next
 
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

const bubble = new BLL()
bubble.addNode(4)
bubble.addNode(3)
bubble.addNode(2)
bubble.addNode(1)
bubble.addNode(-1)
bubble.addNode(100)
bubble.bubbleSort()
bubble.display()

