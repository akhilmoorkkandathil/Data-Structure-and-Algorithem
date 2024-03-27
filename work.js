// let arr = ["a","b","c","d","e"];
// let target = "d";
// function binarySearch(arr,target){
//     let leftIndex = 0,rightIndex = arr.length-1;
    
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2)
//         if(arr[middle]==target){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
            
            
//         }else{
//             leftIndex = middle+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,target));

// let name = "akhil"

// function reverse(name,result){
//     if(name=="" || name.length ==1){
//         return name;
//     }
//     result = name.substring(1,name.length-1)

//     return reverse()
// }
// console.log(reverse(name,""));

// function reverse(name){
//     if(name.length==1){
//         return name;
//     }
//     return reverse(name.substring(1,name.length))+name[0];
     
// }
// console.log(reverse("Akhil"));

// let arr =[1,4,3,5,3,6,4,6];
// function findBiggest(arr){
//     let count =0
//     if(count>=arr.length){
//         return largest
//     }
//     count++
//     let biggest = arr[0];
//     if(biggest<arr[0]){
//         biggest = arr[0]
//     }
//     return arr.findBiggest(arr.slice(1,arr.length-1))
// }

// Print name n times

// function print(n){
//     if(n==0){
//         return
//     }
//     console.log("Ahkil");
//     return print(n-1)
// }
// print(5)

// function print(n,count=0){
//     if(n==0) return;
//     count++
//     console.log(count);

//     print(n-1,count)
// }
// print(5)

// function x(n){
//     if(n<=1) return
//     x(n-1)
//     console.log(n);
//     x(n-1)
// }
// x(3)
// function sum(n){
//     if(n===1){
//         return n
//     }
//     return n+sum(n-1)
// }
// sum(4)

// function binarySearch(arr,target){
//     let leftIndex=0
//     let rightIndex=arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2)
//         if(target == arr[middle]){
//             return middle
//         }
//         if(target<arr[middle]){
//             rightIndex = middle -1
//         }else{
//             leftIndex = middle+1
//         }
//     }
//  return -1

// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9,10],8));


//Bibary Search
// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1;

//         }else{
//             leftIndex = middle+1
//         }
//     }
// }
// console.log(binarySearch(["a","b","c","d","e","f","g"],"e"));




//Linear Search

// arr = [1,2,3,4,5,6,7,8,9];
// target = 6;


