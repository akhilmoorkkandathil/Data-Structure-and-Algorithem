class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.lenght = 0
    }
    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first =newNode;
            this.last = newNode;
            this.lenght++;
            return true
        }
        this.last.next = newNode;
        this.last = newNode;
        this.lenght++;
        return true
    }
    dequeue(){
        if(!this.last) return false;
        const temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.lenght--;
        return true
    }
    print(){
        if(!this.first){
            console.log("Empty");
            return
        }
        let curr = this.first;
        while(curr){
            console.log(curr.val);
            curr = curr.next;
        }
        return
    }
}

const myQueue = new Queue();
myQueue.enqueue(10)
myQueue.enqueue(20)
myQueue.enqueue(30)
myQueue.enqueue(40)
myQueue.enqueue(50)
myQueue.enqueue(60)
myQueue.dequeue()
myQueue.dequeue()
myQueue.dequeue()

myQueue.print()