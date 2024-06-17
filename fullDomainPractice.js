//=========================== SINGLY LINKED LIST ===========================


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class LinkeList{
//     constructor(){
//         this.head = null;
//         this.length = null;
//     }

//     addVal(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.length++;
//             return true;
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr = curr.next
//         }
//         curr.next = newNode;
//         this.length++;
//         return true;

//     }

//     print(){
//         let curr = this.head;
//         let arr = [];
//         while(curr){
//             arr.push(curr.val)
//             curr = curr.next;
//         }
//         return arr;
//     }

//     addFirst(val){
//         const newNode = new Node(val);
//         const currHead = this.head;
//         this.head = newNode;
//         newNode.next = currHead;
//         this.length++;
//         return true
//     }

//     delete(val){
//         if(this.length===0) return false
//         if(this.head.val === val && this.length==1){
//             this.head = null;
//             this.length =0;
//             return true
//         }
//         let curr = this.head;
//         let prev = this.head;
//         if(this.head.val === val && curr.next){
//             this.head = this.head.next;
//             prev = curr;
//             this.length--
//             return true
//         }

//         while(curr  && curr.next){
//             if(curr.val === val){
//                 prev.next = curr.next;
//                 this.length--;
//                 return true
//             }
//             prev = curr;
//             curr = curr.next;

//         }
//         if(curr.val === val){
//             prev.next = null;
//             this.length--
//             return true
//         }

//     }

//     getNodeAtIndex(index){
//         if(index<0 || index>=this.length) return false;
//         let counter = 0;
//         let curr = this.head;
//         while(counter!==index){
//             curr = curr.next;
//             counter++
//         }
//         return curr;
//     }
//     deleteNodeAtIndex(index){
//         if(index<0 || index>=this.length) return false;
//         const prevNode = this.getNodeAtIndex(index-1);
//         const deleteNode = this.getNodeAtIndex(index)
//         prevNode.next = deleteNode.next;
//         this.length--;
//         return true
        
//     }
//     arrayIntoLinkedList(arr){
//         for(let i=0;i<arr.length;i++){
//             this.addVal(arr[i])
//         }
//     }
//     InsertAfterIndex(val,index){
//         const newNode = new Node(val);
//         if(index<=0 ||index>this.length) return false
//         const currNode = this.getNodeAtIndex(index);
//         const nextNode = currNode.next;
//         currNode.next = newNode;
//         newNode.next = nextNode;
//         this.length++;
//         return true
//     }
//     InsertBeforeIndex(val,index){
//         if(index<0 || index>=this.length) return false;
        
//         const newNode = new Node(val);
//         if(index === 0 && this.length ==0){
//             const currHead = this.head;
//             this.head = newNode;
//             newNode.next = currHead;
//             this.length++
//             return true
//         }
//         if(index == 0 && curr.next) {
//             currHead = this.head;
//             this.head = newNode;
//             newNode.next = currHead;
//             this.length++;
//             return true;
//         }
//         let count = 0;
//         let curr = this.head;
//         while(count!==index-1){
//             curr = curr.next;
//             count++
//         }
//         const nextNode = curr.next;
//         curr.next = newNode
//         newNode.next = nextNode;
//         this.length++;
//         return true;
//     }

//     reverse(){
//         let curr = this.head;
//         let prev = null;
//         let nextNode;
//         while(curr){
//             nextNode = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextNode;
//         }
//         this.head = prev;
//     }

//     removeDuplicate(){
//         if (this.length <= 1) return false;
//         let current = this.head;
//         while (current && current.next) {
//             let runner = current;
//             while (runner.next) {
//                 if (current.val === runner.next.val) {
//                     runner.next = runner.next.next;
//                     this.length--;
//                 } else {
//                     runner = runner.next;
//                 }
//             }
//             current = current.next;
//         }
//         return true; 
//     }
// }

// const MyLinkedList = new LinkeList();
// MyLinkedList.addVal(10)
// MyLinkedList.addVal(20)
// MyLinkedList.addVal(30)
// MyLinkedList.addFirst(50)
//MyLinkedList.delete(30)
// MyLinkedList.arrayIntoLinkedList([1,1,2,2,3,4,5,6,6,7,8,9,9]);
//MyLinkedList.InsertBeforeIndex(10,1);
// MyLinkedList.reverse()
// MyLinkedList.removeDuplicate()
// console.log(MyLinkedList.print());
// MyLinkedList.deleteNodeAtIndex(2)
// console.log(MyLinkedList.print());
//console.log(MyLinkedList.getNodeAtIndex(0));



//=========================== BINARY SEARCH ===========================

// function BinarySearch(arr,target){
//     let left = 0,right = arr.length-1;
//     while(left<=right){
//         const middle = Math.floor((left+right)/2);
//         if(arr[middle]===target) return middle;
//         if(target<arr[middle]) right = middle-1;
//         else left = middle+1;
//     }
//     return -1;
// }

// console.log(BinarySearch([0,1,2,3,4,5,6,7,8,9],9));


//=========================== LINEAR SEARCH ===========================

// function linerSearch(arr,target){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==target) return i
//     }
//     return -1
// } 

// console.log(linerSearch([2,4,3,5,7,4,8,5],5));


//=========================== RECURSION ===========================

//1:Factorial

// function factorial(n){
//     if(n == 0) return 1;
//     return n * factorial(n-1);
// }

// console.log(factorial(5));

//2:Fibannci

// function fibanocii(n){
//     if(n<2) return n;
//     return fibanocii(n-1)+fibanocii(n-2);
// }

// console.log(fibanocii(6));


//3:Check palliandrom

// function checkPalliandrom(str){
//     if(str.length<2) return true;
//     if(str[0]==str[str.length-1]) return checkPalliandrom(str.slice(1,str.length-1))
//     return false
// }

// console.log(checkPalliandrom("MALdLAM"));


//4: Reverse String

// function reverseString(str){
//     if(str.length<1) return str;
//     return reverseString(str.slice(1,str.length))+str[0]
// }

// console.log(reverseString("Helllo"));



//5:Sum of natural numbers

// function sumOfNaturalNumbers(n){
//     if(n===1) return 1;
//     return n+sumOfNaturalNumbers(n-1)
// }


// console.log(sumOfNaturalNumbers(10));


//  <=========================== SORTING ===========================>

//  ========= 1: Bubble Sort =========

// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false;
//         for (let i = 0; i < arr.length; i++) {
//             if(arr[i+1]<arr[i]){
//                 [arr[i],arr[i+1]]=[arr[i+1],arr[i]];
//                 swapped = true
//             }
            
//         }
//     }while(swapped)
//     return arr
// }

// console.log(bubbleSort([4,3,6,8,4,3,5,8,9]));


//  ========= 2:Insertion sort =========

// function InsertionSort(arr){
//     for(let i=1;i<arr.length;i++){
//         let NTI = arr[i];
//         let j = i-1;
//         while(j>=0 && arr[j]>NTI){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1]=NTI;
//     }
//     return arr;
// }

// console.log(InsertionSort([5,3,6,8,7,9,1,4,3,2]));


//3: ========= Selection Sort =========

// function SelectionSort(array){
//     for (let i = 0; i < array.length; i++) {
//         minIndex = i;
//         for (let j = i+1; j < array.length; j++) {
//             if(array[j]<array[minIndex]) minIndex = j
            
//         }
//         [array[i],array[minIndex]]=[array[minIndex],array[i]];
//     }
//     return array
// }

// console.log(SelectionSort([3,5,7,9,7,5,8,4,2,1,3]));


//4:========= Quick Sort =========

// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivot = arr[0],left = [],right = [];
//     arr.splice(0,1);
//     for(let i = 0;i<arr.length;i++){
//         if(arr[i]<pivot) left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log( quickSort([4,7,3,6,1,9,0,7,5]));

//  ========= 5: Merge Sort =========

// function mergeSort(arr){
//     if(arr.length<2) return arr;
//     let middle = Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sort = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]) sort.push(left.shift());
//         else sort.push(right.shift())
//     }
//     return [...sort,...left,...right]
// }

// console.log(mergeSort([1,2,3,4,5,9,7,8,6,0]));



//=========================== STACK ===========================

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null;
//         this.length = 0
//     }
//     push(val){
//         const newNode =  new Node(val);
//         if(!this.top){
//             this.top = newNode;
//             this.length++;
//             return true;
//         }
//         newNode.next = this.top;
//         this.top = newNode;
//         this.length++;
//         return true;
//     }
//     pop(){
//         if(!this.length) return "Empty stack";
//         let ref = this.top;
//         this.top = this.top.next;
//         ref.next = null;
//         this.length--;
//         return true
//     }

//     print(){
//         if(!this.length) return "Empty stack";
//         let curr = this.top;
//         while(curr){
//             console.log(curr.val);;
//             curr = curr.next;
//         }
//     }
// }


// const myStack = new Stack();
// myStack.push(10)
// myStack.push(50)
// myStack.push(30)
// myStack.push(80)
// myStack.pop();
// myStack.pop()
// myStack.print();


// ==== stack using queue ====


// class Queue{
//     constructor(){
//         this.pushStack = [];
//         this.popStack = [];
//     }

//     enqueue(val){
//         this.pushStack.push(val);
//         return
//     }
//     dequeue(){
//         if(!this.popStack.length){
//             while(this.pushStack.length){
//                 this.popStack.push(this.pushStack.pop())
//             }
//         }
//         return this.popStack.pop()
//     }
// }

// const myQueue = new Queue();
// myQueue.enqueue(10);
// myQueue.enqueue(20);
// myQueue.enqueue(30);
// myQueue.enqueue(40);
// myQueue.dequeue()




//=========================== QUEUE ===========================

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(){
//         this.first = null;
//         this.last = null;
//     }
//     enqueue(val){
//         const newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//             return true
//         }
//         this.last.next = newNode;
//         this.last = newNode;
//         return true;
//     }
//     dequeue(){
//         if(!this.last) return false;
//         let ref = this.first;
//         this.first = ref.next;
//         ref.next = null;
//         return ref;
        
//     }

//     print(){
//         let curr = this.first;
//         while(curr){
//             console.log(curr.val);
//             curr = curr.next;
//         }
//     }
// }

// const myQueue = new Queue();
// myQueue.enqueue(10);
// myQueue.enqueue(20);
// myQueue.enqueue(30);
// myQueue.enqueue(40);
// myQueue.dequeue()
// myQueue.print()
//console.log(myQueue.dequeue());


// ==== stack using queue ====



//=========================== Tree ===========================


// class Node {
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }

// class Tree{
//     constructor(){
//         this.root = null;
//     }
//     insert(val){
//         const newNode = new Node(val);
//         if(!this.root){
//             this.root = newNode;
//             return
//         }
//         this.insertNode(this.root,newNode);  
//     }
//     insertNode(root,newNode){
//         if(newNode.val<root.val){
//             if(!root.left){
//                 root.left = newNode;
//             }else{
//                 this.insertNode(root.left,newNode)
//             }
//         }else{
//             if(!root.right){
//                 root.right = newNode;
//             }else{
//                 this.insertNode(root.right,newNode)
//             }
//         }
//     }

//     min(root){
//         if(!root.left) return root.val;
//         return this.min(root.left);
//     }
//     max(root){
//         if(!root.right) return root.val;
//         return this.max(root.right);
//     }

//     delete(root,val){
//         if(!root) return false;
//         if(val<root.val){
//             root.left = this.delete(root.left,val);
//             return root
//         }else if(val>root.val){
//             root.right = this.delete(root.right,val);
//             return root
//         }else{
//             if(!root.left && !root.right) return null;
//             if(!root.left) return root.right;
//             if(!root.right) return root.left;
//             let tempNode = root.right;
//             while(tempNode.left){
//                 tempNode = tempNode.left
//             }
//             root.val = tempNode.val;
//             root.right = this.delete(root.right,tempNode.val)
//             return root

//         }
//     }
//     search(root,val){
//         if(!root){
//             return false;
//         }
//         else{
//             if(val===root.val){
//                 return true
//             }else if(val<root.val){
//                 return this.search(root.left,val)
//             }else{
//                 return this.search(root.right,val)
//             }
//         }
//     }

//     // DFS
//     //1:preOrder
//     preOrderTraversal(root){
//         if(!root) return false;
//         console.log(root.val);
//         if(root.left)this.preOrderTraversal(root.left);
//         if(root.right)this.preOrderTraversal(root.right);
//     }
//     //2:inorder
//     inOrderTraversal(root){
//         if(!root) return false;
//         if(root.left)this.preOrderTraversal(root.left);
//         console.log(root.val);
//         if(root.right)this.preOrderTraversal(root.right);
//     }
//     //3:postorder
//     postOrderTraversal(root){
//         if(!root) return false;
//         if(root.left)this.preOrderTraversal(root.left);
//         if(root.right)this.preOrderTraversal(root.right);
//         console.log(root.val);
//     }

//     //BFS
//     bfs(){
//         if(!this.root) return [];
//         let queue = [this.root];
//         let node;
//         let result = [];
//         while(queue.length){
//             node = queue.shift();
//             result.push(node.val);
//             if(node.left) queue.push(node.left);
//             if(node.right) queue.push(node.right)
//         }
//         return result
//     }
//     //inorder dfs
//     dfs(){
//         if(!this.root) return [];
//         let stack = [this.root];
//         let node;
//         let result = [];
//         while(stack.length){
//             node = stack.pop();
//             result.push(node.val)
//             if(node.right) stack.push(node.right)
//             if(node.left) stack.push(node.left)
//         } 
//         return result
//     }
// }

// const myTree = new Tree();
// myTree.insert(15);
// myTree.insert(12);
// myTree.insert(11);
// myTree.insert(13);
// myTree.insert(43);
// myTree.insert(30);
// myTree.insert(55);
// myTree.insert(20);
// myTree.insert(40);

// myTree.delete(myTree.root,43)
// console.log(myTree.search(myTree.root,80));
// console.log(myTree.min(myTree.root));
// console.log(myTree.max(myTree.root));
// myTree.postOrderTraversal(myTree.root)
// console.log(myTree.dfs());
// console.log(myTree.bfs());
// function* generator(){
//     yield 1;
//     yield 2;
//     yield 3;
// }

// let genObj = generator();
// console.log(genObj.next());
// console.log(genObj.next());

// console.log(typeof generator());
// console.log(typeof genObj);


// //=========================== max Heap ===========================


// class maxHeap{
//     constructor(){
//         this.heap = [];
//     }
//     parent(i){
//         return Math.floor(((i-1)/2));
//     }
//     swap(i1,i2){
//        [ this.heap[i1], this.heap[i2]]=[ this.heap[i2], this.heap[i1]];
//     }
//     add(val){
//         this.heap.push(val);
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let currIndex = this.heap.length-1;
//         while(this.heap[this.parent(currIndex)]<this.heap[currIndex]){
//             this.swap(currIndex,this.parent(currIndex));
//             currIndex = this.parent(currIndex);
//         }
//     }
//     print(){
//         console.log(this.heap);
//     }
//     getMax(){
//         const maxValue = this.heap[0];
//         this.heap.shift()
//         this.heap.unshift(this.heap.pop())
//         this.heapifyDown(this.heap,0,this.heap.length);
//         return maxValue;
//     }
//     heapifyDown(heap,i,heapSize){
//         let left = i*2+1;
//         let right = i*2+2;
//         let largest = i;
//         if(left<heapSize && heap[left]>heap[largest]){
//             largest = left
//         }
//         if(right<heapSize && heap[right]>heap[largest]){
//             largest = right
//         }
//         if(i!==largest){
//             this.swap(i,largest);
//             this.heapifyDown(heap,largest,heapSize)
//         }

//     }
// }

// const myHeap = new maxHeap();
// myHeap.add(30)
// myHeap.add(50)
// myHeap.add(10)
// myHeap.add(60)
// myHeap.add(80)
// myHeap.add(100)
// myHeap.add(8)
// myHeap.print()
// console.log(myHeap.getMax());
// console.log(myHeap.getMax());
// console.log(myHeap.getMax());
// console.log(myHeap.getMax());
// console.log(myHeap.getMax());
// console.log(myHeap.getMax());
// console.log(myHeap.getMax());


//=========================== min Heap ===========================


// class minHeap{
//     constructor(){
//         this.heap = [];
//     }
//     parent(i){
//         return Math.floor(((i-1)/2));
//     }
//     swap(i1,i2){
//        [ this.heap[i1], this.heap[i2]]=[ this.heap[i2], this.heap[i1]];
//     }
//     add(val){
//         this.heap.push(val);
//         this.heapifyUp()
//     }
//     heapifyUp(){
//         let currIndex = this.heap.length-1;
//         while(this.heap[currIndex]<this.heap[this.parent(currIndex)]){
//             this.swap(currIndex,this.parent(currIndex));
//             currIndex = this.parent(currIndex);
//         }
//     }
//     print(){
//         console.log(this.heap);
//     }
//     getMin(){
//         const maxValue = this.heap[0];
//         this.heap.shift()
//         this.heap.unshift(this.heap.pop())
//         this.heapifyDown(this.heap,0,this.heap.length);
//         return maxValue;
//     }
//     heapifyDown(heap,i,heapSize){
//         let left = i*2+1;
//         let right = i*2+2;
//         let largest = i;
//         if(left<heapSize && heap[left]<heap[largest]){
//             largest = left
//         }
//         if(right<heapSize && heap[right]<heap[largest]){
//             largest = right
//         }
//         if(i!==largest){
//             this.swap(i,largest);
//             this.heapifyDown(heap,largest,heapSize)
//         }

//     }
// }

// const myHeap = new minHeap();
// myHeap.add(30)
// myHeap.add(50)
// myHeap.add(10)
// myHeap.add(60)
// myHeap.add(80)
// myHeap.add(100)
// myHeap.add(8)
// myHeap.print()
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());
// console.log(myHeap.getMin());


