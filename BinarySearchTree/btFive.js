class Node {
    constructor(data){
        this.value = data
        this.left =null
        this.right = null
    }
}
class bst{
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
            if(!root.left){
                root.left = newNode
            }else{
                this.insertNode(root.left,newNode)
            }
        }
        else{
            if(!root.right){
                root.right = newNode
            }
            else{
                this.insertNode(root.right,newNode)
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

    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    delete(root,value){
        if(root == null){
            return root
        }
        if(value<root.value){
            this.delete(root.left,value)
        }
        else if(value>root.value){
            this.delete(root.right,value)
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
            root.right = this.delete(root.right,root.value)
        }
        return root
    }
}