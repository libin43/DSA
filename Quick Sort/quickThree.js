function swap(arr,i,j){
    let temp = arr[i]
    arr[i] =arr[j]
    arr[j] = temp
}

function quickSort(arr){
 helper(arr,0,arr.length-1)
 return arr   
}

function helper(arr,startIdx,endIdx){
    if(startIdx>=endIdx)return
    let pivot = startIdx
    let leftIdx = startIdx+1
    let rightIdx = endIdx
    while(leftIdx<=rightIdx){
        if(arr[leftIdx]>arr[pivot] && arr[rightIdx]<arr[pivot]){
            swap(arr,rightIdx,leftIdx)
            leftIdx++
            rightIdx--
        }
        if(arr[leftIdx]<=arr[pivot]) leftIdx++
        if(arr[rightIdx]>=arr[pivot]) rightIdx--
    }
    swap(arr,pivot,rightIdx)
    helper(arr,startIdx,rightIdx)
    helper(arr,leftIdx,endIdx)
}

let arr = [3,5,1,5,8,9,3,4]
console.log(quickSort(arr))