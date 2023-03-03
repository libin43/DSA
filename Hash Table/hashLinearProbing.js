class hashTable{
    constructor(size){
        this.table = new Array(size)
        this.size = size
    }

    hash(key){
      
        return((2*key+3) %this.size);
    }

    set(key){
        const index = this.hash(key)
        let i =0
        while(i<this.size){
            const item = this.table[(index+i)%this.size]
            if(!item){
                this.table[(index+i)%this.size] = key
                break;
            }
            else{
                i++
            }
        }
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i]);
            }
        }
    }
}

const hash = new hashTable(10)
hash.set(3)
hash.set(2)
hash.set(9)
hash.set(6)
hash.set(11)
hash.set(13)
hash.set(7)
hash.set(12)
hash.display()
