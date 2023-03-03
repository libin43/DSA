const arr = [2,1,7,4,9,5]
let temp = null
for(let i=0;i<arr.length/2;i++){
    temp = arr[i]
    arr[i] = arr[arr.length-1-i]
    arr[arr.length-1-i] = temp
}

console.log(arr);