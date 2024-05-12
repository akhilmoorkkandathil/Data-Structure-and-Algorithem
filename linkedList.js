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
//         this.length = 0
//     }
//     addFirst(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         }else{
//             let ref = this.head;
//             this.head =newNode;
//             newNode.next= ref;
//             this.length++
//         }
//         this.length++;
//         return true
//     }

//     addLast(val){
//         const newNode = new Node(val);
//         if(!this.head) return this.addFirst(val)
//         this.tail.next = newNode;
//         this.tail = newNode;
//         this.length++
//     }
//     addAtIndex(index,val){
//         if(index<0 || index>=this.length) return false;
//         if(index == 0 ) return this.addFirst(val)
//         if(index==this.length-1) return this.addLast(val)
//         const newNode = new Node(val);
//         let curr = this.head;
//         let count =0;
//         let prev = null;
//         while(curr){
//             if(count == index-1){
//                 prev.next = newNode;
//                 newNode.next = curr;
//                 this.length++
//                 return true
//             }
//             count++
//             prev=curr;
//             curr = curr.next;
//         }

//     }
//     middleChange(){
//         if(!this.head) return null;
//         let slow = this.head;
//         let fast = this.head;
//         while(fast.next && fast.next.next){
//             slow = slow.next;
//             fast = fast.next.next
//         }
//         let val = slow.val;
//         if(fast.next){
//             slow.val = fast.next.val;
//             fast.next.val = val;
//         }else{
//          slow.val  = fast.val;
//          fast.val = val;
//         }
//         return true;
//     }

//     deleteDuplicate(){
//         if(!this.head) return false;
//         let curr = this.head;
//         while(curr.next){
//             if(curr.val ==curr.next.val){
//                 curr.next = curr.next.next;
//                 this.length--
//             }else{
//             curr = curr.next;
//             }
//         }
//         return true
//     }
//     addBeforeNode(index,val){
//         if(index<0 || index>=this.length) return false;
//         if(index == 0) return this.addFirst(val);
//         const newNode = new Node(val);
//         let curr = this.head;
//         let count = 0;
//         while(curr){
//             if(count == index-1){
//                 let ref = curr.next;
//                 curr.next = newNode;
//                 newNode.next = ref;
//                 this.length++
//                 return true
//             }
//             curr = curr.next
//             count++
//         }
//     }
//     addAfterNode(index,val){
//         if(index<0 || index>this.length-1) return false;
//         if(index==this.length-1) return this.addLast(val);
//         const newNode = new Node(val);
//         let curr = this.head;
//         let count = 0;
//         while(curr){
//             if(count == index){
//                 let ref = curr.next;
//                 curr.next = newNode;
//                 newNode.next= ref;
//                 this.length++
//                 return true
//             }
//             curr = curr.next;
//             count++;
//         }
//     }
//     addMiddle(val){
//         if(!this.head) return this.addFirst(val);
//         let slow = this.head;
//         let fast = this.head;
//         while(fast.next && fast.next.next){
//             slow = slow.next;
//             fast = fast. next.next;
//         }
//         let newNode = new Node(val);
//         let ref = slow.next;
//         slow.next = newNode;
//         newNode.next = ref;
//          this.length++;
//          return true
        

//     }
//     addAfterNode(index,val){
//         if(index<0 || index>=this.length) return false;
//         if(index==this.length-1) return this.addLast(val)
//         let curr = this.head;
//     let count = 0;
//     const newNode = new Node(val);
//     while(curr.next){
//         if(index == count){
//             let ref = curr.next;
//             curr.next = newNode;
//             newNode.next = ref;
//             this.length++;
//             return true;
//         }
//         curr = curr.next;
//         count++
//     }
//     }
//     insertSorted(val){
//         if(!this.head) return this.addFirst(val);
//         if(this.head.val >val) this.addFirst(val);
//         if(this.tail.val < val) this.addLast(val);
//         let curr = this.head;
//         const newNode = new Node(val);
//         while(curr.next){
//             if(curr.next.val>val){
//                 let ref = curr.next;
//                 curr.next = newNode;
//                 newNode.next = ref;
//                 this.length++
//                 return
//             }
//             curr=curr.next
//         }
//     }
//     addArray(arr){
//         for(let i=0;i<arr.length;i++){
//             this.addLast(arr[i]);
//         }
//     }
//     print(){
//         if(!this.head) return false
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr=curr.next;
//         }cr
//     }
//     reverse(){
//         if(!this.head) return false;
//         let curr = this.head;
//         let prev = null;
//         while(curr){
//             let nextNode = curr.next;
//             if(!prev){
//                 this.head = curr;
//             }
//             curr.next = prev;
//             prev = curr;
//             curr = nextNode;

