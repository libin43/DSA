const arr = [1,2,3,4,5,6,7,8,9]
let startIdx = 0
let endIdx = arr.length-1
let target = 1

function find(arr){
    while(startIdx <= endIdx){
        let middle = startIdx + (endIdx - startIdx)/2;
        middle = Math.floor(middle)
        if(arr[middle] == target){
            return middle
        }
        else if(arr[middle] < target){
            startIdx = middle+1
        }
        else if(arr[middle]>target){
            endIdx = middle-1
        }
        else{
            return -1
        }
    }
}

const indexAt = find(arr)
console.log(`target - ${target} at index - ${indexAt}`);