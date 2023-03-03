class Node{
    constructor(data){
        this.value = data
        this.left = null
        this.right = null
    }
}

class Bt{
    constructor(){
        this.root = null
    }

    addNode(value){
        const newNode = new Node(value)
        if(this.root==null){
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

    levelOrder(){
        const queue = [this.root]
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    min(){
        let min = this.root.value
        const queue = [this.root]
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

const bt = new Bt()
bt.addNode(6)
bt.addNode(2)
bt.addNode(4)
bt.addNode(3)
bt.addNode(12)
bt.addNode(1)

bt.levelOrder()

console.log('min',bt.min());