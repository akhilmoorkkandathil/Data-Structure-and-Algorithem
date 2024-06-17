//creat node with val and next property
class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

// create a stack class with top and length property;
// write code for push,pop
class Stack{
    constructor(){
        this.top = null;
        this.length = 0
    }
    //create nod
    //if (no lenght) add top
    //else place the new node at the top of the stack
    push(val){
        const newNode = new Node(val);
        if(this.length === 0){
            this.top = newNode;
            this.length++
            return true
        }
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return true
    }
    //if(not top) return false;
    //else place top into a reference,make top.next as new top and break ref.next link by null
    //
    pop(){
        if(!this.top) return false;
        let ref = this.top;
        this.top = this.top.next;
        ref.next = null;
        this.length--
        return true
    }
    print(){
        if(!this.top){
            console.log("Empty");
            return
        }
        let curr = this.top;
        while(curr){
            console.log(curr.val);
            curr= curr.next
        }
    }
}

const stack = new Stack();
stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)

stack.pop()
stack.print()
