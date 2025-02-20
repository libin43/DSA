class LLNode {
    value: number
    next: LLNode | null
    constructor(data: number) {
        this.value = data
        this.next = null
    }
}

class LinkedLists {
    head: LLNode | null
    tail: LLNode | null
    constructor() {
        this.head = null
        this.tail = null
    }

    insertNode(data: number) {
        const newNode = new LLNode(data)
        if (this.head == null) {
            this.head = newNode
        } else {
            if (this.tail !== null) {
                this.tail.next = newNode;
            }
        }
        this.tail = newNode
    }

    deleteNodeAtPos(index: number) {
        if (this.head == null) {
            throw new Error('Head null')
        } else {
            let traverse = 0
            let temp: LLNode | null = this.head
            let prev: LLNode | null = null
            while (temp !== null && traverse < index) {
                prev = temp
                temp = temp.next
                traverse++
            }
            if (prev != null && temp !== null) {
                prev.next = temp?.next
            }
        }
    }

    deleteNode(data: number) {
        let temp: LLNode | null = this.head
        let prev: LLNode | null = null
        if (temp != null && temp.value === data) {
            this.head = null
            this.head = temp.next
            return
        }
        while (temp != null && temp.value !== data) {
            prev = temp
            temp = temp.next
        }
        if (prev != null && temp !== null) {
            prev.next = temp?.next
        }
        if (this.tail === temp) {
            this.tail = prev
            return
        }
    }

    recurs(pos:number, currNode: LLNode, node: LLNode){
        let prev = currNode
        this.recurs(pos, currNode.next, node)
    }

    recursionInsert(pos: number, data: number) {
        const newNode = new LLNode(data)
        let temp: LLNode | null = this.head
        let prev: LLNode|null = null
        if (pos == 0 && !this.head) {
            this.head = newNode
        }
        else if(pos ==0 && temp!=null){
            newNode.next = temp.next
            this.head = newNode
        }
        else if(pos>0 && temp !=null) {
            temp = temp.next
            this.recurs(pos, temp, newNode)
        }
    }

    displayNode() {
        let temp = this.head
        let res = ""
        while (temp !== null) {
            // console.log(`${temp.value}->`);
            res = res.concat(` ${temp.value}->`)
            temp = temp.next
        }
        console.log(res);

    }
}


const newList = new LinkedLists()
newList.insertNode(2)
newList.insertNode(4)
newList.insertNode(6)
newList.insertNode(10)
// newList.deleteNodeAtPos(1)
// newList.deleteNode(2)
const newNode = new LLNode(8)
newList.recursionInsert(8,3)
newList.displayNode()