const a = [4,2,18,5,6,12,8,1]
let n = a.length
for(let i=0;i<n;i++){
    for(let j=0;j<n-i-1;j++){
        if(a[j]>a[j+1]){
            [a[j],a[j+1]] = [a[j+1],a[j]]
        }
    }
}
console.log(a);