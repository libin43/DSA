function swap(arr,i, j){
    [arr[i], arr[j]] = [arr[j], arr[i]]
}

function quickSort(arr){
    helper(arr, 0, arr.length-1)
    return arr
}

function helper(arr, startIdx, endIdx) {
    if(startIdx >= endIdx) return
    let pivot = startIdx
    let left = startIdx+1
    let right = endIdx
    while(left<=right){
        if(arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
            swap(arr, left, right)
            left++
            right--
        }
        else if(arr[left]<= arr[pivot]){
            left++
        }
        else if(arr[right]>= arr[pivot]) {
            right--
        }
    }
    swap(arr, pivot, right)
    helper(arr, pivot, right-1)
    helper(arr, left, endIdx)
}

const res = quickSort([3, 6, 2, 8, 0 , 8, 4, 1, 5, 5, -30])
console.log(res)