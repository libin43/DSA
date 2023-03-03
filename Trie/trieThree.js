class Node{
    constructor(data){
        this.value = data
        this.children = new Map()
        this.isEnd = false
    }
}

class prefixTrie{
    constructor(){
        this.root = new Node()
    }

    insert(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children.has(char)){
                curr.children.set(char,new Node(char))
            }
            curr = curr.children.get(char)
        }
        curr.isEnd = true
    }

    contains(word){
        let curr = this.root
        for(let char of word){
            if(!curr.children.has(char)){
                return false
            }
            curr = curr.children.get(char)
        }
        return curr.isEnd
    }

    autoComplete(prefix){
        let curr = this.root
        const res = new Array()
        for(let char of prefix){
            if(curr.children.has(char)){
                curr = curr.children.get(char)
            }
            else{
                return res
            }
        }
        this.helper(curr,res,prefix.substring(0,prefix.length-1))
        return res
    }

    helper(curr,res,prefix){
        if(curr.isEnd){
            return res.push(prefix+curr.value)
        }
        else{
            for(let c of curr.children.keys()){
                this.helper(curr.children.get(c),res,prefix+curr.value)
            }
        }
    }

   delete(word){
    if(!word) return
    let curr = this.root
    let parent
    let parentKey

    for(let char of word){
         parent = curr
         console.log(parent,'its parent');
         parentKey = char
         console.log(parentKey,'its parentKey');
        curr = curr.children.get(char)
        if(!curr) return
    }

    if(!curr.isEnd){
        return  
    }

    if(curr.children.size>0){
        curr.isEnd = false
        return
    }

    while(curr.children.size==0){
        
    }
   } 



    
}
const pt = new prefixTrie()
pt.insert('BALL')
pt.insert('BANE')
pt.insert('BAT')
// console.log(pt.autoComplete('BA'));
pt.delete('BALL')
// console.log(pt.contains('BALL'));