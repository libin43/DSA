const arr = [1,2,3,4,5,6,7,8,9,10]
let target = 3
let start = 0
let end = arr.length-1

function find(arr,target){
    while(start<end){
        let middle = start + (end - start)/2;
        middle = Math.floor(middle)
        if(arr[middle] == target){
            return middle
        } 
        else if(arr[middle] > target){
            end = middle-1
        }
        else if( arr[middle]<target){
            start = middle+1
        }
        else{
            return -1
        }
    }
}

console.log(find(arr,target));