// function LinearSearch(arr,target){
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==target){
//             return i
//         }
//     }
// }
// console.log(LinearSearch([1,2,3,4,5,6,7,8,9],6));

// Binary Search using recursion

// function binarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2)
//     if(target == arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         rightIndex = middle-1;
//         return search(arr,target,leftIndex,rightIndex)
//     }else{
//         leftIndex = middle+1
//         return search(arr,target,leftIndex,rightIndex)
//     }
// }
// console.log(binarySearch(["a","b","c","d","e","f","g"],"e"));


// //Reverse String
// function reverseString(str){
//     if(str.length == 0){
//         return "";
//     }
//     return reverseString(str.slice(1))+str[0]
// }
// console.log(reverseString("Akhil"));

//Reverse a string using methods
// str = "Akhil M"
// console.log(str.split("").reverse().join(""));


//Find biggest number in a array using recursion

// function recursionBiggest(arr,biggest=arr[0]){
    
//     if(arr.length ==0 ) return biggest
//     if(arr[0]>biggest){
//         biggest = arr[0]
//     }
//     return recursionBiggest(arr.slice(1),biggest)

// }
// console.log(recursionBiggest([1,4,2,15,5,3,6,8]));

//Find second biggest in an array

// function secondBiggestRecursion(arr,biggest=0,sbiggest=0){
//     if(arr.length == 0 ) return sbiggest;
//     if(arr[0]>biggest){
//         sbiggest = biggest
//         biggest = arr[0]
         
//     }if(arr[0]>sbiggest && arr[0]<biggest){
//         sbiggest = arr[0]
//     }
//     return secondBiggestRecursion(arr.slice(1),biggest,sbiggest)
// }
// console.log(secondBiggestRecursion([1,2,19,3,4,15,5,6,7,8,9]));

// fibanocci
// function fibanocci(n){
//     if(n<2) return n
//     return fibanocci(n-1)+fibanocci(n-2)
// }
// console.log(fibanocci(5));

//Factorial

// function facatorial(n){
//     if(n==1) return n
//     return n*facatorial(n-1)
// }

// console.log(facatorial(5));

// function reverse(str){
//     if(str.length ==0) return ""
//     return reverse(str.slice(1))+str[0];
// }
// console.log(reverse("Akhil is a good boy"));

// function binarySearch(arr,target){
//     let leftIndex  = 0;
//     let rightIndex = arr.length-1
//     if(arr.length == 0){
//         return -1
//     }
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//     }
//     return -1
    
// }

// console.log(binarySearch([1,2,3,4,5,6,7,8,9],1));

// function recursionBinarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target == arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,leftIndex,middle-1)
//     }else{
//         return search(arr,target,middle+1,rightIndex)
//     }
// }
// console.log(recursionBinarySearch([1,2,3,4,5,6,7,8,9],9));


//sum of elements
// function recursion(arr,sum=1){
//     if(arr.length == 0) return sum
//     sum *= arr[0];
//     return recursion(arr.slice(1),sum)
// }
// console.log(recursion([]));

// let arr = ["a","b","c","d","e","f"];
// let target = "e"

// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(arr,target));

// function recursiveBinary(arr,target){
//     return search(arr,target,0,arr.length-1)
// }
// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target == arr[middle]){
//         return middle;
//     }
//     if(target<arr[middle]){
//         return search(arr,target,leftIndex,middle-1)
//     }else{
//         return search(arr,target,middle+1,rightIndex)
//     }
// }

// console.log(recursiveBinary(arr,target));

// let arr = [3,5,7,3,8,5,9,5,0,4];

// function biggestNumber(arr,biggest=arr[0]){
//     if(arr.length==0){
//         return biggest;
//     }
//     if(biggest<arr[0]){
//         biggest = arr[0]
//     }
//     return biggestNumber(arr.slice(1),biggest)
// }
// console.log(biggestNumber(arr));

// let str = "Akhil is a good boy"

// function recursiveReverse(str){
//     if(str.length==1){
//         return str
//     }
//     return recursiveReverse(str.slice(1))+str[0]

// }

// console.log(recursiveReverse(str));

// let arr = ["a","b","c","d","e","f"];
// let target = "f";

// function binarySearch(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-0;
//     while(leftIndex<=rightIndex){
//         let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(target == arr[middle]){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//     }
// }

// function binarySearch(arr,target){
//     return search(arr,target,0,arr.length-1)
// }

// function search(arr,target,leftIndex,rightIndex){
//     if(leftIndex>rightIndex){
//         return -1
//     }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//     if(target==arr[middle]){
//         return middle
//     }
//     if(target<arr[middle]){
//         return search(arr,target,0,middle+1)
//     }else{
//         return search(arr,target,middle+1,rightIndex)
//     }
    
// }
// console.log(binarySearch(arr,target));


// let str = "My name is Akhil"
//  function reverse(str){
//     if(str.length==1){
//         return str
//     }
//     return reverse(str.slice(1))+str[0]
//  }
// console.log( reverse(str));


//Bubble sort

// function bubbleSort(arr){
//     let swapped;
//     do {
//          swapped = false;
//         for(let i = 0 ; i < arr.length - 1; i++) {
//             if( arr[i+1] < arr[i] ){
//                 [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
//                 swapped = true
//             }
//         }
//     } while(swapped)
//     return arr
// }

// console.log(bubbleSort([4,2,6,9,6,4,7,5,8]));

//Insertion sort


//Insertion sort

// function insertionSort(arr){
//     for(let i = 1; i < arr.length; i++){
//         let NTI = arr[i];
//         let j = i - 1;
//         while( j >= 0 && arr[j] > NTI){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = NTI;
//     }
//     return arr;
// }
// console.log(insertionSort([2,5,7,5,7,4,9,3,5]));

//  [2,5,7,5,7,4,9,3,5] i=1  arr[i]=5    j=0   att[j]=2   NTI= 5
//  [2,5,7,5,7,4,9,3,5] i=2  arr[i]=7    j=1   att[j]=5   NTI= 7
//  [2,5,7,7,7,4,9,3,5] i=3  arr[i]=5    j=1   att[j]=5   NTI= 5
//  [2,5,7,5,7,4,9,3,5] 
//  [2,5,7,5,7,4,9,3,5]
//  [2,5,7,5,7,4,9,3,5]
//  [2,5,7,5,7,4,9,3,5]


//Bubble sort

// function selectinSort(arr){
//     let sorted;
//     do{
//         sorted = false;
//         for(let i=0;i<arr.length;i++){
//             if(arr[i+1]<arr[i]){
//                 [arr[i+1],arr[i]]=[arr[i],arr[i+1]];
//                 sorted=true
//             }
//         }
//     }while(sorted)
//     return arr
// }

// console.log(selectinSort([4,8,5,8,0,5,3,6]));


//Selection sort

// function selectinSort(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i;
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         let temp = arr[i];
//         arr[i]=arr[min];
//         arr[min]=temp
//     }
//     return arr
// }

// console.log(selectinSort([1,5,3,6,43,8,5,8]));

// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivotIndex = arr.length-1;
//     let pivotValue = arr[pivotIndex];
//     let left = [];
//     let right = [];
//     arr.splice(pivotIndex,1);
//     //console.log(arr)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<pivotValue){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i]);
//         }
//     }
//     return [...quickSort(left),pivotValue,...quickSort(right)]
// }

// console.log(quickSort([5,6,3,9,8,4,2,1,7]));


//Merge Sort

// function mergeSort(arr){
//     if(arr.length<2) return arr;
//     let middle = Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left,right){
//     let temp = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             temp.push(left.shift())
//         }else{
//             temp.push(right.shift())
//         }
//     }
//     return [...temp,...left,...right];
// }


// console.log(mergeSort([1,4,7,3,9,3,8,2,5,6]));

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
//         if(!this.top){
//             this.top = newNode;
//         }else{
//            let ref = this.top;
//            newNode.next = ref;
//            this.top = newNode;
//         }
//         this.length++;
//         return true;
//     }
//     pop(){
//         if(!this.top) return false;
//         if(this.length ==1){
//             this.top = null;
//             this.length=0;
//             return true
//         }
//         let oldTop = this.top;
//         this.top = this.top.next;
//         oldTop.next = null;
//          this.length--
//          return true

//     }
//     print(){
//         if(!this.top) return false;
//         let curr = this.top;
//         while(curr){
//             console.log(curr.val);
//             curr= curr.next;
//         }
//         return
//     }
// }

// const myStack = new Stack();
// console.log(myStack.push(10));
// myStack.push(20);
// myStack.push(30);
// myStack.push(40);
// myStack.push(50);
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// console.log(myStack.pop());
// myStack.print()


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null;
//         this.back = null;
//         this.length = 0;
//     }
//     enqueue(val){
//         const newNode = new Node(val);
//         if(!this.front){
//             this.front = newNode;
//             this.back = newNode;
//             this.length++;
//             return true;
//         }
//         newNode.next = this.back;
//         this.back = newNode;
//         this.length++;
//         return true

//     }

//     dequeue(){
//         if(!this.front) return false;
//         if(this.length==1){
//             this.front = null;
//             this.back = null;
//             this.length = 0;
//             return true
//         }
        
//     }
// }

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Stack {
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.length++;
//             return true
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return true
//     }
//     pop(){
//         if(!this.head) return null;
//         if(this.length==1){
//             this.head = null;
//             this.length = 0;
//             return true
//         }
//         this.head = this.head.next;
//         this.length--
//         return true
//     }
//     print(){
//         if(!this.head) return null;
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr = curr.next;
//         }
//         return
//     }
// }

// const myStack = new Stack();
// console.log(myStack.push(10));
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)
// myStack.push(60)
// myStack.pop()
// myStack.print()

// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Queue {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     enqueue(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++;
//             return true
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return true
//     }
//     dequeue(){
//         if(!this.head) return false;
//         if(this.length == 1){
//             this.head = null;
//             this.tail = null;
//             this.length = 0;
//             return true
//         }

//         this.head = this.head.next;
//         this.length--;
//         return true
//     }

//     print(){
//         if(!this.head) return null;
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr = curr.next;
//         }
//         return
//     }
// }

// const myQueue = new Queue();
// myQueue.enqueue(10);
// myQueue.enqueue(20);
// myQueue.enqueue(30);
// myQueue.enqueue(40);
// myQueue.enqueue(50);
// myQueue.enqueue(60);
// myQueue.enqueue(70);
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.dequeue()
// myQueue.print()


// Queue using two stacks

// class Queue {
//     constructor(){
//         this.pushStack = [];
//         this.popStack = [];
//     }
//     push(val) {
//         this.pushStack.push(val)
//         return true
//     }
//     pop() {
//         if(!this.popStack.length){
//             while(this.pushStack.length){
//                 this.popStack.push(this.pushStack.pop())
//             }
//         }
//         return this.popStack.pop()
//     }
//     peek() {
//         if(!this.popStack.length){
//             while(this.pushStack.length){
//                 this.popStack.push(this.pushStack.pop());
//             }
//         }
//         return this.popStack[this.popStack.length-1]
//     }

//     print() {
//         return [this.pushStack, this.popStack]
//     }
// }
// const myQueue = new Queue();
// myQueue.push(10);
// myQueue.push(20);
// myQueue.push(30);
// myQueue.push(40);
// myQueue.push(50);
// myQueue.push(60);
// myQueue.push(70);
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()

// console.log(myQueue.print());



//Bubble sort

// function bubbleSort(arr){
//     let swapped;
// do{
//     swapped = false;
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>arr[i+1]){
//             [arr[i],arr[i+1]] = [arr[i+1],arr[i]];
//             swapped = true;
//         }
        
//     }
// }while(swapped)
// return arr
// }
// console.log(bubbleSort([7,3,5,2,6,5,1,9,0,2,5,1]));



//Selection sort

// function selectinSort(arr){
//     for (let i = 0; i < arr.length; i++) {
//         let min = i;
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]<arr[min]){
//                 min = j
//             }
            
//         }
//         [arr[min],arr[i]] = [arr[i],arr[min]];
        
//     }
//     return arr;
// }

// console.log(selectinSort([3,5,2,7,4,8,9,5,7,4]));

// Insertion sort

// function insertionSort(array){
//     for (let i = 1; i < array.length; i++) {
//         let NumberToInsert = array[i];
//         let j = i-1;
//         while(j>=0 && array[j]>NumberToInsert){
//             array[j+1] = array[j]
//             j--
//         }
//         array[j+1] = NumberToInsert;
//     }
//     return array
// }

// console.log(insertionSort([1,6,4,5,3,7,8,9,0,3,4,5]));


// Quick sort

// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivotIndex = 0;
//     let left = [];
//     let right = [];
//     let pivot= arr[pivotIndex];
//     arr.splice(pivotIndex,1);
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }    
//     }

