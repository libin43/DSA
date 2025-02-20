class trieNode {
    constructor(data) {
        this.value = data
        this.children = new Map()
        this.end = false
    }
}

class Trie {
    constructor() {
        this.root = new trieNode()
    }

    insert(word) {
        let curr = this.root
        for (const alphabet of word) {
            if (!curr.children.has(alphabet)) {
                let child = new trieNode(alphabet)
                curr.children.set(alphabet, child)
            }
            curr = curr.children.get(alphabet)
        }
        curr.end = true

    }

    search(word) {
        let curr = this.root
        for (const alphabet of word) {
            if (curr.children.has(alphabet)) {
                curr = curr.children.get(alphabet)
            }
            else {
                return false
            }
        }
        return curr.end
    }

    autoComplete(word) {
        let res = []
        let curr = this.root
        for (const alphabet of word) {
            if (curr.children.has(alphabet)) {
                curr = curr.children.get(alphabet)
            } else {
                return res
            }
        }
        // res.push(str)
        this.helper(res, curr, word)
        return res
    }
    helper(res, curr, prefix) {
        // console.log(prefix);
        // console.log(res);
        

        if(curr.end){
             res.push(prefix)
        }
        
        for (let key of curr.children.keys()) {
            // console.log(key);
            this.helper(res, curr.children.get(key), prefix.concat(key))
        }
    }

    deleteNode(word){
        let curr = this.root
        let parent = curr
        // let index =0
        // let parentKey = null

        this.deleteHelper(parent, curr.children.get(word[0]), word, 0)
    }
    
    deleteHelper(parent, curr, word, index) {
        if(!curr || curr.value !== word[index]){
            return false
        }
        if(index === word.length-1){
            //deletion process
            if(curr.children.size>0){
                curr.end = false
                return false
            }

            else {
                parent.children.delete(word[index])
                return true
            }
        }
        parent = curr
        curr = curr.children.get(word[index+1])
        const shouldDelete =this.deleteHelper(parent, curr, word, index+1)
        if(shouldDelete && curr.children.size==0){
            parent.children.delete(word[index])
            return true
        }
    }
}

const trie = new Trie()
trie.insert('BATMAN')
trie.insert('BATWOMAN')
trie.insert('BAT')
trie.insert('BALL')
const data = trie.deleteNode('BATMAN')
console.log(data);


const res = trie.autoComplete('BA')
console.log(res);
