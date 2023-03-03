const arr = [5,3,4,3,5,1]
var hash =[]
var repeat = 0 
var minIdx = arr.length+1

for(i=0;i<arr.length;i++){
    hash.push(-1)
}

for(i=0;i<arr.length;i++){
    if(hash[arr[i]]==-1){
        hash[arr[i]] = i
    }
    else{
        if(minIdx>hash[arr[i]]){
            minIdx = hash[arr[i]]
            repeat = arr[minIdx]
        }
    }
}

console.log('first repeating element is :',repeat);