//     return [...quickSort(left),pivot,...quickSort(right)]
// }

// console.log(quickSort([3,1,5,3,7,9,7,4,2,0,6]));


//Merge Sort

// function mergeSort(arr){
//     if( arr.length < 2 ) return arr;
//     let middle = Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left, right){
//     let temp = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             temp.push(left.shift())
//         }else{
//             temp.push(right.shift())
//         }
//     }
//     return [...temp,...left,...right]
// }

// console.log(mergeSort([2,4,1,6,8,5,3,5,9,0,7,4,1,5]));

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.length++;
//             return true;
//         }

//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return true
//     }
//     pop(){
//         if(!this.head) return false;
//         if(this.length ===0) {
//             this.head = null;
//             this.length =0;
//             return true;
//         }
//         this.head = this.head.next;
//         this.length--;
//         return true
//     }
//     peek(){
//         if(!this.head) return null;
//         return this.head;
//     }
//     console(){
//         if(!this.head) return null;
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr = curr.next;
//         }
//     }
// }

// const myStack = new Stack();
// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)
// myStack.push(60)
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// console.log(myStack.peek());
// myStack.console()


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Queue{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//              this.tail = newNode;
//              this.length++;
//              return true
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//          this.length++;
//          return true;
//     }
//     pop(){
//         if(!this.head) return false;
//         if(this.length ==1){
//             this.head = null;
//             this.tail = null;
//             this.length =0;
//             return true
//         }
//         this.head = this.head.next;
//         this.length--
//         return true
//     }
//     peek(){
//         if(!this.head) return null;
//         return this.head;
//     }
//     console(){
//         if(!this.head) return null;
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr= curr.next;

//         }
//     }
// }

// const myQueue = new Queue();
// myQueue.push(10)
// myQueue.push(20)
// myQueue.push(30)
// myQueue.push(40)
// myQueue.push(50)
// myQueue.push(60)
// myQueue.push(70);
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.pop()
// myQueue.push(80)
// myQueue.push(90)
// myQueue.push(100)
// myQueue.push(110)
// myQueue.push(120)
// console.log(myQueue.peek());
// myQueue.console()

// Queue using stack

// class Queue{
//     constructor(){
//         this.popStack = [];
//         this.pushStack = [];
//     }
//     push(val){
//         this.pushStack.push(val);
//     }
//     pop(){
//         if(!this.popStack.length){
//             while(this.pushStack.length){
//                 this.popStack.push(this.pushStack.pop())
//             }
//         }
//         return this.popStack.pop();
//     }
//     peek(){
//         if(!this.popStack.length){
//             while(this.pushStack.length){
//                 this.popStack.push(this.pushStack.pop())
//             }
//         }
//         return this.popStack[this.popStack.length-1]
//     }
//     console(){
//         return [this.pushStack,this.popStack];
//     }
// }

// const myQueue = new Queue();
// myQueue.push(10)
// myQueue.push(20)
// myQueue.push(30)
// myQueue.push(40)
// myQueue.push(50)
// console.log(myQueue.console());
// myQueue.pop()
// console.log(myQueue.peek());
// console.log(myQueue.console());


//Stack using Queue

// class Stack{
//     constructor(){
//         this.queue1 = [];
//         this.queue2 = [];
//     }
//     enqueue(val){
//         this.queue2.push(val);
//         while(this.queue1.length!==0){
//             this.queue2.push(this.queue1.shift());
//         }
//         this.queue = this.queue2;
//         this.queue2 = this.queue1;
//         this.queue1 = this.queue;
//         return true
//     }
//     dequeue(){
//         if(!this.queue1.length) return null
//         this.queue1.shift()
//     }
//     peek(){
//         if(!this.queue1.length) return null
//         return this.queue1[0]
//     }
//     console(){
//         return this.queue1;
//     }
// }

// const myStack = new Stack();
// myStack.enqueue(10)
// myStack.enqueue(20)
// myStack.enqueue(30)
// myStack.enqueue(40)
// myStack.enqueue(50)
// myStack.enqueue(60)
// myStack.enqueue(70)
// myStack.enqueue(80)
// console.log(myStack.console());
// myStack.dequeue()
// console.log(myStack.console());



// class stack{
//     constructor(){
//     this.stack = [];
//     this.length = 0
//     }
//     push(val){
//         this.stack.push(val)
//         this.length++
//         return true
//     }
//     pop(){
        
//         this.length--
//         return this.stack.pop();
        
//     }
//     revereseString(str){
//         for(let i=0;i<str.length;i++){
//             this.push(str[i])
//         }
//         let rev = "";
//         while(this.length){
//             rev+=this.pop(); 
//         }
//         return rev
//     }
// }

// const myStack = new stack();
// console.log(myStack.revereseString("Akhil"));




// function mergeSort(arr){
//     if(arr.length<2) return arr
//     let middle = Math.floor(arr.length/2);
//     let left = arr.slice(0,middle);
//     let right = arr.slice(middle);
//     return merge(mergeSort(left),mergeSort(right));
// }

// function merge(left,right){
//     let sorted = [];
//     while(left.length && right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergeSort([2,5,8,4,6,9,8,5,3,4,2]));


// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivotIndex = 0;
//     let pivot = arr[pivotIndex];
//     let left = [];
//     let right = [];
//     arr.splice(pivotIndex,1)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]<=pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)]
// }
// console.log(quickSort([1,5,3,6,4,8,9,5,2,6,8]));

// function selection(arr){
//     for(let i=0;i<arr.length;i++){
//         let min = i
//         for (let j = i+1; j < arr.length; j++) {
//             if(arr[j]<arr[min]){
//                 min = j
//             }
//         }
//         [arr[i],arr[min]] = [arr[min],arr[i]];
//     }
//     return arr
// }

// console.log(bubbleSort([4,7,2,9,1,0,9,5,7,4,2,8,5,3]));

// function insertion(arr){

//     for(let i=1;i<arr.length;i++){
//         let NumberToInsert = arr[i];
//         let j = i - 1;
//         while(j>=0 && arr[j]>NumberToInsert){
//             arr[j+1] = arr[j];
//             j--;
//         }
//         arr[j+1] = NumberToInsert;
//     }
//     return arr
// }
// console.log(selectinSort([4,7,6,2,1,3,4,8,9,7,6,5]));


// function bubbleSort(arr){
//     let swapped;
//     do{
//         swapped = false
//         for(let i =0;i<arr.length;i++){
//             if(arr[i+1]<arr[i]){
//                 [arr[i],arr[i+1]] = [ arr[i+1],arr[i]]
//                 swapped = true
//             }
//         }
//     }while(swapped)
//     return arr
// }

// console.log(bubbleSort([4,2,6,4,8,9,6,5,3,2,1]));

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Stack{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
//     push(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.length++;
//             return true;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++;
//         return true;
//     }
//     pull(){
//         if(!this.head) return false;
//         this.head = this.head.next;
//         this.length--;
//         return true;
//     }
//     peek(){
//         return this.head;
//     }
// }

// const myStack = new Stack();
// myStack.push(10)
// myStack.push(20)
// myStack.push(30)
// myStack.push(40)
// myStack.push(50)
// myStack.push(60)
// console.log(myStack.peek());


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }
// class Queue{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     enqueue(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++;
//             return true
//         }
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++;
//         return true;
//     }
//     dequeue(){
//         if(!this.head) return false;
//         if(this.length===1){
//             this.head = null;
//             this.tail = null;
//             this.length++;
//             return true;
//         }
//         this.head = this.head.next;       
//         this.length--;
//         return true;
//     }

//     peek(){
//         return this.head;
//     }
// }


// const myQueue = new Queue();
// myQueue.enqueue(10)
// myQueue.enqueue(20)
// myQueue.enqueue(30)
// myQueue.enqueue(40)
// myQueue.enqueue(50)
// myQueue.enqueue(60)
// myQueue.dequeue()
// myQueue.dequeue()

// console.log(myQueue.peek());



// class Stack{
//     constructor(){
//         this.stack = [];
//         this.length = 0
//     }
//     push(val){
//         this.stack.push(val);
//         this.length++;
//         return true
//     }
//     pop(){
        
//         this.length--
//         return this.stack.pop();
        
//     }
//     reverse(str){
//         for(let i=0;i<str.length;i++){
//             this.push(str[i])
//         }
//         let rev = "";
//         while(this.length){
//             rev+=this.pop()
//         }
//         return rev
//     }
// }

// const myStack = new Stack();
// console.log(myStack.reverse("Hello"));

// let str = "hhahfffffff"
// let count=0;
// let arr =[]
// for(let i=0;i<str.length;i++){
//     if(str[i]==str[i+1]){
//         count++
//     }else{

//         arr.push(count)
//         count=0
//     }
// }
//  count =0
//  let max
// for(let i=0;i<arr.length;i++){
//      max = 0;
//      count+=arr[i]
//     if(max<arr[i]){
        
//         max = arr[i]
//         index = i
//     }
// }

// console.log(max,index,count);


// function quickSort(arr){
//     if(arr.length<2) return arr;
//     let pivotIndex = 0;
//     let pivot = arr[pivotIndex]
//     let left = [];
//     let right = [];
//     arr.splice(0,1)
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]>pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quickSort(left),pivot,...quickSort(right)];

// }

// console.log(quickSort([1,5,3,7,9,5,6,7,9,4]));