function heapInsertion(heap,element){
    heap.push(element)
    let index = heap.length -1
    while(index>0){
        let parentIndex = Math.floor((index-1)/2)
        if(heap[parentIndex]>heap[index]){
            [heap[index],heap[parentIndex]]=[heap[parentIndex],heap[index]]
            index = parentIndex
        }
        else{
            break
        }
    }
}

const heap = []
heapInsertion(heap,1)
heapInsertion(heap,4)
heapInsertion(heap,2)
heapInsertion(heap,8)
heapInsertion(heap,7)
heapInsertion(heap,3)
console.log(heap);