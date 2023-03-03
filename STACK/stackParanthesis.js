class Stack {
    constructor(maxsize) {
      this.item = [];
      this.maxsize = maxsize;
    }
  
    isempty() {
      if (this.item.length == 0) {
        return "arry is empty";
      }
    }
    stackFull() {
      if (this.item.length >= this.maxsize) {
        return "stack is full";
      }
    }
    peek() {
      if (!this.isempty()) {
        return this.item[this.item.length - 1];
      }
    }
  
    push(val) {
      if (this.stackFull()) {
        return "stack if full";
      } else {
        this.item.push(val);
      }
    }
  
    pop() {
      if (this.isempty()) {
        return "stack  is empty";
      } else {
        this.item.pop();
      }
    }
    
    closingEqual(str){ 
        for(let i =0;i<str.length;i++){
            if(str.charAt(i) == '('||str.charAt(i) =='{' || str.charAt(i)=='['){
                this.item.push(str.charAt(i))
                console.log(this.item);
            }
            else{
                if(
                str.charAt(i)==')' && this.item.pop()!='(' ||
                str.charAt(i)=='}' && this.item.pop()!='{' ||
                str.charAt(i)==']' && this.item.pop()!='[' ){
                    return false
                }
            }
           
        }
        if(this.item.length>0){
            return false
        }
        return true
    }
  }
  
  let St = new Stack(20);
  
  let str = "()";
  console.log(St.closingEqual(str))