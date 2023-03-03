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

    insert(value){
        const newNode = new Node(value)
        if(!this.root){
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
            }
            else{
                this.insertNode(root.left,newNode)
            }
        }
        else if(newNode.value>root.value){
            if(!root.right){
                root.right = newNode
            }
            else{
                this.insertNode(root.right,newNode)
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

    min(root){
        if(!root.left){
            return root.value
        }
        else{
            return this.min(root.left)
        }
    }

    del(val,root = this.root){
        if(!root){
            return root
        }

        if(val<root.value){
            root.left = this.del(val,root.left)
        }
        else if(val >root.value){
            root.right = this.del(val,root.right)
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
            root.right = this.del(root.value,root.right)
        }
        return root
    }

    min(root){
        while(root.left){
            root = root.left
        }
        return root.value
    }

    findClosest(target){
        let temp = this.root
        let closest = temp.value
        while(temp!=null){
            if(Math.abs( target - closest) > Math.abs( target - temp.value) ){
                closest = temp.value
            }
            else if(target<temp.value){
                temp = temp.left
            }
            else if(target>temp.value){
                temp = temp.right
            }
            else{
                break;
            }
        }
        return closest
    }

    // small(node){
    //     while(node.left){
    //         node=node.left;
    //     }
    //     return node.value;
    // }

    // del(value,root = this.root){
    //     if(!root){
    //         return root
    //     }
    //     if(value<root.value){
    //         root.left = this.del(value,root.left)
    //     }
    //     else if(value>root.value){
    //         root.right = this.del(value,root.right)
    //     }
    //     else{
    //         if(!root.left && !root.right){
    //             return null
    //         }
    //         else if(!root.left){
    //             return root.right
    //         }
    //         else if(!root.right){
    //             return root.right
    //         }
    //         root.value = this.min(root.right)
    //         root.right = this.del(value,root.right)
    //     }
    //     return root
    // }
}
const bst = new BST()
bst.insert(10)
bst.insert(3)
bst.insert(15)
bst.insert(5)
bst.insert(7)
bst.insert(19)
bst.insert(21)
// bst.del(19)

// bst.levelOrder(6)
// console.log('min',bst.min(bst.root));

console.log('closest',bst.findClosest(6));
// console.log(bst.min(bst.root));
// console.log(bst.small(bst.root));