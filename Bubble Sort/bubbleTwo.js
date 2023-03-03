const arr = [3,6,2,88,4,10,5]
let n = arr.length

for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){ 
        if(arr[j] > arr[j+1]){
            [ arr[j],arr[j+1]] = [ arr[j+1] , arr[j]]
        }
    }
    n-i
}

console.log(arr);