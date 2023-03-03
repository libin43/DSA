class Node {
    constructor(data){
        this.value = data
        this.next = null
    }
}

class stack{
    constructor(){
        this.top = null
    }

    push(data){
        const newNode = new Node(data)
        if(this.top==null){
            this.top = newNode
        }
        else{
            const addressPointer = this.top
            this.top = newNode
            newNode.next = addressPointer
        }
    }

    pop(){
        if(this.top.next!=null){
            const newTop = this.top.next
            this.top = newTop
        }
    }

    display(){
        console.log(this.top)
    }
}

const st = new stack()
st.push(3)
st.push(4)
st.push(5) 
st.push(6)
st.push(7)
st.pop()
st.display()