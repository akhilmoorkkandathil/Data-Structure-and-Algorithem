// let arr = [1,6,2,3,6,4,5,6,7,8,9];
// let b=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==6){
//         arr.splice(i,1);
//         b.push(6)
//     }
// }
// console.log(arr.concat(b));

// class Node {
//     constructor(val){
//         this.val=val;
//         this.next=null;
//     }
// }

// class SinglyLinkedList {
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val){
//         const newNode = new Node(val)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }

//     pop(){
//         if(!this.head) return undefined;
//         let current = this.head;
//         let newTail = current;
//         while(current){
//             newTail = current;
//             current = current.next;
//         }
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length --;
//         if(this.length ==0){
//             this.head = null;
//             this.tail = null;

//         }
//         return current
//     }
//     // The shift method removes the head of the list
//     shift() {
//         if (!this.head) return undefined
//         var currentHead = this.head
//         this.head = currentHead.next
//         this.length--
//         if (this.length === 0) {
//             this.tail = null
//         }
//         return currentHead
//     }
//     unshift(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         newNode.next = this.head;
//         this.head = newNode;
//         this.length++
//         return this
//     }

//     get(index){
//         if(index<0 || index>=this.length) return null;
//         let counter = 0;
//         let current = this.head;
//         while(counter!==index){
//             current = this.head;
//             counter++;
//         }
//         return counter;
//     }
//     set(index,val){
//         const foundNode = this.get(index);
//         if(foundNode){
//             foundNode.val=val;
//             return true
//         }
//         return false;
//     }

//     insert(index,val){
//         if(index<0 || index>= this.length) return false;
//         if(index == 0 ) return this.unshift(val);
//         if(index == this.length) return this.push(val);
//         const Node = new Node(val);
//         const prev = this.get(index-1);
//         let temp = prev.next;
//         prev.next= Node;
//         Node.next = temp;
//         this.length++;
//         return true;
//     }

//     remove(index){
//         if(index<0 || index>= this.length) return false;
//         if(index == 0 ) return this.shift(val);
//         if(index == this.length) return this.pop(val);
//         const prev = this.get(index - 1);
//         const removed = prev.next;
//         prev.next = removed.next;
//         this.length;
//         return removed;
//     }
// }


//Write a JavaScript program to create and display a Singly Linked List.
// class Node {
//     constructor(val){
//         this.val = val;
//          this.next = null
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
    
//     push(val){
//         const node = new Node(val);
//         if(!this.head){
//             this.head = node;
//         }else{
//             let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = node;
        
//     }
//     this.length++
//     return true
//     }

//     print(){
//         if(!this.head){
//             console.log("List is empty");
//         } else {
//             let str = "";
//             let curr = this.head;
//             while(curr){
//                 str += curr.val + " "; 
//                 curr = curr.next;
//             }
//             console.log(str);
//         }
//     }
// }

// const list = new SinglyLinkedList()
// list.print()
// console.log(list.push(4));
// list.push(1)
// list.push(2)
// list.print()

// Write a JavaScript program to create a singly linked list of n nodes and display it in reverse order.
// class Node {
//     constructor(val){
//         this.val = val;
//          this.next = null
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
    
//     push(val){
//         const node = new Node(val);
//         if(!this.head){
//             this.head = node;
//         }else{
//             let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = node;
        
//     }
//     this.length++
//     return true
//     }
//     reverse_list(){
//         let prevNode = null;
//         let currentNode = this.head;
//         if(currentNode===null) return;
    
//         let nextNode;
//         while(currentNode){
//             nextNode = currentNode.next;
//             currentNode.next = prevNode;
//             prevNode = currentNode;
//             currentNode = nextNode;
//         }
//         this.head = prevNode;
//     }

    
//     displayList(){
//         let node = this.head;
//         var str = ""
//         while (node) {
//             str += node.val + "->";
//             node = node.next;
//         }
//         str += "NULL"
//         console.log(str);  
//      } 
// }

// const list = new SinglyLinkedList()
// console.log(list.push(4));
// list.push(1)
// list.push(2)
// list.push(3)
// list.displayList()
// list.reverse_list()
// list.displayList()

//Write a JavaScript program to create a singly linked list of n nodes and count the number of nodes.
// class Node {
//     constructor(val){
//         this.val = val;
//          this.next = null
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
    
//     push(val){
//         const node = new Node(val);
//         if(!this.head){
//             this.head = node;
//         }else{
//             let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = node;
        
//     }
//     this.length++
//     return true
//     }
    
//     findCount(){
//         let currNode = this.head;
//         let  count = 0;
//         while(currNode){
//             count++;
//             currNode = currNode.next;
//         }
//         return count
//     }

    
//     displayList(){
//         let node = this.head;
//         var str = ""
//         while (node) {
//             str += node.val + "->";
//             node = node.next;
//         }
//         str += "NULL"
//         console.log(str);  
//      } 
// }

// const list = new SinglyLinkedList()
// // console.log(list.push(4));
// // list.push(1)
// // list.push(2)
// // list.push(3)
// // list.displayList()
// console.log(list.findCount());

//Write a JavaScript program to insert a node at any position in a Singly Linked List.
// class Node {
//     constructor(val){
//         this.val = val;
//          this.next = null
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.length = 0;
//     }
    
//     push(val){
//         const node = new Node(val);
//         if(!this.head){
//             this.head = node;
//         }else{
//             let curr = this.head;
//         while(curr.next){
//             curr = curr.next;
//         }
//         curr.next = node;
        
//     }
//     this.length++
//     return true
//     }

//     addBignning(val){
//         const newNode = new Node(val);
//         if(!this.head ){
//             this.head = newNode;
//             this.length++;
//         }else{
//             let ref = this.head;
//             this.head = newNode;
//             newNode.next = ref;
//             this.length++
//             return true;

//         }
//     }

//     addEnd(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.length++
//         }else{
//             let currNode = this.head;
//             while(currNode.next){
//                 currNode=currNode.next;
//             }
//             currNode.next = newNode;
//             this.length++
//             return true

//         }
//     }
    
//     insert(index,val){
//         const newNode = new Node(val);
//         if(index>this.length || index<0) return false
//         let currNode = this.head;
//         let count = 1;
//         while(count !== index){
//             count++;
//             currNode = currNode.next;
//         }
//         let ref = currNode.next;
//         currNode.next = newNode
//         newNode.next = ref;
//         return true

//     }

//     getNode(index){
//         if(index>this.length || index<0) return false
//         let currNode = this.head;
//         let count =0;
//         while(count!=index){
//             currNode = currNode.next;
//         }
//         return currNode;
//     }

//     find(val){
//         if(!this.head) return false
//         let currNode = this.head;
//         while(currNode.val!==val){
//             currNode = currNode.next;
//             if(!currNode) return -1
//         }
//         return currNode
//     }

//     toArray(){
//         if(!this.head) return false;
//         let currNode = this.head;
//         let arr = [];
//         while(currNode){
//             arr.push(currNode.val);
//             currNode = currNode.next;
//         }
//         return arr;
//     }

//     findMiddle(){
//         if(!this.head) return null;
//         if(this.length==1) return this.head;
//         let fast = this.head;
//         let slow = this.head;
//         while(fast && fast.next){
//             slow = slow.next;
//             fast = fast.next.next;
//         }
//         return slow;
//     }

//     toLinkedList(arr){
//         if (arr.length == 0) return false
//         this.head = new Node(arr[0])
//         let currNode = this.head;
//         for(let i=1;i<arr.length;i++){
//             currNode.next = new Node(arr[i]);
//             currNode = currNode.next
//         }
//         return this
//     }

//     remove(data){
//         let curr = this.head;
//         while(curr){
//             if(curr.val==data){
//                 curr.next=curr.next.next;
//                 curr=curr.next;
//             }else{
//                 curr = curr.next
//             }
//         }
//         return this;
//     }
//     unique(){
//         if(!this.head) return false;
//         let currNode = this.head;
//         let currValue , nextValue;
//         while(currNode && currNode.next){
//              currValue = currNode.val;
//              nextValue = currNode.next.val;
//              if(currValue == nextValue){
//                 currNode.next = currNode.next.next;
//              }else{
//                 currNode = currNode.next;
//              }
//         }
//         return this
//     }

    
//     displayList(){
//         let node = this.head;
//         var str = ""
//         while (node) {
//             str += node.val + "->";
//             node = node.next;
//         }
//         str += "NULL"
//         console.log(str);  
//      } 
// }

// const list = new SinglyLinkedList()
// list.push(1)
// list.push(5)
// list.push(3)
// list.push(4)
// list.displayList()
// console.log(list.remove(5));
// list.displayList()

// list.unique()
// list.displayList()
// list.insert(1,5)
// list.addBignning(10)
// list.addEnd(10)
// list.displayList();
// console.log(list.getNode(0));
// console.log(list.find(44));
// //console.log(list.toArray());
// console.log('=========');
// console.log(list.findMiddle());
// console.log(reverseList(list));

//console.log(list.toLinkedList([2,3,4,5,6,67,7,8]));


// class Node {
//         constructor(val){
//             this.val = val;
//              this.next = null
//         }
//     }

// const newNode = new Node(10);
// const newNode2 = new Node(11);
// newNode.next = newNode2;

// console.log(newNode);



/// DOUBLY LINKED LIST
//Write a JavaScript program to create and display Doubly Linked Lists.
// class node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//         this.previous = null;
//     }

// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     addEnd(val){
//         const newNode = new node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//             this.length++;
//         }else{
//             let curr = this.head;
//             while(curr.next){
//                 curr=curr.next;
//             }
//             let ref = curr
//             curr.next=newNode;
//             newNode.previous = ref;
//         }
//     }

//     print(){
//         if(!this.head) return console.log("List is empty");
//         let curr = this.head;
//         let str ="Null => ";
//         while(curr){
//             str+=curr.value + " => "
//             curr=curr.next;
//         }
//         str+="Null"
//         return str
//     }

// }

// let list = new DoublyLinkedList()
// list.addEnd(4)
// list.addEnd(5)
// list.addEnd(5)
// list.addEnd(5)
// list.addEnd(5)
// list.addEnd(6)
// console.log(list);

// console.log(list.print());


// class Node {
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     addNode(val){
//         const newNode = new Node(val)
//         if(!this.head){
//             this.head = newNode;
//         }else{
//             this.tail.next = newNode
//         }
//         this.tail = newNode;
//         this.length++
//         console.log("new node added");
//     }
//     display(){
//         if(!this.head) return console.log("List is empty");
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr=curr.next
//         }
//         return;
//     }

   
//     delete(val){
//         let curr = this.head;
//         let prev = null;
//         while(curr){
//             if(curr.val==val){
//                 if(prev == null){
//                     this.head = curr.next;
//                     if(curr.next == null){
//                         this.tail == null;
//                     }
    
//                 }else{
//                     prev.next = curr.next;
//                     if(curr.next == null){
//                         this.tail = prev;
//                     }
//                 }
//                 return true
//             }
            
//             prev = curr;
//             curr=curr.next;
//         }
//         return false
//     }
//     deleteIndexValue(index){
//         let curr = this.head;
//         let prev = null;
//         let counter = 0
//         while(curr){
//             if(counter == index){
//                 if(prev==null){
//                     this.head=curr.next
//                     if(curr.next === null){
//                         this.tail == null
//                     }else{
//                         prev.next = curr.next
//                         if(curr.next == tail){
//                             this.tail = prev
//                         }
                        
//                     }
//                 }
//                 return true
//             }
//             prev = curr
//             curr = curr.next;
            
//         }
//         return false
//     }
    
// }

// const list = new linkedList()
// list.addNode(1)
// list.addNode(2)
// list.addNode(3)
// list.addNode(4)
// console.log(list.deleteIndexValue(1));
// list.display()
// console.log(list.head);

