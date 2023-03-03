class Node{
    constructor(data){
        this.value = data
        this.children =[]
    }
    addChildren(node){
        this.children.push(node)
    }
}

class gt{
    constructor(rootVal){
        this.root = new Node(rootVal)
    }

    levelOrder(){
        const queue = [this.root]
        while(queue.length){
            let node = queue.shift()
            console.log(node.value);
            node.children.forEach(node=>queue.push(node))
        }
    }

    secondLargest(){
        const queue = [this.root]
        let Largest = this.root.value
        let secondLargest = Largest
        while(queue.length){
            let curr = queue.shift()
            if(Largest < curr.value ){
                secondLargest = Largest
                Largest = curr.value
                console.log('la',Largest);
            }
             
            curr.children.forEach(curr=>queue.push(curr))
        }
        return secondLargest
    }
}
const tree = new gt(5)
const node1 = new Node(6)
const node2 = new Node(7)
const node3 = new Node(8)
const node4 = new Node(9)
const node5 = new Node(16)

tree.root.addChildren(node1)
tree.root.addChildren(node2)
node1.addChildren(node3)
node2.addChildren(node4)
node3.addChildren(node5)
node4.addChildren(node6)

// tree.levelOrder()

console.log('second largest',tree.secondLargest());