//Binary search using recursion

// function search(arr,target){
//     let leftIndex = 0;
//     let rightIndex = arr.length-1;
//     return binarySearch(arr,target,leftIndex,rightIndex)
// }

// function binarySearch(arr,target,leftIndex,rightIndex){
// if(leftIndex>rightIndex){
//     return -1
// }
//     let middle = Math.floor((leftIndex+rightIndex)/2);
//         if(arr[middle]==target){
//             return middle;
//         }
//         if(target<arr[middle]){
//             rightIndex = middle-1
//         }else{
//             leftIndex = middle+1
//         }
//         return binarySearch(arr,target,leftIndex,rightIndex)
    
// }

// console.log(search([1,2,3,4,5,6,7,8,9],100));



//Find factorial using recursion

// function factorial(n){
//     if(n==0){
//         return 1;
//     }
//     return n*factorial(n-1)
// }
// console.log(factorial(10));

//delete node after a given value

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
            return true;
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
            this.tail = node;
            this.length++
            return true;

        }
    }
    delete(val){
        if(!this.head) return false;
        if(this.head.val==val){
            this.head = null;
            this.tail = null;
            this.length =0;
            return true
            
        }
        let curr = this.head;
        let prev=null;
        while(curr.next && curr.next.next){
            if(this.val==val){
                prev.next = curr.next;
                this.length--;
            }
            if(!curr.next && curr.next.val==val){
                prev.next == null;
                this.tail = prev;
                this.length--
                return true;
            }
            prev=curr;
            curr = curr.next
        }
    }
    print(){
        if(!this.head) return false
        let curr = this.head;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
        return;

    }
}
const list = new linkedList();
list.push(12)
list.push(34)
list.push(10)
list.push(15)
console.log(list.delete(12));
console.log(list.print());