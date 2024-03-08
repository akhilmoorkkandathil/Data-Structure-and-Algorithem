class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a node to the end of the linked list
    addNode(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to reverse the linked list using recursion
    reverseRecursively(current) {
        // Base case: if current node or next node is null, return current node
        if (!current || !current.next) {
            return current;
        }

        // Recursively reverse the rest of the linked list
        const reversedHead = this.reverseRecursively(current.next);

        // Reverse the links
        current.next.next = current;
        current.next = null;

        // Return the new head of the reversed linked list
        return reversedHead;
    }

    // Method to print the reversed linked list
    printReversed() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage
let linkedList = new LinkedList();
linkedList.addNode(1);
linkedList.addNode(2);
linkedList.addNode(3);
linkedList.addNode(4);

console.log("Original linked list:");
linkedList.printReversed();

// Reverse the linked list using recursion
linkedList.head = linkedList.reverseRecursively(linkedList.head);

console.log("Reversed linked list:");
linkedList.printReversed();