//=========================== Heap Sort ===========================


// function heapSort(arr){
//     let heap = createHeap(arr);
//     let heapSize = arr.length;
//     while(heapSize){
//         [heap[0],heap[heapSize-1]]=[heap[heapSize-1],heap[0]];
//         heapSize--;
//         heapify(heap,0,heapSize)
//     }
//     return heap;
// }


// function createHeap(arr){
//     let heap = [...arr];
//     for (let i = Math.floor((arr.length/2)-1); i >=0; i--) {
//        heapify(heap,i,heap.length-1)
//     }
//     return heap
// }


// function heapify(heap,i,heapSize){
//     let left = i*2+1;
//     let right = i*2+2;
//     let largest = i;
//     if(left<heapSize && heap[left]>heap[largest]){
//         largest = left
//     }
//     if(right<heapSize && heap[right]>heap[largest]){
//         largest = right
//     }
//     if(i!==largest){
//         [heap[i],heap[largest]] = [heap[largest],heap[i]];
//         heapify(heap,largest,heapSize);
//     }
// }

// console.log(heapSort([3,6,8,4,9,4,0,5,1,2]));


//=========================== GRAPH ===========================

// class graph{
//     constructor(){
//         this.adjescencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjescencyList[vertex]){
//             this.adjescencyList[vertex] = new Set();
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjescencyList[vertex1]){
//             this.addVertex(vertex1)
//         }
//         if(!this.adjescencyList[vertex2]){
//             this.addVertex(vertex2)
//         }
//         this.adjescencyList[vertex1].add(vertex2);
//         this.adjescencyList[vertex2].add(vertex1)
//     }
//     display(){
//         for( let vertex in this.adjescencyList){
//             console.log(vertex+" => "+[...this.adjescencyList[vertex]]);
//         }
//     }

//     hasEdge(vertex1,vertex2){
//         return (
//             this.adjescencyList[vertex1].has(vertex2) &&
//             this.adjescencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjescencyList[vertex1].delete(vertex2);
//         this.adjescencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjescencyList[vertex]){
//             return false;
//         }
//         for(let adjescentvertex of this.adjescencyList[vertex]){
//             this.removeEdge(vertex,adjescentvertex);
//         }
//         delete this.adjescencyList[vertex]
//     }

//     bfs(startNode) {
//         const queue = [startNode];
//         const visited = {};
//         let vertices = Object.keys(this.adjescencyList);
        
//         for (let v of vertices) {
//             visited[v] = false;
//         }
        
//         visited[startNode] = true;
//         let bfs = [];
        
//         while (queue.length) {
//             const curr = queue.shift();
//             bfs.push(curr);
            
//             for (let neighbor of this.adjescencyList[curr]) {
//                 if (!visited[neighbor]) {
//                     visited[neighbor] = true;
//                     queue.push(neighbor);
//                 }
//             }
//         }
        
//         return bfs;
//     }
//     dfs(startNode){
//         let stack = [startNode];
//         let vertices = Object.keys(this.adjescencyList);
//         for(let v of vertices){
//             vertices[v]= false
//         }
//         vertices[startNode]=true;
//         let dfs = [];
//         while(stack.length){
//             let curr = stack.pop();
//             dfs.push(curr);
//             for(let neighbor of this.adjescencyList[curr]){
//                 if(!vertices[neighbor]){
//                     vertices[neighbor]=true;
//                     stack.push(neighbor);
//                 }
//             }
//         }
//         return dfs
//     }
// }

// const myGraph = new graph();
// myGraph.addVertex('A')
// myGraph.addVertex('B')
// myGraph.addVertex('C')
// myGraph.addVertex('D')
// myGraph.addVertex('E')
// myGraph.addEdge('A','B');
// myGraph.addEdge('A','C');
// myGraph.addEdge('B','D');
// myGraph.addEdge('C','E');
// myGraph.addEdge('D','E');
// console.log(myGraph.hasEdge('A','B'));
// //myGraph.removeEdge('A',B);
// //myGraph.removeVertex('C')
// console.log(myGraph.bfs('A'));
// console.log(myGraph.dfs('A'));
// myGraph.display()



//=========================== TRIE ===========================

// class Node {
//     constructor(char){
//         this.char = char;
//         this.children = {};
//         this.isEnd = false;
//     }
// }

// class Trie{
//     constructor(){
//         this.root = new Node(null);
//     }
//     insert(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!curr.children[char]){
//                 curr.children[char] = new Node(char)
//             }
//             curr = curr.children[char];
//         }
//         curr.isEnd = true
//     }
//     search(word){
//         let curr = this.root;
//         for(let char of word){
//             if(!curr.children[char]){
//                 return false;
//             }
//             curr = curr.children[char];
//         }
//         return curr.isEnd;
//     }
//     startWith(prefix){
//         let curr = this.root;
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return false;
//             }
//             curr = curr.children[char];
//         }
//         return true
//     }
//     findSuggestion(prefix){
//         let curr = this.root;
//         for(let char of prefix){
//             if(!curr.children[char]){
//                 return [];
//             }
//             curr = curr.children[char];
//         }
//         let suggestions = [];
//         this.collectSuggestions(curr,prefix,suggestions);
//         return suggestions;
//     }
//     collectSuggestions(node,prefix,suggestions){
//         if(node.isEnd){
//             suggestions.push(prefix)
//         }
//         for(let child in node.children){
//             this.collectSuggestions(node.children[child],prefix+child,suggestions);
//         }
//     }

// }

// const myTrie = new Trie();
// myTrie.insert("Akhil")
// myTrie.insert("Akhil Moorkkandathil")
// myTrie.insert("Akhil Vijayakumar")
// myTrie.insert("Akhil M")
// myTrie.insert("Akhil Yeshudas")
// myTrie.insert("Rajan")
// myTrie.insert("Rajappan")
// myTrie.insert("Rajeevan");

// console.log(myTrie.findSuggestion("Raj"));


// Binary Search
// function binarySearch(arr,target){
//     let leftIndex = 0
//     let rightIndex = arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(arr[middle]===target) return middle
//         if(target<arr[middle]) right = middle-1
//         else left = middle+1
//     }
//     return false
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],5))


