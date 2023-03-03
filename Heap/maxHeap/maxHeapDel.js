function delMaxHeap(heap){
    if(heap.length == 0){
        return null
    }
    const max = heap[0]
    const last = heap.pop()

    if(heap.length >0){ 
        heap[0] = last
        heapifyDown(heap,0)
    }
    return heap
}

function heapifyDown(heap,i){
    let leftChildIdx = 2*i +1
    let rightChildIdx = 2*i +2
    let max = i
    if(leftChildIdx && heap[leftChildIdx]>heap[max]){
        max = leftChildIdx
    }
    if(rightChildIdx && heap[rightChildIdx] >heap[max]){
        max = rightChildIdx
    }
    if(max!==i){
        [heap[i],heap[max]] = [heap[max],heap[i]]
        heapifyDown(heap,max)
    }
    return heap
}



var heap = [21,3,4,6,77,88,99,81]
  console.log(delMaxHeap(heap));