class maxHeap{
    constructor(){
        this.data = [];
    }

    getParentIndex = (i) => Math.floor((i-1)/2);
    getLeftChildIndex = (i) => i*2+1;
    getRightChildIndex = (i) => i*2+2;

    swap(index1,index2){
        [[this.data[index1],this.data[index2]]=[this.data[index2],this.data[index1]]];
    }
    addToMaxHeap(val){
        this.data[this.data.length] = val;
        this.heapifyUP();
    }
    heapifyUP(){
        let currentIndex = this.data.length-1;
        while(this.data[this.getParentIndex(currentIndex)]<this.data[currentIndex]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    getMaxValue(){
        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length--
        this.heapifyDown();
        return maxValue;

    }
    heapifyDown(){
        let currentIndex = 0;
        while(this.data[this.getLeftChildIndex(currentIndex)]){
            let biggestChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.data[this.getRightChildIndex(currentIndex)] && this.data[this.getRightChildIndex(currentIndex)]>this.data[this.getLeftChildIndex(currentIndex)]){
                biggestChildIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.data[currentIndex]<this.data[biggestChildIndex]){
                this.swap(currentIndex,biggestChildIndex)
                currentIndex = biggestChildIndex;
            }else{
                return;
            }
        }

    }
    createHeap(array) {
        // Create a heap from the input array
        let heap = [...array];
        // Starting from the last non-leaf node, heapify each node
        for (let i = Math.floor(heap.length / 2)-1; i >= 0; i--) {
          this.heapify(heap, i, heap.length);
        }
        return heap;
      }
      heapify(heap, i, heapSize) {
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
          this.heapify(heap, largest, heapSize);
        }
      }
      heapSort(array) {
        let heap = this.createHeap(array);
        let sortedArray = [];
        while (heap.length > 0) {
          // Remove the maximum element from the heap and add it to the sorted array
          sortedArray.push(heap.shift());
          // Re-heapify the remaining elements
          heap = this.createHeap(heap);
        }
        return sortedArray;
      }

}

const myHeap = new maxHeap();

// myHeap.addToMaxHeap(50)
// myHeap.addToMaxHeap(60)
// myHeap.addToMaxHeap(70)
// myHeap.addToMaxHeap(10)
// myHeap.addToMaxHeap(20)
// myHeap.addToMaxHeap(30)
// myHeap.addToMaxHeap(40)
// console.log(myHeap.data);
// myHeap.getMaxValue()
// console.log(myHeap.data);
console.log(myHeap.createHeap([10,40,30,60,20,70,80,15,90,5,100]));
console.log(myHeap.heapSort([10,40,30,60,20,70,80,15,90,5,100]));

