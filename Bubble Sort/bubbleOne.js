const arr = [2,1,4,9,3,6,9,100,22,5,7]
let n = arr.length

for(let i =n;i>0;i--){
    for(let j=0;j<=i;j++){
       
        if(arr[j] > arr[j+1] && arr[j+1]!=undefined){
            console.log(`if greater ${arr[j]}`);
            let temp = arr[j]
            arr[j] =arr[j+1]
            arr[j+1] = temp    
        }  
    }
}

console.log(arr);