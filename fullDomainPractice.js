//Singly Linked List

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



// Biary Search

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


// Linear Search

// function linerSearch(arr,target){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]==target) return i
//     }
//     return -1
// } 

// console.log(linerSearch([2,4,3,5,7,4,8,5],5));


//Recursion

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


//SORTING

//1: Bubble Sort

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


