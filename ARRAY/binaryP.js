const arr = [1,2,3,4,5,6,7,8,9,10]


function BinarySearch(arr, target) {
    let startIdx = 0
    let endIdx = arr.length-1
    while(startIdx<=endIdx){
        let middleIdx = startIdx + (endIdx - startIdx)/2
        middleIdx = Math.floor(middleIdx)
        if(arr[middleIdx] === target) {
            return arr[middleIdx]
        }
        else if(arr[middleIdx]< target) {
            startIdx = middleIdx +1
        }
        else if(arr[middleIdx]> target) {
            endIdx = middleIdx -1
        }
        else {
            return `Not found`
        }

    }
}

const res = BinarySearch(arr, 10)
console.log(res);
