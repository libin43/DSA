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
    let pivotIdx = startIdx
    let leftIdx = startIdx+1
    let rightIdx = endIdx
    while(leftIdx<=rightIdx){
        if(arr[leftIdx]>arr[pivotIdx] && arr[rightIdx]<arr[pivotIdx]){
            swap(arr,leftIdx,rightIdx)
            leftIdx++;
            rightIdx--;
        }
        if(arr[leftIdx]<=arr[pivotIdx]) leftIdx++;
        if(arr[rightIdx]>=arr[pivotIdx]) rightIdx--;
    }
    swap(arr,rightIdx,pivotIdx)
    helper(arr,startIdx,rightIdx)
    helper(arr,leftIdx,endIdx)
}
let arr =[3,2,4,1]
console.log(quickSort(arr));