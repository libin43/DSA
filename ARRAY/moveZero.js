const arr = [0,1,0,3,4,0,5,0]

let leftPtr = 0
let rightPtr = arr.length-1

while(leftPtr<=rightPtr){
    if(arr[leftPtr]!=0){
        leftPtr++
    }
    else{
        [arr[leftPtr],arr[rightPtr]] = [arr[rightPtr],arr[leftPtr]]
        rightPtr--
    }
}

console.log(arr);