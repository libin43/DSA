const arr =[4,2,5,3,1,8]
const target =9
var sum =0;
var left = 0
var right = -1

while(sum != target && right<arr.length){
    if(sum<target){
        right++
        sum+=arr[right]
        
    }else if(sum>target){
        sum = sum-arr[left]
        left++
    }
   
}
console.log(left,right);
