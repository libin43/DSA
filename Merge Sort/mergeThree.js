const arr = [40,10,30,2,15]

function mergeSort(arr){
    if(arr.length<=1) return arr
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle)
    let right = arr.slice(middle)
    left = mergeSort(left)
    right = mergeSort (right)
    return merge(left,right)
}

function merge(left,right){
    let result = []
    let leftIdx = 0
    let rightIdx = 0
    while(leftIdx<left.length && rightIdx<right.length){
        if(left[leftIdx]<right[rightIdx]){
            result.push(left[leftIdx])
            leftIdx++
        }
        else{
            result.push(right[rightIdx])
            rightIdx++
        }
    }
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx))
}

console.log(mergeSort(arr));