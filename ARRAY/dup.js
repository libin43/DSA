const arr = [2,3,5,2,3,6,4,2]
let hashMap = {}
const duplicate =[]
function dup (arr){
    for(let i =0;i<arr.length;i++){
        hashMap[arr[i]] =  hashMap[arr[i]] ? hashMap[arr[i]]+1 :1
        console.log(hashMap)
       
    }

}

console.log(dup(arr));