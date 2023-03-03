class Node {
    constructor(value){
        this.value = value
        this.children = []
    }
    addChild(node){

        this.children.push(node)
    }
}

class gt{
    constructor(rootval){
        this.root = new Node(rootval)
    }

    levelOrder(){
        const queue = [this.root]
        while(queue.length){
            let node = queue.shift()
            console.log(node.value);
   
           
            node.children.forEach(node => queue.push(node));
        }
    }
}

const tree = new gt(2)
const node1 = new Node(3)
const node2 = new Node(4)
const node3 = new Node(5)
const node4 = new Node(6)
const node5 = new Node(20)
tree.root.addChild(node1)
tree.root.addChild(node2)
tree.root.addChild(node5)
node1.addChild(node3)
node5.addChild(node4) 

tree.levelOrder()