class Node {
    constructor() {
        this.child = Array(26).fill(null)
        this.end = false
    }
}

class Trie{
    constructor() {
       this.root = new Node()

    }

    insert(word) {
        let alphabets = word.split('')
        let curr = this.root
        for(let alphabet of alphabets){
            
            const index = alphabet.charCodeAt(0) - 'a'.charCodeAt(0)
            if(curr.child[index]==null){
                curr.child[index] = new Node()
            }
            curr = curr.child[index]
        }
        curr.end = true
        
    }

    search(word) {
        let alphabets = word.split('')
        let curr = this.root
        for(let alphabet of alphabets){
            const index = alphabet.charCodeAt(0) - 'a'.charCodeAt(0)
            if(!curr.child[index]){
                return false
            }
            curr = curr.child[index]
        }
        return curr.end
    }

    autoSearch(prefix) {
        const res = []
    }
}

const trie = new Trie()
trie.insert('apple')
trie.insert('app')
trie.insert('geek')
const res = trie.search('geek')
console.log(res);
