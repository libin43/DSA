var arr = [3,6,2,8,4,1,5]
var n = arr.length
for(let i=0;i<n;i++){
    for(let j = 0 ;j<n-i; j++){
        if(arr[j]>arr[j+1]){
            [arr[j],arr[j+1]] =  [arr[j+1],arr[j]]
        }
    }

}

console.log(arr);