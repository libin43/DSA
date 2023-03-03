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

    insert(data){
        const newNode = new Node(data)
        if(this.root==null){
            this.root = newNode
        }
        else{
            this.insertNode(this.root,newNode)
        }
    }

    insertNode(root,newNode){
        if(newNode.value<root.value){
            if(root.left == null){
                root.left = newNode
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else{ 
            if(newNode.value>root.value){
                if(root.right == null){
                    root.right = newNode
                }
                else{
                    this.insertNode(root.right,newNode)
                }
            }
        }
    }

    search(root,value){
        console.log(root);
        if(root==null){
            return false 
        }
        else{
            if(root.value == value){
                return true
            }
            else if(value<root.value){
                return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
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

    min(root) {
        if (!root.left) return root.value;
        else return this.min(root.left);
      }

    max(root){
        if(!root.left){
            return console.log(root.value);
        }
        else{
            this.max(root.right)
        }
    }

    // delete(val) {
    //     this.root = this.deleteNode(this.root, val);
    //   }
    
    //   deleteNode(root, val) {
    //     if (root == null) return root;
    
    //     if (val < root.value) {
    //       root.left = this.deleteNode(root.left, val);
    //     } else if (val > root.value) {
    //       root.right =    this.deleteNode(root.right, val);
    //     } else {
    //       if(!root.left && !root.right) return null
    
    //       if(!root.left) return root.right
    //       if(!root.right) return root.left
    
    //       root.value = this.min(root.right)
    //       root.right = this.deleteNode(root.right, root.value)
    //     }
    //     return root
    //   }

    delete(value){
        this.root = this.deleteNode(this.root,value)
    }

    deleteNode(root,value){
        if(root == null){
            return root
        }
        
        if(value < root.value){
            root.left = this.deleteNode(root.left,value)
        }

        else if(value > root.value){
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
    isBST(node = this.root, min = null, max= null){
        if(!node){
            return true
        }
        if((min && node.value<=min) || (max && node.value>=max)){
            return false
        }
        const left = this.isBST(node.left,min,node.value)
        const right = this.isBST(node.right,node.value,max)
        return left && right
    }

}
const bst = new BST()
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(14)
bst.insert(19)


// console.log('gg',bst.min(bst.root));
// bst.delete(10)
// bst.levelOrder()
console.log(bst.isBST());