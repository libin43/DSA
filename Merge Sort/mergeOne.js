function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let middleIdx = Math.floor(arr.length / 2);
    let firstHalf = arr.slice(0, middleIdx);
    let secondHalf = arr.slice(middleIdx);
    return join(mergeSort(firstHalf), mergeSort(secondHalf));
}
function join(firstHalf, secondHalf) {
    console.log(firstHalf,'fcalls');
    console.log(secondHalf,'scalls');
    let result = [], i = 0, j = 0;
    while (i < firstHalf.length && j < secondHalf.length) {
        if (firstHalf[i] <= secondHalf[j]) result.push(firstHalf[i++])
        else result.push(secondHalf[j++])
    }
    return [...result, ...firstHalf.slice(i), ...secondHalf.slice(j)]
}
let arr = [3,6,2,8,4,1,5]
// let arr = [5,4,3,2,1] 
console.log(mergeSort(arr));