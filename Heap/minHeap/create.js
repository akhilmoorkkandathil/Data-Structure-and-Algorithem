class minHeap{
    constructor(){
        this.data = [];
    }

    getParentIndex = (i) => Math.floor((i-1)/2);
    getLeftChildIndex = (i) => i*2+1;
    getRightChildIndex = (i) => i*2+2;

    swap(index1,index2){
        [[this.data[index1],this.data[index2]]=[this.data[index2],this.data[index1]]];
    }
    push(val){
        this.data[this.data.length] = val;
        this.heapifyUP();
    }
    heapifyUP(){
        let currentIndex = this.data.length-1;
        while(this.data[currentIndex]<this.data[this.getParentIndex(currentIndex)]){
            this.swap(currentIndex,this.getParentIndex(currentIndex))
            currentIndex = this.getParentIndex(currentIndex);
        }
    }
    poll(){
        const minValue = this.data[0];
        this.data[0] = this.data[this.data.length-1];
        this.data.length--
        this.heapifyDown();
        return minValue;

    }
    heapifyDown(){
        let currentIndex = 0;
        while(this.data[this.getLeftChildIndex(currentIndex)]){
            let biggestChildIndex = this.getLeftChildIndex(currentIndex);
            if(this.data[this.getRightChildIndex(currentIndex)] && this.data[this.getRightChildIndex(currentIndex)]<this.data[this.getLeftChildIndex(currentIndex)]){
                biggestChildIndex = this.getRightChildIndex(currentIndex);
            }
            if(this.data[currentIndex]>this.data[biggestChildIndex]){
                this.swap(currentIndex,biggestChildIndex)
                currentIndex = biggestChildIndex;
            }else{
                return;
            }
        }

    }

}

const myHeap = new minHeap();

myHeap.push(50)
myHeap.push(60)
myHeap.push(70)
myHeap.push(10)
myHeap.push(20)
myHeap.push(30)
myHeap.push(40)
// console.log(myHeap.data);
// myHeap.poll()
// console.log(myHeap.data.join(","));
console.log(myHeap.data);
// myHeap.poll()
// console.log(myHeap.data);
