class Arr{
    constructor(){
        this.Arr = []
        this.top = -1
    }

     push(data) {
        this.Arr.push(data)
        this.top+=1
    }

    pop(){
        this.Arr.pop()
        this.top-=1
    }

    display(){
        console.log(this.Arr)
        console.log(this.top);
    }
}

const arr = new Arr()
arr.push(2)
arr.push(4)
arr.push(6)
arr.push(8)
arr.pop()
arr.display()