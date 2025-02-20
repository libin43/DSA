class Node{
    constructor(data){
        this.value = data
        this.left = null
        this.right = null
    }
}
class bin{
    constructor(){
        this.root = null
    }
    insert(data){
        const newNode = new Node(data)
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
        }else{
            if(newNode.value>root.value){
                if(!root.right){
                    root.right = newNode
                }
                else{
                    this.insertNode(root.right,newNode)
                }
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

 search(root,value){
    if(root==null){
        return false
    }
    else{
        if(value == root.value){
            return true
        }
        else if(value<root.value){
           return this.search(root.left,value)
        }
        else if(value>root.value){
            return this.search(root.right,value)
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

 max(){
    let curr = this.root
    while(curr.right){
        curr = curr.right
    }
    return curr.value
 }

 deleteNode(root,value){
    if(!root) return root
    if(value<root.value){
        this.deleteNode(root.left,value)
    }
    else if(value>root.value){
        this.deleteNode(root.right,value)
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



 findClosest(target){
    let temp = this.root
    let closest = temp.value
    while(temp!=null){
        if(Math.abs(target-closest) > Math.abs(target - temp.value)){
            closest = temp.value
        }
        if(target < temp.value){
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

 isBST(node = this.root, min = null, max = null) {
    if (!node) {
      return true;
    }
    if ((min && node.value <= min) || (max && node.value >= max)) {
      return false;
    }
    const left = this.isBST(node.left, min, node.value);
    const right = this.isBST(node.right, node.value, max);
    return left && right;
  }

}

const b = new bin()
b.insert(10)
b.insert(4)
b.insert(17)
b.insert(5)
b.insert(2)
b.insert(19)
b.insert(16)
// console.log(b.search(b.root,10));
// console.log(b.max());
// b.preOrder(b.root)
console.log(b.isBST());
// console.log('closest',b.findClosest(6));

