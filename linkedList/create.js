//creating Node in Linked List
class Node {
    constructor(data,next){
        this.data = data;
        this.next = next;
    }
}

//creating Linked List class
class LinkedList {
    constructor(){
        this.head = null;
        this.length = 0;
    }

    //get lenght
    getLength(){
        return this.length;
    }

    //check empty
    isEmpty(){
        return this.length === 0;
    }

    //Unshift  or add element to first
    unshift(data){
        this.head = new Node(data, this.head);
        this.length++;
        
    }

    //Get first element
    getFirst(){
        return this.head;
    }

    //Get last element
    getLast(){
        let currentNode = this.head;

        while(currentNode && currentNode.next){
            currentNode = currentNode.next;
        }
        return currentNode;
    }

    //Clear Linked list
    clear(){
        this.head = null;
        this.length=0;
    }

    //shift or remove element form first
    shift(){
        if(!this.head){
            return;
        }
        const oldHead = this.head;
        this.head = this.head.next;
        this.length--;
        return oldHead;
    }

    //pop of remove elemnt from last
    pop(){
        if(!this.head){
            return;
        }
        if(this.length == 1){
            return this.shift();
        }
        const last = this.getLast();
        let current = this.head;

        while(current.next !== last){
            current = current.next;
        }
        current.next = null;
        this.length--;
        return last;
        
    }

    //Push or add element to last
    push(data){
        if(!this.head){
            return this.unshift(data)
        }
        const last = this.getLast()
        last.next = new Node(data);
        this.length++
    }

    //get element at a specific index
    get(index){
        if(index > this.length || index < 0){
            return null;
        }
        let counter = 0;
        let current = this.head;
        while(counter < index){
            current = current.next;
            counter++;
        }
        return current;
    }

    // set or add element to a perticular index => the element present in the current node will lost
    set(index,data){
        if(!this.get(index)){
            return false;
        }
        const node = this.get(index);
        node.data = data;
        return true;
    }

    //remove element at perticular index and return the removed elemnet
    remove(index){
        if(!this.get(index)){
            return false;
        }
        if(index == 0){
            return this.shift();
        }

        const prevNode = this.get(index-1);
        const nodeToRemove = this.get(index);

        prevNode.next = prevNode.next.next;
        this.length--;
        return nodeToRemove;
    }

    // insert elemt at perticular index and elements after the node is shifted forwart
    insert(index,data){
        if(index > this.length || index < 0){
            return false;
        }
        if (index==0){
            this.unshift(data);
            return true;
        }
        const prevNode = this.get(index-1);
        const nextNode = this.get(index);

        prevNode.next = new Node(data, nextNode);
        this.length++;
        return true;
    }
}

const list = new LinkedList();
console.log("List is empty?",list.isEmpty());
console.log("Length of linked list?",list.getLength());
list.unshift(2)
list.unshift(5)
console.log("Length of linked list?",list.getLength());

// console.log("List is empty?",list.isEmpty());
// console.log("Length of linked list?",list.getLength());
// list.pop()
// list.push(5)
// list.unshift(5)
// console.log("Length of linked list?",list.getLength());
// console.log(list.insert(2,6));
// console.log(list.get(2));