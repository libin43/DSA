class Node{
    constructor(data){
        this.value = data
        this.left = null
        this.right = null
    }
}

class BST{
    constructor(){
        this.root = null
    }
    
    insertNode(data){
        const newNode = new Node(data)
        if(!this.root){
            this.root = newNode
        }else {
            this.insertRec(this.root, newNode)
        }
    }
    
    insertRec(root, newNode){
        if(newNode.value<root.value){
            if(!root.left){
                root.left = newNode
            }else{
                this.insertRec(root.left, newNode)
            }
        }else {
            if(!root.right){
                root.right = newNode
            }else {
                this.insertRec(root.right, newNode)
            }
        }
    }

    min(root){
        if(!root.left){
            return root
        }else {
            return this.min(root.left)
        }
    }
    
    deleteNode(value){
       return this.delete(this.root, value)
    }

    delete(root, value){
        if(value<root.value){
           root.left = this.delete(root.left, value)
        }
        else if(value>root.value){
           root.right = this.delete(root.right, value)
        }
        else {
            if(!root.right && !root.left){
                return null
            }
            else if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            else if(root.right && root.left){
                let inOrderSuccessor = this.min(root.right)
                root.value = inOrderSuccessor.value
                root.right = this.delete(root.right, inOrderSuccessor.value)
            }
        }


        return root
    }
    
    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    isBst(root=this.root, min=null, max = null){
        if(!root){
            return true
        }
        else if((min && root.value<min) || (max && root.value>max)){
            return false
        }
        let left = this.isBst(root.left, min, root.value)
        let right = this.isBst(root.right, root.value, max)
        return left&&right
    }



}

const bst = new BST()
bst.insertNode(10)
bst.insertNode(5)
bst.insertNode(30)
bst.insertNode(6)
bst.insertNode(4)
bst.insertNode(40)
bst.insertNode(20)
// bst.deleteNode(4)
// bst.deleteNode(10)

// bst.inOrder(bst.root)

const res = bst.isBst()
console.log(res)

