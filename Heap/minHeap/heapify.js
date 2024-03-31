function createHeap(array) {
    // Create a heap from the input array
    let heap = [...array];
    // Starting from the last non-leaf node, heapify each node
    for (let i = Math.floor(heap.length / 2); i >= 0; i--) {
      heapify(heap, i, heap.length);
    }
    return heap;
  }
  
  function heapify(heap, i, heapSize) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;
    let largest = i;
    if (left < heapSize && heap[left] > heap[largest]) {
      largest = left;
    }
    if (right < heapSize && heap[right] > heap[largest]) {
      largest = right;
    }
    if (largest !== i) {
      [heap[i], heap[largest]] = [heap[largest], heap[i]];
      heapify(heap, largest, heapSize);
    }
  }
  
  let array = [3, 5, 1, 4, 2];
  let heap = createHeap(array);
  // heap is now [5, 4, 2, 3, 1]
  console.log(heap);