const str = 'MALAYALAM'

function isPalindrome(stR){
    let left = 0
    let right = stR.length-1
    while(left<right){
        if(stR[left]!=stR[right]){
            return false;
        }
        left++;
        right--;
    }
    return true 
}

isPalindrome(str)

console.log(isPalindrome(str))