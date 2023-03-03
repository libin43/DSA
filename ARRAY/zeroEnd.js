const arr = [2,0,1,0,4,5,0]
for(i=0;i<arr.length;i++){
    if(arr[i] == 0 ){
        let temp = arr[i]
        console.log(i);
        for(j=i;j<arr.length-1;j++){
            if(arr[j]==0){
                
            }
            arr[j] = arr[j+1]
        }
        arr[arr.length-1] = temp
    }
}

console.log(arr);