//         }
//         this.tail = this.head;
//         this.head = prev;
        
//     }
//     deleteFirst(){
//         if(!this.head) return false;
//         if(this.length==1){
//             this.head = null;
//             this.tail= null;
//             this.length--;
//             return true
//         }else{
//             let oldHead = this.head;
//             this.head = this.head.next;
//             oldHead.next = null;
//             this.length--
//             return true
//         }

//     }

//     deleteLast(){
//         if(!this.head) return false;
//         if(this.length==1) return this.deleteFirst();
//         let curr = this.head;
//         while(curr.next && curr.next.next){
//             curr = curr.next;
//         }
//         this.tail = curr;
//         curr.next = null;
//         this.length--;
//         return true

//     }
//     deleteAtIndex(index){
//         if(index<0 || index>this.length-1) return false;
//         if(index==this.length-1) return this.deleteLast();
//         let curr = this.head;
//         let count = 0
//         let prev = null;
//         while(curr.next){
//             if(count == index){
//                 if(prev == null){
//                     return this.deleteFirst()
//                 }
//                 prev.next = curr.next;
//                 this.length--;

//             }
//             prev = curr;
//             curr =curr.next;
//             count++
//             this.length--
//         }
//     }
//     deleleteNthNode(n){
//         if(!this.head) return false;
//         if(n<0 || n>this.length-1) return false;
//         if(n==this.length-1) return this.deleteLast();
//         let curr = this.head;
//         let count = 0;
//         let prev = null
//         while(curr.next){
//             if(n ==count){
//                 if(!prev){
//                     this.head = this.head.next;
//                     this.length--;
//                     return true
//                 }
//                 prev.next = curr.next;
//                 this.length--
//                 return true;
//             }
//             prev =curr
//             curr= curr.next;
//             count++;
//         }
//     }

// }



// const list = new linkedList();
// list.addArray([1,2,3,4,5,6,67,8,89])



//console.log(list.addMiddle(555));
//console.log(list.addAfterNode(5,10));
//console.log(list.addBeforeNode(2,100));
//console.log(list.middleChange());
//list.reverse()
//list.insertSorted(5.5)
//list.addAfterNode(9,1010)


//Deletion operation

//console.log(list.deleteFirst());
//list.deleteLast()
//console.log(list.deleteAtIndex(8));
// list.deleleteNthNode(8)
// console.log(list.print());


// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//     }
// }

// class singleLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     addEnd(val){
//         const newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//             this.length++
//             return true;
//         }
//         let curr = this.head;
//         while(curr.next){
//             curr=curr.next;
//         }
//         curr.next = newNode;
//         this.tail =newNode;
//         this.length++;
//         return true
//     }
//     deleteBefore(val=4){
//         if(!this.head) return false;
//         if(this.head.val == val) return false
//         let curr = this.head;
//         let prev = null;
//         while(curr){
//             if(curr.next.val==val){
//                 if(!prev){
//                     let ref = this.head;
//                     this.head = curr.next;
//                     ref.next = null;
//                     this.length--
//                     return true
//                 }
//                 prev.next = curr.next;
//                 this.length--;
//                 return true;
//             }
//             prev = curr;
//             curr = curr.next
//         }
//     }

//     deleteAfter(val){
//         if(!this.head) return false;
//         let curr = this.head;
//         let proc = curr.next
//         while(curr.next){
//             if(curr.val===val){
//                 if(!curr.next.next){
//                     curr.next = null;
//                     this.tail = curr;
//                     this.length--
//                     return true
//                 }
//                 curr.next = curr.next.next;
//                 this.length--;
//                 return true
//             }
//             proc=proc.next
//             curr=curr.next
//         }
//     }
//     print(){
//         if(!this.head) {
//             console.log("Empty");
//             return;
//         } 
//         let curr = this.head;
//         while(curr){
//             console.log(curr.val);
//             curr=curr.next
//         }
//         return;
//     }
//     reverse(){
//         if(!this.head) return false;
//         let curr = this.head;
//         let prev = null;
//         let nextNode;
//         while(curr){
//             nextNode = curr.next;
//             curr.next = prev;
//             prev = curr;
//             curr = nextNode;
//         }
//         this.head = this.tail;
//         this.tail = prev;
//     }
    // reverseRecursive(curr = this.head, prev = null) {
    //     if (!curr) {
    //         return;
    //     }
    //     if (!curr.next) {
    //         this.tail = this.head;
    //         this.head = curr;
    //         curr.next = prev;
            
    //         return;
    //     }
    
    //     const nextNode = curr.next;
    //     curr.next = prev;
    //     this.reverseRecursive(nextNode, curr);
    // }