//linked list

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//     }

//     add(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             return true
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr= curr.next;
//         }
//         curr.next = newNode;
//         return true
//     }
//     reverse(){
//         let curr = this.head;
//         let prev = null;
//         let nextNode;
//         while(curr){
//             nextNode = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextNode;
//         }
//         this.head = prev
//     }
//     removefirst(){
//         if(!this.head) return false;
//         this.head = this.head.next;
//         return true
//     }
//     removeLast(){
//         if(!this.head) return false;
//         let curr = this.head;
//         let prev = null;
//         while(curr.next){
//             prev = curr;
//             curr= curr.next;
//         }
//         prev.next = null;
//         return true
//     }
//     delete(val){
//         if(!this.head) return false;
//         let curr = this.head;
//         let prev = null;
//         if(curr.val == val) this.removefirst();
//         while(curr.next){
//             prev = curr;
//             curr = curr.next;
//             if(curr.val == val){
//                 prev.next = curr.next
//                 return true
//             }
//         }
//        return false
//     }
// }

// const MyLinkedList = new linkedList();
// MyLinkedList.add(12)
// MyLinkedList.add(13)
// MyLinkedList.add(14)
// MyLinkedList.add(15)
// console.log(MyLinkedList.head);
// console.log(MyLinkedList.delete(19));
// // console.log(MyLinkedList.removeLast());
// // MyLinkedList.reverse()
// console.log(MyLinkedList.head);



// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivot = arr[0];
//     let left=[], right=[];
//     arr.splice(0,1);

//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<pivot) left.push(arr[i])
//         else right.push(arr[i])
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([1,4,2,5,4,7,9,8,0,5,3,7]));

// function mergeSort(arr){
//     if(arr.length<2) return arr;
//     const middle = Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     return merge(mergeSort(left),mergeSort(right))
// }

// function merge(left,right){
//     let sorted = [];
//     while(left.length && right.length){
//         if(left[0]>right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort([2,4,7,5,9,0,6,8,7,3,4,1,2]));
// console.log("Helllo");


// function bubbleSort(array){
//     let swapped;
//     do{
//         swapped = false;
//         for (let i = 0; i < array.length; i++) {
//             if(array[i+1]<array[i]){
//                 [array[i],array[i+1]]=[array[i+1],array[i]];
//                 swapped = true
//             }
            
//         }

//     }while(swapped)
//     return array
// }

// console.log(bubbleSort([1,4,3,5]));




// function binarySearch(arr,target){
//     let middle = Math.floor(arr.length/2);
//     console.log(middle);
//     if(target == arr[middle]) return middle;
//     if(target<arr[middle]) binarySearch(arr.slice(0,middle-1),target)
//     else binarySearch(arr.slice(middle+1),target)
// }

