const arr = [3,6,2,8,4,1,5] 

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function quickSort(arr){
    helper(arr,0,arr.length-1)
    return arr
}

function helper(arr,startIdx,endIdx){
    if(startIdx>=endIdx) return
    let pivot = startIdx
    let leftIdx = startIdx+1
    let rightIdx = endIdx

    while(leftIdx <= rightIdx){
        if(arr[leftIdx]>arr[pivot] && arr[rightIdx]<arr[pivot]){
            swap(arr,leftIdx,rightIdx)
            leftIdx++
            rightIdx--
        }
        if(arr[leftIdx]<arr[pivot]) leftIdx++
        if(arr[rightIdx]>arr[pivot]) rightIdx--
    }

    swap(arr,rightIdx,pivot)
    helper(arr,startIdx,rightIdx)
    helper(arr,leftIdx,endIdx)

}

console.log(quickSort([3,6,2,8,4,1,5]));