//     printlist(){
//         return this
//     }
// }

// const list =  new singleLinkedList();
// list.addEnd(1)
// list.addEnd(2)
// list.addEnd(3)
// list.addEnd(4)

// //list.deleteBefore()
// //list.deleteAfter(2)
// //list.reverse()
// list.reverseRecursive()
// list.print()
// console.log(list.printlist());

class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    addLast(val){
        const newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        let ref = this.tail
        this.tail.next = newNode;
         this.tail = newNode;
        newNode.prev = ref;
        this.length ++;
        return

    }
    addFirst(val){
        const newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            this.length++
            return
        }
        let ref = this.head;
        this.head = newNode;
        newNode.next = ref;
        ref.prev = newNode;
        this.length++
        return
    }

    addAfter(index,val){
        if(index<0 || index>this.length-1) return false;
        if(index==this.length-1) return this.addLast(val)
        const newNode = new Node(val);
    let curr = this.head;
    let count =0;
    while(curr.next){
        if(index === count){
            let ref = curr.next;
            curr.next = newNode;
            newNode.next = ref;
            newNode.prev = curr;
            if(!newNode.next){
                this.tail = newNode
            }
            this.length++;
            return true
        }
        curr=curr.next;
        count++
    }


        
    }
    prinList(){
        return this
    }
    print(){
        if(!this.head) return false;
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
        return
    }
    printReverse(){
        if(!this.head) return false;
        let curr = this.tail;
        while(curr){
            console.log(curr.val);
            curr=curr.prev;
        }
        return
    }
    deleteFirst(){
        if(!this.head) return false;
        if(this.length==1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return true
        }
        let currHeadd = this.head;
        this.head = currHeadd.next
        this.head.prev = null;
        this.length--;
        return true
    }

    deleteLast(){
        if(!this.head) return false;
        if(this.length==1){
            this.head = null;
            this.tail = null;
            this.length = 0;
            return true
        }
        let currTail = this.tail;
        this.tail = currTail.prev;
        this.tail.next = null;
        currTail.prev = null;
        this.length--;
        return true
    }

    delete(index){
        if(!this.head) return false;
        if(index<0 || index>this.length-1) return false;
        if(index==0) return this.deleteFirst()
        if(index==this.length-1) return this.deleteLast()
        let curr = this.head;
        let count = 0;
        let prev = null;
        while(curr.next){
            if(index == count){
                prev.next = curr.next;
                this.length--
                return true;
            }
            prev = curr;
            curr = curr.next;
            count++
        }
    }

    deleteAfter(index){
        if(!this.head) return false
        if(index<0 || index>=this.length-1) return false;
        if(index==this.length-2) return this.deleteLast();
        let curr = this.head;
        let count = 0;
        while(curr){
            if(count === index){
                curr.next = curr.next.next;
                this.length--;
                return true;
            }
            curr = curr.next;
            count++
        }
    }
    deleteBefore(index){
        if(!this.head) return false;
        if(index<=0 || index>this.length) return false;
        if(index == 1) return this.deleteFirst();
        if(index == this.length) return this.deleteLast();
        let curr = this.head;
        let count = 0;
        let prev = null
        while(curr){
            if(index == count+1){
                prev.next = curr.next;
                this.length--;
                return true;
            }
            prev = curr;
            curr = curr.next;
            count++
        }

    }
}

const list = new doublyLinkedList();
list.addLast(10)
list.addLast(20)
list.addLast(30)
list.addLast(40)
list.addLast(50)
//list.addAfter(0,100)
//console.log(list.prinList());
//list.printReverse()
//list.delete(4)
//list.deleteAfter(3)
list.deleteBefore(1)
list.print()
//list.print()