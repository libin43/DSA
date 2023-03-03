function deleteMinHeapElement(heap) {
    if (heap.length === 0) {
      return null;
    }
  
    const min = heap[0];
    const last = heap.pop();
  
    if (heap.length > 0) {
      heap[0] = last;
      heapifyDown(heap, 0);
    }
  
    return heap;
  }
  
  function heapifyDown(heap, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let min = i;
  
    if (left < heap.length && heap[left] < heap[min]) {
      min = left;
    }
  
    if (right < heap.length && heap[right] < heap[min]) {
      min = right;
    }
  
    if (min !== i) {
      [heap[i], heap[min]] = [heap[min], heap[i]];
      heapifyDown(heap, min);
    }
    return heap;
  }
   
  
  var heap = [21,3,4,6,77,88,99,81]
  console.log(deleteMinHeapElement(heap));