function minHeapInsert(heap,element){
    heap.push(element)
    let index = heap.length-1
    while(index>0){
        let parentIndex = Math.floor((index-1)/2)
        if(heap[parentIndex]>heap[index]){
            [heap[parentIndex],heap[index]] = [heap[index],heap[parentIndex]]
            index = parentIndex
        }
        else{
            break
        }
    }
}

const heap =[]
minHeapInsert(heap,100)
minHeapInsert(heap,30)
minHeapInsert(heap,10)  
minHeapInsert(heap,40)
minHeapInsert(heap,20)
minHeapInsert(heap,50)
minHeapInsert(heap,80)

console.log(heap);
