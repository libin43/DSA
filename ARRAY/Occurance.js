const arr = [1,5,3,4,3,5,1]
const hash = []
var minIdx = arr.length+1
var repeat =0

for(let i=0;i<arr.length;i++){
    hash[i]=-1
}

for(i=0;i<arr.length;i++){
   if(hash[arr[i]]==-1){
    hash[arr[i]] = i
   }
   else{
    if(minIdx>hash[arr[i]]){
        minIdx = hash[arr[i]]
        repeat = arr[i]
    }
    console.log(minIdx)
  
   }
}
console.log('Repeat:',arr[minIdx]);