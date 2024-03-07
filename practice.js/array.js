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
    append(val){
        const node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node;
            this.length++
        }else{
            let curr = this.head;
            while(curr.next){
                curr=curr.next;
            }
            curr.next = node;
            this.tail = node;
            this.length++
        }
    }
    print(){
        return this
    }

}


const list = new linkedList()
function ArayToLinkedlist(arr){
    arr.forEach(element => {
        list.append(element)
    });
}
ArayToLinkedlist([1,2,3,4,5])
console.log(list.print());