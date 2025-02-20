const arr = [5, -1, 2, -30, 0 , 3, 5]
const heap = []
const heapSort = []
function minHeap(elem) {
    heap.push(elem)
    let index = heap.length-1
    while(index>0) {
        let parentIdx = Math.floor((index-1)/2)
        if(heap[parentIdx]> heap[index]){
            [heap[parentIdx], heap[index]] = [heap[index], heap[parentIdx]]
            index = parentIdx
        } else {
            break
        }
    }
}


function remove(){
    let index = heap.length-1
    const elem = heap[0]
    heap[0] = heap[index]
    heap.pop()
    index = index-1
    heapifyDown(0)
}

function heapifyDown(index) {
    if(index >= heap.length-1) return
    let leftChildIdx = 2*index+1
    let rightChildIdx = 2*index+2
    let minIdx = index
    
    // Compare with left child
    if (leftChildIdx < heap.length && heap[leftChildIdx] < heap[minIdx]) {
        minIdx = leftChildIdx;
    }

    if(rightChildIdx<heap.length && heap[rightChildIdx]<heap[minIdx]){
        minIdx = rightChildIdx
    }
    if(minIdx!=index){
        [heap[index], heap[minIdx]] = [heap[minIdx], heap[index]]
        heapifyDown(minIdx)
    }
}

for(let i =0 ;i<arr.length;i++) {
    minHeap(arr[i])
}

const rmv = remove()
heapSort.push(rmv)

// const rv = remove()

console.log(heap)