class Node{
    constructor(data){
        this.value = data
        this.left = null
        this.right = null
    }
}

class BT{
    constructor(){
        this.root = null
    }

    addNode(value){
        const newNode = new Node(value)
        if(!this.root){
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

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }

    min(){
        let min = this.root.value
        const queue =[this.root]
        while(queue.length){
            let curr = queue.shift()
            if(min>curr.value){
                min = curr.value
            }
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
        return min
    }
}

const bt = new BT()
bt.addNode(10)
bt.addNode(15)
bt.addNode(5)
bt.addNode(6)
bt.addNode(18)
bt.addNode(8)

bt.inOrder(bt.root)

// console.log(bt.min());