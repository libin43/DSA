const nums = [2, -1, 1, 10, -30, 8, 9, 6, 0]

function bubbleSort(nums) {
    for(let i=0; i< nums.length; i++){
        for(let j=0; j< nums.length -i -1; j++) {
            if(nums[j] > nums[j+1]){
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
            }
        }
    }
    return nums
}

const res = bubbleSort(nums)
console.log(res);
