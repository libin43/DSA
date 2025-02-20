const str =  'a1b2c3'
let alpha = ''
let res = ''

for(let char of str){
    // console.log(char)
    const nums = parseInt(char)
    // console.log(nums)
    if(Number.isNaN(nums)){
        // console.log('hittin',char)
        alpha += char
        res+=char
    }
    else if(!Number.isNaN(nums)){
        let alphaLastIndex = alpha.length-1
        for(let i=0;i<char-1;i++){
            let repeatChar = alpha[alphaLastIndex]
            res+=repeatChar
        }
    }
}

// console.log(alpha)
console.log(res)

console.log(isNaN('NaN'))
console.log(Number.isNaN(NaN))