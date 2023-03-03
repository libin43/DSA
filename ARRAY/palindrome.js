const array = [3,4,5,4,3]
function isPalindrome(arr){
    for(let i=0;i<arr.length/2;i++){
        if(arr[i]!=arr[arr.length-1-i]){
            return false
        }
    }
    return true
}

console.log(isPalindrome(array));