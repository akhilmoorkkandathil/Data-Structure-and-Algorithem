class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size == 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node;
        }else{
            let curr = this.head;
            while(curr.next !== null){
                curr=curr.next;
            }
            curr.next=node;
        }
        this.size++

    }
    print(){
        if(this.isEmpty()){
            console.log("List is empty");
        }else{
            let curr = this.head;
            while(curr){
                console.log(curr.value)
                curr=curr.next;
            }
        }
    }
}

const list = new LinkedList();
console.log("The list is empty?",list.isEmpty());
console.log("Size of list?",list.getSize());
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.print()