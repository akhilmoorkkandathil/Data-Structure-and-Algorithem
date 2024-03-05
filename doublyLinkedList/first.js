class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    isEmpty(){
        return this.length === 0;
    }
    getSize(){
        return this.length;
    }
    append(data){
        const node = new Node(data);
        if(this.isEmpty()){
            this.head = node;
            this.tail = node;
        }else{
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++
    }
    printForward(){
        if(this.isEmpty()){
            console.log("This list is empty");
        }else{
            let curr = this.head;
            while(curr){
                console.log(curr.data);
                curr=curr.next;
            }
        }
    }
    printBackward(){
        if(this.isEmpty()){
            console.log("This list is empty");
        }else{
            let curr = this.tail;
            while(curr){
                console.log(curr.data);
                curr = curr.prev;
            }
        }
    }
    findMiddle(){
        if(this.isEmpty){
            return false;
        }
        let curr = this.head;
        let faster = this.head;
        while(faster && faster.next){
            curr=curr.next;
            faster=faster.next.next;
        }
        return curr.data;
    }
}

const list = new DoublyLinkedList()
list.append(4)
list.append(5)
list.append(6)
list.printForward()
console.log(list.findMiddle());