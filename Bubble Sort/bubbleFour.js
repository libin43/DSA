const arr = [4,2,5,6,1,8]
let n = arr.length

for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
}

console.log(arr);