class Node {
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

    contain(word){
        let curr = this.root
        for(let char of word){
            console.log(curr.children,'hai');
              let  child = curr.children.get(char)
              if(!child) return false
              curr = child
        }
        return curr.isEnd
    }

    startsWith(prefix){
        let curr = this.root
        for(let char of prefix){
            let child = curr.children.get(char)
            if(!child) return false
            curr = child
        }
        return true
    }

    autoComplete(prefix){
        var res = new Array()
        let curr = this.root
        for(let char of prefix){
          
            if(curr.children.has(char)){
                curr = curr.children.get(char)
            }
            else{
                return res
            }
        }
 
        this.helper(curr,res,prefix.substring(0,prefix.length-1))
        return res;
    }
    
    helper(curr,res,prefix){
        if(curr.isEnd){
            res.push(prefix+curr.value)
        }
        for(let c of curr.children.keys()){
          
            this.helper(curr.children.get(c),res,prefix+curr.value)
        }
    }
}

const pt = new prefixTrie()
pt.insert('LIBIN')
pt.insert('BAT')
pt.insert('BALL')
// console.log(pt.contain('Librin'));
// console.log('start with',pt.startsWith('Libi'));
console.log(pt.autoComplete('BA'));
 