function insertHeap(heap,element){
    heap.push(element)
    let index = heap.length -1
    while(index>0){
        let parentIndex = Math.floor((index-1)/2)
        if(heap[index]>heap[parentIndex]){
            [heap[index],heap[parentIndex]] = [heap[parentIndex],heap[index]]
            index = parentIndex
        }
        else{
            break
        }
    }
}

let heap = []
insertHeap(heap,1)
insertHeap(heap,4)
insertHeap(heap,2)
insertHeap(heap,8)
insertHeap(heap,7)
insertHeap(heap,3)
console.log(heap);