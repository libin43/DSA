class Node {
    constructor(data){
        this.value = data
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
    }

    addNode(data){
        const newNode = new Node(data)
        if(this.head == null){
            this.head = newNode
            return
        }
        let current = this.head
        while(current.next){
            current = current.next
        }
        current.next = newNode
    }

    mergeSort(){
        if(!this.head || !this.head.next){
            return this.head;
        }

        const middle = this.getMiddle(this.head)
       const nextToMiddle = middle.next
       middle.next = null

       const left = new linkedList()
       left.head = this.head

       const right = new linkedList()
       right.head = nextToMiddle

       const sortedLeft = left.mergeSort()
       const sortedRight = right.mergeSort()
       return this.merge(sortedLeft,sortedRight)

       
    }

    getMiddle(head){
        let slow = head
        let fast = head
        while(fast!=null &&fast.next!=null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    merge(left,right){
        let result = new linkedList()
        let leftPointer = left
        let rightPointer = right

        while(leftPointer&&rightPointer){
            if(leftPointer.data<rightPointer.data){
                result.addNode(leftPointer.data)
                leftPointer =  leftPointer.next
            }else {
                result.append(rightPointer.data);
                rightPointer = rightPointer.next;
              }
        }
        while (leftPointer) {
            result.append(leftPointer.data);
            leftPointer = leftPointer.next;
          }
      
          while (rightPointer) {
            result.append(rightPointer.data);
            rightPointer = rightPointer.next;
          }

          return result.head
    }

    display(){
        let temp = this.head
        while(temp){
            process.stdout.write(temp.value+'->');
            temp = temp.next
        }
    }
}

const list = new linkedList()
list.addNode(5)
list.addNode(3)
list.addNode(4)
list.addNode(1)
list.addNode(2)
list.mergeSort()
list.display()