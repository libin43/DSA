var nums = [3,2,4]
var target = 6
var matchMap ={}
find(nums,target)
function find(nums,target){
    for(i=0;i<nums.length;i++){
        let match = target - nums[i]
        if(match in matchMap){
           console.log(matchMap[match],i,'hai');
        }
        matchMap[nums[i]] = i
    }
    console.log(matchMap)
}
// var match = 2
// var map = {'2':1}


// if(match in map){
//     console.log(map[match],'hai');
// } 