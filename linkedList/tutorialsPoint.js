class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    printAll(){
        let current = this.head;
        while(current){
            console.log(this.data);
            current = current.next;
        }
    }
    add(data) {
        const newNode = new Node(data);
        if (!this.head) {
           this.head = newNode;
           this.tail = newNode;
        } else {
           this.tail.next = newNode;
           this.tail = newNode;
        }
        this.length++;
        return this;
     }
}
list = new LinkedList()
console.log(list);
console.log(list.add(4));
console.log(list);
console.log(list.printAll());