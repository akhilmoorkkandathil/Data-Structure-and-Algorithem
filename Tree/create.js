class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class Tree{
    constructor(){
        this.root = null
    }
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root =newNode;;
            return;
        }
        let curr = this.root;
        while(true){
            if(val<curr.val){
                if(!curr.left) {
                    curr.left = newNode;
                    return;
                }
                curr = curr.left
            }else{
                if(!curr.right) {
                    curr.right = newNode;
                    return;
                }
                curr = curr.right
            }
        }
    }
    search(root,val){
        if(!root) return false
        if(root.val == val) return true
        if(val<root.val) return this.search(root.left,val)
        return this.search(root.right,val) 
    }

    preOrder(root){
        if(!root) return false;
        const result = [];
        result.push(root.val)
        if(root.left) result.push(...this.preOrder(root.left));
        
        if(root.right) result.push(...this.preOrder(root.right));
        return result
    }
    inOrder(root){
        if(!root) return false;
        const result = [];
        
        if(root.left) result.push(...this.inOrder(root.left));
        result.push(root.val)
        if(root.right) result.push(...this.inOrder(root.right));
        return result
    }
    postrder(root){
        if(!root) return false;
        const result = [];
        
        if(root.left) result.push(...this.postrder(root.left));
        if(root.right) result.push(...this.postrder(root.right));
        result.push(root.val)
        return result
    }
    levelOrder(){
        let queue = [];
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift();
            console.log(curr.val);
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
    }

    min(root){
        if(!root.left) return root.val;
        return this.min(root.left);
    }
    max(root){
        if(!root.right) return root.val;
        return this.max(root.right);
    }
    delete(val){
        this.root = this.deleteNode(this.root,val);
    }
    deleteNode(root,val){
        if(!root) return root;
        if(val < root.val){
            root.left = this.deleteNode(root.left,val)
        }else if(val>root.val){
            root.right = this.deleteNode(root.right,val)
        }else{
            if(!root.left && !root.right){
                return null;
            }
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }
            root.val = this.min(root.right);
            root.right = this.deleteNode(root.right,root.val);
        }
        return root
    }
}
//[20,10,66,55,34,23,23]
const myTree = new Tree();
myTree.insert(20);
myTree.insert(10)
myTree.insert(5);
myTree.insert(15)
myTree.insert(34);
myTree.insert(28)
myTree.insert(40)
myTree.insert(22);
myTree.insert(31)
myTree.insert(36)
myTree.insert(42)
// console.log(myTree.search(myTree.root,56));
// console.log(myTree.preOrder(myTree.root));
// console.log(myTree.inOrder(myTree.root));
// console.log(myTree.postrder(myTree.root));
myTree.levelOrder()
console.log("============");
// console.log(myTree.max(myTree.root));
// console.log(myTree.min(myTree.root));

console.log(myTree.delete(34));
myTree.levelOrder()
