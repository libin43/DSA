var array = [3,2,4]
var target = 6

function twoSum(arr,target){
    let map ={}
    for(let i=0;i<arr.length;i++){
        let match = target - arr[i]
        if(match in map){
            return[ map[match] , i]
        }
        map[arr[i]] =i
        console.log(map);
    }
}

console.log(twoSum(array,target));