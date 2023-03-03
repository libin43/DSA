

closingEqual(str){
    for(let i =0;i<str.length;i++){
        if(str.charAt(i) == '('||str.charAt(i) =='{' || str.charAt(i)=='['){
            this.item.push(str.charAt(i))
        }
        else{
            if(
            str.charAt(i)==')' && this.item.pop()!='(' ||
            str.charAt(i)=='}' && this.item.pop()!='{' ||
            str.charAt(i)==']' && this.item.pop()!='[' ){
                return false
            }
        }
        if(this.item.length>0){
            return false
        }
        return true
    }
}