// function heapSort(heap,element){
//     heap.push(element)
//     let index = heap.length-1
//     while(index>0){
//         let parentIdx = Math.floor((index-1)/2)
//         if(heap[index]<heap[parentIdx]){
//             [heap[index],heap[parentIdx]] = [heap[parentIdx],heap[index]]
//             index = parentIdx
//         }
//         else{
//             break
//         }
//     }
// }

// const heap = []
// heapSort(heap,2)
// heapSort(heap,3)
// heapSort(heap,7)
// heapSort(heap,4)
// heapSort(heap,8)
// heapSort(heap,1)
// console.log(heap);


const heap = []

function insertMinHeap(elem) {
    heap.push(elem)
    let index = heap.length-1
    while(index >0) {
        let parentIdx = Math.floor((index-1)/2)
        if(heap[index]<heap[parentIdx]){
            [heap[index], heap[parentIdx]] = [heap[parentIdx], heap[index]]
            index = parentIdx
        }
        else{
            break
        }
  
    }
}

const input = [5, 10,2, 1, -80, 0, 3]

for(let i=0;i<input.length;i++){
    insertMinHeap(input[i])
}
console.log(heap)

