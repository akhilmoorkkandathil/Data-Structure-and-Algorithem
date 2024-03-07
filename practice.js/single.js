class Node {
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
    toLinkedList(arr){
        let node = new Node(arr[0]);
        this.head = node;
        let curr = this.head;
        let i=1
        for(;i<arr.length-1;i++){
             node = new Node(arr[i]);
            curr.next = node;
            curr = curr.next;
        }
        node= new Node(arr[i]);
        this.tail = node;
        curr.next = node;
        return this
    }
    addEnd(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++
            return true
        }else{
            let curr = this.head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = node;
            this.tail = node;
            this.length++
            return true
        }
    }
    addBignning(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++;
            return true;
        }else{
            let temp = this.head;
            this.head = node;
            this.head.next = temp;
            this.length++;
            return true

        }
    }
    delete(val){
        let curr = this.head;
        let prev = null;
        while(curr){
            if(curr.val == val){
                if(prev == null){
                    this.head = curr.next;
                    if(curr.next == null){
                        this.tail = curr;
                    }
                }else{
                    prev.next = curr.next;
                    this.length--;
                    if(curr.next == null){
                        this.tail == prev;
                    }

                }
                return true
                
            }
            prev=curr;
            curr=curr.next;
        }
        return false;
        
    }
    get(index){
        let curr = this.head;
        let count =0 ;
        while(curr){
            if(count==index){
                return curr.val;
            }
            curr =  curr.next;
            count++
        }
    }
    set(index,data){
        if(index<0 || index>=this.length) return false;
        let curr = this.head;
        let count = 0;
        while(curr){
            if(index==count){
                curr.val=data;
                return true
            }
            count++
            curr= curr.next;
        }
    }
    middle(){
        if(!this.head) return false;
        let slow = this.head;
        let fast = this.head;
        while(fast.next && fast.next.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        return slow.val;
    }
    insertBefore(index,data){
        if(index<0 || index>=this.length) return false;
       const node = new Node(data);
       let count = 0;
       let curr = this.head;
       let prev = null;
       while(curr){
        if(index == 0){
            let ref = this.head;
            this.head = node;
            this.head.next = ref;
            this.length++
            return true
        }else{
            if(index==count){
                prev.next=node;
                node.next=curr;
                this.length++;
                return true
            }
        }
        count++;
        prev = curr;
        curr=curr.next
       }
    }
    insertAfter(index,data){
        if(index<0 || index>this.length) return false
        const node = new Node(data);
        let curr = this.head;
        let count = 0;
        while(curr.next){
            if(count==index){
                let ref = curr.next;
                curr.next = node;
                node.next = ref;
                this.length++
                return true;
            }
            count++;
            curr=curr.next;
        }
        if(curr.next==null ){
            curr.next = node;
            this.tail = node;
            this.length++;
            return true
        }
        return false;
    }
    reverse(){
        let prev = null;
        let curr = this.head;
        let next = null;
        while(curr){
            next = curr.next;
            curr.next=prev;
            prev=curr;
            curr=next

        }
        this.tail = this.head
        this.head = prev
    }
    removeDupicates(){
        let curr = this.head;
        let prev = null;
        while(curr.next){
            if(curr.val==curr.next.val){
                curr.next=curr.next.next;
                console.log("removed");
                curr=prev
                this.length--
            }
            prev = curr;
            curr = curr.next
        }
    }
    print(){
        return this;
    }

}
const list = new linkedList()
// console.log(list.toLinkedList([1,2,3,4,5]));
// list.addEnd(1)
// list.addEnd(2)
// list.addEnd(3)
// list.addEnd(4)
// list.addEnd(10)
// list.addBignning(10)
list.addEnd(1)
list.addEnd(2)
list.addEnd(2)
list.addEnd(2)
list.addEnd(4)
list.addEnd(5)
list.addEnd(5)
list.addEnd(6)

//list.insertBefore(5,100)
//console.log(list.middle());
//list.delete(2)
//list.set(4,100)
//console.log(list.insertAfter(5,100));
//console.log(list.head.next.next.next.next.next.next);
//list.reverse()
list.removeDupicates()
console.log(list.print());
//console.log(list.get(3));

