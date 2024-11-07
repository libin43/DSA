const arr = [4,5,6,7,0,1,2]

function find(arr) {
    let startIdx = 0
    let endIdx = arr.length-1
    let min = Infinity

    while(startIdx <=endIdx) {
        let middle = startIdx +(endIdx - startIdx)/2
        middle = Math.floor(middle)
         if(arr[middle]< min ){
            min = arr[middle]
        }
        else if(arr[middle]> arr[endIdx]){
            startIdx = middle+1
        }
        else if(arr[middle]<arr[startIdx]){
            endIdx = middle -1
        }
        else{
            break
        }
    }
    return min
}

const res = find(arr)
console.log(res);
