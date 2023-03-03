const a = [4,2,5,6,1,8]
let n = a.length
for(let i=0;i<n;i++){
    for(let j=0;j<n-i;j++){
        if(a[j]>a[j+1]){
            [a[j],a[j+1]] = [a[j+1],a[j]]
        }
    }
}
console.log(a);