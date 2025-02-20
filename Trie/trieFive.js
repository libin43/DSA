class Node{
    constructor(data){
        this.value = data
        this.children = new Map()
        this.isEnd = false
    }
}
class preTrie{
    constructor(){
        this.root = new Node()
    }

    addNode(word){
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
        let res = new Array()
        for(let char of prefix){
            if(!curr.children.has(char)){
                return res
            }
            curr = curr.children.get(char)
        }
        this.helper(curr,res,prefix.substring(0,prefix.length-1))
        return res
    }

    helper(curr,res,prefix){
        if(curr.isEnd){
             res.push(prefix+curr.value)
        }
        for(let c of curr.children.keys()){
            this.helper(curr.children.get(c),res,prefix+curr.value)
        }
    }

    delete(word){
        let curr =this.root
        let parent
        let parentKey
        for(let char of word){
            parent = curr
            parentKey = char
            curr = curr.children.get(char)
            if(!curr) return
        }

        if(!curr.isEnd){``
            return
        }

        if(curr.children.length>0){
            curr.isEnd = false
            return
        }

        while(curr.children.size ===0){
            if(!parent){
                break
            }
            parent.children.delete(parentKey)
            if(parent.isEnd || parent === this.root || parent.children.size>1){
                break
            }
            curr = parent
            parentKey = Array.from(curr.children.keys())[0]
            parent = parent.children.get(parentKey)
        }
    }
}

const trie = new preTrie()
trie.addNode('APPLE')
trie.addNode('BAT')
trie.addNode('BALL')
trie.addNode('BANNER')


// trie.delete('BALL')
console.log(trie.autoComplete('BA'));

