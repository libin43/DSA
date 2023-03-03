class Node{
    constructor(data){
        this.value = data
        this.left = null
        this.right = null
    }
}

class bt{
    constructor(){
        this.root = null
    }

    addNode(value){
        const newNode = new Node(value)
        if(this.root == null){
            this.root = newNode
        }
        else{
            const queue = [this.root]
            while(queue.length){
                let curr = queue.shift()
                if(!curr.left){
                    curr.left = newNode
                    return
                }
                if(!curr.right){
                    curr.right = newNode
                    return
                }
                queue.push(curr.left)
                queue.push(curr.right)
            }
        }
    }
}