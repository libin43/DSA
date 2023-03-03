let hai = 'hello'
function manipulate(hai){
    let haiNew = hai[hai.length-1]
    for(let i=0;i<hai.length-1;i++){
        haiNew +=hai[i]
        
        
    }
    return haiNew
}

console.log(manipulate(hai));