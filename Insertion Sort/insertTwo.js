let arr = [7,4,7,2,1,9,3,5]

function insert(arr){
    for(let i=0;i<arr.length;i++){
        let current = arr[i]
        let j= i-1
        while(j>=0 && arr[j]>current){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = current
    }

    console.log(arr);
}

insert(arr);