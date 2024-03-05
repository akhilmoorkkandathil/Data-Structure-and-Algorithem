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

class Node {
    constructor(val){
        this.val = val;
         this.next = null
    }
}
class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.length = 0;
    }
    
    push(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.length++;
        }else{
            const curr = this.head;
        while(curr.next){
            curr = curr.next;
        }
        curr.next = node;
        this.length++
        
    }
    return true
    }

    print(){
        if(!this.head){
            console.log("List is empty");
        }
        else{
            let str = "";
        let curr = this.head;
        while(curr){
            str+=curr.val;
        }
        console.log(str);
        }
    }
}

const list = new SinglyLinkedList()
list.print()
console.log(list.push(4));
list.print()