// console.log(binarySearch([0,1,2,3,4,5,6,7,8,9],2));

// function binarySearch(arr,target,left = 0,right = arr.length-1){
//     while(left<=right){
//         let middle = Math.floor((left+right)/2);
//         if(target == arr[middle]) return middle;
//         if(target<arr[middle]) right = middle-1
//         else left = middle+1
//     }
//     return "No target element in array"
// }

// console.log(binarySearch([0,1,2,3,4,5,6,7,8,9],60));



// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.top = null;
//         this.length = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         if(!this.length){
//             this.top = newNode;
//             this.length++;
//             return true;
//         }
//         newNode.next = this.top;
//         this.top = newNode;
//         this.length++
//         return true
//     }
//     pop(){
//         if(!this.length) return false;
//         let ref = this.top;
//         this.top = this.top.next;
//         ref.next = null;
//         this.length--;
//         return true;
//     }
//     print(){
//         if(!this.top) return "Empty Stack";
//         let curr = this.top;
//         let arr = []
//         while(curr){
//             arr.push(curr.val);
//             curr = curr.next
//         }
//         return arr

//     }
// }

// const myStack = new Stack();
// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)


// console.log(myStack.top);
// console.log(myStack.print());
// console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.top);



// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.first = null;
//         this.tail = null;
//         this.length = 0
//     }
//     enqueue(val){
//         const newNode = new Node(val);
//         if(!this.first){
//             this.first = newNode;
//             this.last = newNode;
//             this.length++;
//             return true
//         }
//         this.last.next = newNode;
//         this.last = newNode;
//         this.length++;
//         return true;

