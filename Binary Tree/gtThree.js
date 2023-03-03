class Node{
    constructor(data){
        this.value = data
        this.children = []
    }

    addChild(node){
        this.children.push(node)
    }
}

class gt{
    constructor(rootVal){
        this.root = new Node(rootVal)
    }

    secondLargest(){
        const queue = [this.root]
        let largest = this.root.value
        let sLarge
        while(queue.length){
            let curr = queue.shift()
            if(largest < curr.value){
                sLarge = largest
                largest = curr.value
            }
            curr.children.forEach(curr =>queue.push(curr))
        }
        return sLarge
    }
}

const tree = new gt(10)
const node1 = new Node(15)
const node2 = new Node(4)
const node3 = new Node(17)
const node4 = new Node(13)
tree.root.addChild( node1)
tree.root.addChild( node2)
node1.addChild(node3)
node2.addChild(node4)
console.log(tree.secondLargest());