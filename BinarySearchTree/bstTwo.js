class Node{
    constructor(data){
        this.value = data
        this.right = null
        this.left = null 
    }
}
class BST{
    constructor(){
        this.root = null
    }

    insert(value){
        const newNode = new Node(value)
        if(this.root==null){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left==null){
                root.left = newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else if(newNode.value>root.value){
            if(root.right == null){
                root.right = newNode
            }
            else{
                this.insertNode(root.right,newNode)
            }
        }
    }

    search(root,value){
        if(!root){
            return false
        }
        else{
            if(value == root.value){
                return true
            }
            else if(value < root.value){
                return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        }
    }

    levelOrder(){
        const queue = []
        queue.push(this.root)
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
    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    min(root){
        if(!root.left){
            return root.value;
        }
        else{
           return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value;
        }
        else{
            return this.max(root.right)
        }
    }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }
    deleteNode(root,value){
        if(root ==null){
            return root
        }
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }
        else if(value>root.value){
            root.right = this.deleteNode(root.right,value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            else if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right,root.value)
        }
        return root
    }

    findNextClosest(root,value){
        if(value == root.value){
            if(root.left){
                console.log(root.left.value);
            }
            if(root.right){
                console.log(root.right.value);
            }
        }
        if(value < root.value){
            return this.findNextClosest(root.left,value)
        }
        else if(value > root.value){
            return this.findNextClosest(root.right,value)
        }
    }

    findClosest(target){
        let temp = this.root
        let closest = temp.value
        while(temp != null){    
            if(Math.abs(target-closest) > Math.abs(target-temp.value)){
                closest = temp.value 
            }
            if(target<temp.value){
                temp = temp.left
            }
            else if(target > temp.value){
                temp = temp.right
            }
            else{
                break;
            }
        }
        return closest
    }
    
}
const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(19)
bst.insert(4)
bst.insert(15)
bst.insert(7)
// bst.postOrder(bst.root)
// console.log(bst.max(bst.root));
// bst.delete(7)
// bst.levelOrder()
console.log(bst.findClosest(16));
// console.log(bst.search(bst.root,19));