//     }
//     dequeue(){
//         if(!this.first) return false;
//         let temp = this.first;
//         this.first = this.first.next;
//         temp.next = null;
//         this.length--;
//         return true;
        
//     }
// }


// const myQueue = new Queue();
// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(30)
// myQueue.enqueue(40)
// myQueue.enqueue(50)
// console.log(myQueue.first);
// myQueue.dequeue()
// console.log(myQueue.first);

//selection sort

// function selection(array){
//     for (let i = 0; i < array.length; i++) {
//        let min = i;
//        for (let j = i+1; j < array.length; j++) {
//         if(array[min]>array[j]){
//             min = j
//         }
//        }
//         [array[i],array[min]]=[array[min],array[i]]
//     }
//     return array
// }


// console.log(selection([1,5,3,6,4,7,4,6]));

//insertion sort

// function insertion(array){
//     for (let i = 1; i < array.length; i++) {
//        let NTI = array[i]
//        let j = i-1;
//        while(j>=0 && array[j]>NTI){
//         array[j+1]=array[j];
//         j--
//        }
//        array[j+1] = NTI
        
//     }
//     return array
// }
// console.log(insertion([2,4,3,1,6,5,8,7,9,7]));


// Hash table

// class HashTable{
//     constructor(size){
//         this.table = new Array(size);
//     }
//     hashFunction=(key,size)=>{
//         let hash = 17;
//         for (let i = 0; i < key.length; i++) {
//             hash = hash*7*key.charCodeAt(i)%size;
//         }
//         return hash
//     }

