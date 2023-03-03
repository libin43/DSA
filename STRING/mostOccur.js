let stR = 'Hello World';

// function mostOccur(str){
//     let map = {}
//     str.split("").forEach(element => {
//         map[element] = map[element]? map[element]+1:1

//     });
//     console.log(map)

// }

// mostOccur(stR)

function mostOccur(str) {
    let hashTable = {}
    let max = 0
    let val = ''
    for (let i = 0; i < str.length; i++) {
        console.log(str[i]);
        hashTable[str[i]] = hashTable[str[i]] ? hashTable[str[i]] + 1 : 1
        console.log( hashTable[str[i]]);
        if(max < hashTable[str[i]]){
            max = hashTable[str[i]]
            val = str[i]
            console.log(max,'hai');
        }
        
    }
    console.log(hashTable);
    console.log(max);
    console.log(val);
}

mostOccur(stR)