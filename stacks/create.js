class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.top = null;
        this.length = 0
    }
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