//     setItem(key,val){
//         let index = this.hashFunction(key);
//         if(this.table[index]){
//             this.table[index].push([key,val])
//         }else{
//             this.table[index]= [[key,val]]
//         }
//         return true
//     }
//     getItem(key){
//         let index = this.hashFunction(key);
//         if(!this.table[index]) return false;
//         return this.table[index].find(x=>x[0]==key)[1]
//     }
// }
// const myTable = new HashTable(60);
// myTable.setItem("fName","Akhil")
// myTable.setItem("lName","Mor")
// myTable.setItem("age","22")
// myTable.setItem("place","mlp")
// console.log(myTable.getItem("fName"));
// console.log(myTable.getItem("lName"));
// console.log(myTable.getItem("age"));
// console.log(myTable.getItem("place"));
// console.log(myTable.table);



//binary search tree





//linked list ✔
//stack ✔
//queue ✔
//binary search ✔
//quick sort ✔
//merge sort ✔
// bubble sort ✔
//selection sort ✔
// insertion sort ✔
// Hash table ✔


// Binary tree

// class Node {
//     constructor(val){
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }

// }

// class binarySearchTree{
//     constructor(){
//         this.root = null
//     }
//     insert(val){
//         const newNode = new Node(val);
//         if(!this.root){
//             this.root = newNode;
//             return true
//         }
//         let curr = this.root;
//         while(true){
//             if(val<curr.val){
//                 if(!curr.left){
//                     curr.left = newNode;
//                     return true
//                 }
//                 curr = curr.left
//             }else{
//                 if(!curr.right){
//                     curr.right = newNode;
//                     return true
//                 }
//                 curr = curr.right
//             }
//         }
//     }
//     rInsert(val){
//         this.root =  this._insert(val,this.root);
//     }
//     _insert(val,node){
//         if(!node){
//             return new Node(val)
//         }
//         if(val<node.val){
//             node.left =  this._insert(val,node.left)
//         }else{
//             node.right =  this._insert(val,node.right)
//         }
//         return node
//     }
//     search(root,val){
//         if(!root) return false;
//         if(root.val == val) return true;
//         return this.search(root.left,val) || this.search(root.right,val);
//     }
//     dfs(root){
//         if(!root) return false;
//         let stack = [root];
//         let res = []
//         while(stack.length){
//             let curr = stack.pop();
//             res.push(curr.val)
//             // Push right child first so that left child is processed first
//             if(curr.right) stack.push(curr.right)
//             if(curr.left) stack.push(curr.left)
//         }
//     return res;
//     }
//     delete(root,val){

