const arr = [5,6,7,9,2,3,10]
let largest = 0
let k = 3

for(i=0;i<arr.length;i++){
    if(arr[i]>largest){
        largest = arr[i]
    }
}

console.log(largest);
