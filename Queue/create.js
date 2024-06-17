
// create node with val and next property
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}
//creat queue class with first last and length propery
//write enqueue dequeue methodes
class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.length = 0
    }

    //create a newNode
    // add to last;
    //(no first) make newNode as first and last
    //else add it into the last of the node
    enqueue(val){
        const newNode = new Node(val);
        if(!this.first){
            this.first =newNode;
            this.last = newNode;
            this.length++;
            return true
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length++;
        return true
    }
    // remove form the first
    // store the first into a temp varialble
    // make the this.first.next as first node;
    //disconnect the fist node by making it pointer into null
    dequeue(){
        if(!this.last) return false;
        const temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
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