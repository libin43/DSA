function mergeSort(arr){
    if(arr.length<=1) return arr
    let middleIdx = Math.floor(arr.length/2)
    let fh = arr.slice(0, middleIdx)
    let sh = arr.slice(middleIdx)
    
    let first = mergeSort(fh)
    console.log(first, 'first')
    let second = mergeSort(sh)
        console.log(second, 'second') 
        return sortAndJoin(first, second)
}

function sortAndJoin(first, second) {
    let pointer1 =0
    let pointer2 = 0
    let res = []
    while(pointer1 < first.length && pointer2 < second.length){
        if(first[pointer1]<second[pointer2]){
            res.push(first[pointer1])
            pointer1++
        } else {
            res.push(second[pointer2])
            pointer2++
        }
    }
   return res.concat(first.slice(pointer1)).concat(second.slice(pointer2))


}

const res = mergeSort([3, 9, 32, 19, 4, 6, 8, 9])

console.log(res, 'response');
