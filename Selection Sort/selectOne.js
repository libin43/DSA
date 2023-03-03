const arr = [3,6,2,8,4,1,5]

for(let i =0; i<arr.length; i++){
    let smallest = i
    for(var j=i+1;j<arr.length;j++){
        if(arr[smallest]>arr[j]){
            smallest = j
        }
    }
    let temp = arr[i]
    arr[i] = arr[smallest]
    arr[smallest] = temp
}   

console.log(arr);