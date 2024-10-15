//using kadane's algo
function maxSumSubArray(nums){
    let currSum = 0
    let maxSum = -Infinity
    for(let i=0;i<nums.length;i++){
        currSum += nums[i]
        if(maxSum<currSum){
            maxSum = currSum
        }
        if(currSum<0){
            currSum = 0
        }
    }
    return maxSum
}
const res = maxSumSubArray([-2,1,-3,4,-1,2,1,-5,4])
console.log(res);
