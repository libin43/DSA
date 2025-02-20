function quickSort(arr){
    helper(arr, 0, arr.length-1)
    return arr
 }
 
 function helper(arr, startIdx, endIdx){
     if(startIdx>=endIdx) return
     let pivot = startIdx
     let leftIdx = startIdx+1
     let rightIdx = endIdx
     while(leftIdx<=rightIdx){
         if(arr[leftIdx]>arr[pivot] && arr[rightIdx]<arr[pivot]){
             [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]]
             leftIdx++
             rightIdx--
         } else if(arr[leftIdx]<= arr[pivot]){
             leftIdx++
         }else if(arr[rightIdx]>=arr[pivot]){
             rightIdx--
         }
     }
     [arr[pivot], arr[rightIdx]] = [arr[rightIdx], arr[pivot]]
     helper(arr, startIdx, rightIdx-1)
     helper(arr, leftIdx, endIdx)
 }

const res = quickSort([3, 6, 2, 8, 0 , 8, 4, 1, 5, 5, -30])
console.log(res)