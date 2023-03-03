function delMinHeap(heap){
    const min = heap[0]
    const last = heap.pop()

    if(heap.length>0){
        heap[0] = last
        heapifyDown(heap,0)
    }
    return heap
}

function heapifyDown(heap,i){
    let leftChildIdx = 2 * i + 1
    let rightChildIdx = 2 * i + 2
    let min = i
    if(leftChildIdx && heap[leftChildIdx]<heap[min]){
        min = leftChildIdx
    }
    if(rightChildIdx && heap[rightChildIdx]<heap[min]){
        min = rightChildIdx
    }
    if(min!=i){
          [heap[i], heap[min]] = [heap[min], heap[i]];
          heapifyDown(heap,min)
    }
    return heap
}

var heap = [21,3,4,6,77,88,99,81]

console.log(delMinHeap(heap));
