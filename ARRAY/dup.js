const arr = [2,3,5,2,3,6,4,2,4]
// let hashMap = {}
// function dup (arr){
//     for(let i =0;i<arr.length;i++){
//         hashMap[arr[i]] =  hashMap[arr[i]] ? hashMap[arr[i]]+1 :1
//         console.log(hashMap)
       
//     }

// }

// console.log(dup(arr));

function findDuplicates(arr) {
    const map = new Map()
    for(let i=0; i< arr.length; i++) {
        if(map.has(arr[i])){
            map.set(arr[i], map.get(arr[i])+1)
        } else {
            map.set(arr[i],1)
        }
    }
    console.log(map);
    
}

const res = findDuplicates(arr)