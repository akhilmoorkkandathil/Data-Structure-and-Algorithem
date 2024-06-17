class maxHeap{
    constructor(){
        this.data = [];
    }
    swap(index1,index2){
        [[this.data[index1],this.data[index2]]=[this.data[index2],this.data[index1]]];
    }
    parentIndex =(i)=> Math.floor((i-1)/2)
    addToMaxHeap(val){
        this.data[this.data.length] = val;
        this.heapifyUP();
    }
    heapifyUP(){
        let currentIndex = this.data.length-1;
        
        while(this.data[this.parentIndex(currentIndex)]<this.data[currentIndex]){
            this.swap(currentIndex,this.parentIndex(currentIndex))
            currentIndex = this.parentIndex(currentIndex);
        }
    }
    getMaxValue(){
        const maxValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length--
        this.heapifyDown(this.data,0,this.data.length-1);
        return maxValue;

    }
    heapifyDown(heap, i, heapSize) {
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
        this.heapifyDown(heap, largest, heapSize);
      }
    }
    createHeap(array) {
        let heap = [...array];
        // Starting from the last non-leaf node, heapifyDown each node
        for (let i = Math.floor(heap.length / 2)-1; i >= 0; i--) {
          this.heapifyDown(heap, i, heap.length);
        }
        return heap;
      }
    
      heapSort(array) {
        let heap = this.createHeap(array);
        console.log(heap);
        let heapSize = heap.length;
        
        while (heapSize > 1) {
            [heap[0], heap[heapSize - 1]] = [heap[heapSize - 1], heap[0]];
            heapSize--;
            this.heapifyDown(heap, 0, heapSize);
        }
    
        return heap;
      }

}

const myHeap = new maxHeap();

myHeap.addToMaxHeap(50)
myHeap.addToMaxHeap(60)
myHeap.addToMaxHeap(70)
myHeap.addToMaxHeap(10)
myHeap.addToMaxHeap(20)
myHeap.addToMaxHeap(30)
myHeap.addToMaxHeap(40)
 console.log(myHeap.data);
 console.log(myHeap.getMaxValue());
 console.log(myHeap.getMaxValue());
 console.log(myHeap.getMaxValue());
 console.log(myHeap.getMaxValue());
 console.log(myHeap.getMaxValue());
 console.log(myHeap.getMaxValue());
 console.log(myHeap.getMaxValue());
//  console.log(myHeap.heapSort([60,40,20,40,60,10,20,50]));

//console.log( myHeap.getMaxValue());
 //console.log(myHeap.data);
//console.log(myHeap.createHeap([10,40,30,60,20,70,80,15,90,5,100]));
//console.log(myHeap.heapSort([10,40,30,60,20,70,80,15,90,5,100]));