//     }
// }
// const myTree = new binarySearchTree();
// myTree.rInsert(10)
// myTree.rInsert(20)
// myTree.rInsert(30)
// myTree.rInsert(50)
// console.log(myTree.dfs(myTree.root));
// console.log(myTree.search(myTree.root,10));
// console.log(myTree.root);

//binary search tree
//minheap
//maxheap
//heapsort
//trie
//graph
//recursion

//callback

// function fetchApi(callback){
//     setTimeout(()=>{
//         callback(5)
//     },1000)
// }
// function fetchApi2(callback){
//     setTimeout(()=>{
//         callback(6)
//     },1000)
// }
// function fetchApi3(callback){
//     setTimeout(()=>{
//         callback(7)
//     },1000)
// }
// fetchApi((val)=>{
//     fetchApi2((val2)=>{
//         fetchApi3((val3)=>{
//             console.log(val+val2+val3);
            
//         })
//     })
// });


// //promise

// const myPromise = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Promise resolved")
//     },1000)
// })

// myPromise.then((val)=>{
//     console.log(val);
// }).catch((err)=>{
//     console.log(err);
// })

//promise.all()

// const promise1 = new Promise((res,rej)=>{
//     rej("rejected")
// })
// const promise2 = new Promise((res,rej)=>{
//     res([4,5,])
// })

// const total = Promise.race([promise1,promise2])
// total.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

//promise1.all => take an array of promise and it return when all promise resolved;
//promise.allSettled=>take an array of promise and it return an array of promise with its status and value;
//promise.any=>Take an array of promise and return the first primise resolved;
//promise.race=>Take and aray of promise and return the first promise value rejected or resolved



// let length=arr.length
// function removeOdd(arr){
    //     for (let i = 0; i <length; i++) {
        //         if(arr[i]%2==1 && arr[i+1]%2==1){
            //             arr.splice(i,1);
            //             i--;
            //         }
            
            //     }
            //     return arr
            // }
            
            // console.log(removeOdd(67]));
            
// let arr = [1,3,7,2,45,2,4,6,7,5,75,4,8,67];
// function removeOdd(arr){
//     let count = 0;
//     for (let i = 2; i < arr.length; i++) {
//         if(arr[i]%2==0 && arr[i-2]%2==0 || arr[i-1]%2==0){
            
//         }
        
//     }
//     return arr
// }

// console.log(removeOdd(arr));

//structure

// function middle(req,res,next){
//     //logic
//     console.log();
//     next()
// }

// app.use(middle)



// function reverseString(str){
//     let stack = []
//     for (let i = 0; i < str.length; i++) {
//         stack.push(str[i])
//     }
//     function reverse(stack,res = ""){
//         if(stack.length==0) return res;
//         let result = res+stack.pop()
//         return reverse(stack,result) 
//     }
//     return reverse(stack)
// }

// console.log(reverseString("Akhil"));



class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    addFirst(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return true
        }
        const head = this.head;
        newNode.next = head;
        this.head = newNode;
        return true
    }

    addEnd(val){
        const newNode = new Node(val);
        if(!this.head) this.addFirst(val);
        let tail = this.tail;
        tail.next = newNode;
        this.tail = newNode;
        return true
    }

    arrayToLinkedlist(arr){
        arr.forEach(element => {
            this.addEnd(element);
        });
    }

    
}

const MyLinkedList = new LinkedList();
// console.log(MyLinkedList.addFirst(10));
// console.log(MyLinkedList.addFirst(20));
// console.log(MyLinkedList.addFirst(30));
// console.log(MyLinkedList.addEnd(1000));
console.log(MyLinkedList.arrayToLinkedlist([2,4,3,5]));
console.log(MyLinkedList.head);