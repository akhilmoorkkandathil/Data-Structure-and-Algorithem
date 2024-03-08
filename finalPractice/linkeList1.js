class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class linkedList{
    constructor(){
        this.head;
        this.tail;
        this.length=0;
    }
    addBignning(val){
        const node = new Node(val);
        if(!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
            return true
        }
        let ref = this.head;
        this.head = node;
        node.next = ref;
        return true
    }

    addEnd(val){
        const node = new Node(val);
        if(!this.head){
            this.addBignning(val);
        }
        let curr = this.head;
        while(curr.next){
            curr=curr.next;
        }
        curr.next = node;
        this.tail = node;
        this.length++
        return true;
    }
    
    add(index, val) {
        let node = new Node(val);
        if (index < 0 || index > this.length) return false;
        let curr = this.head;
        
        if (index === 0) {
            this.addBignning(val);
            return true;
        }else if (index === this.length) {
            this.addEnd(val);
            return true;
        } else {
            for (let i = 0; i < index - 1; i++) {
                curr = curr.next;
            }
            node.next = curr.next;
            curr.next = node;
            this.length++;
            return true;
        }
    }
    deleteFirst(){
        if(!this.head) return false;
        let curr = this.head;
        if(!curr.next){
            this.head = null;
            this.tail =null
            this.length=0
            return true;
        }
        while(curr.next){
            this.head = curr.next;
            curr.next =null;
            this.length--;
            return true;
        }
        


    }
    deleteEnd(){
        if(!this.head) return false;
        if(this.length==1) return this.deleteFirst();
        let curr = this.head;
        while(curr.next && curr.next.next){
            curr = curr.next;
        }
        this.tail = curr.next;
        curr.next.next =null;
        this.length--
        return true

    }

    delete(index){

    }

    print(){
        return this
    }
    deleteMiddleAfter(){
        if(!this.head) return false;
        let slow = this.head;
        let fast = this.head;
        let prev = slow;
        while(fast.next && fast.next.next){
            prev = slow;
            slow = slow.next;
            fast = fast.next.next;
        }
        let ref;
        if (prev === null) {
            // If 'prev' is null, the middle is the first node
            this.head = this.head.next;
        } else {
         ref= prev.next
            // Otherwise, remove the node before the middle
            prev.next = prev.next.next;
        }
        this.length--;
        return ref;
    }
}

const list = new linkedList()
console.log(list.add(0,7));
list.add(1,50)
list.add(2,55)

// list.deleteFirst()
// list.deleteFirst()
// list.deleteFirst()
console.log(list.deleteMiddleAfter());
console.log(list.print());
//list.deleteEnd()

