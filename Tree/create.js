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

    //insert
    insert(val){
        let newNode = new Node(val)
        if(!this.root){
            this.root =newNode;
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
    //contain
    search(root,val){
        if(!root) return false;
        if(root.val == val) return true;
        return this.search(root.left,val) || this.search(root.right,val);
    }
    min(root){
        if(!root.left) return root.val;
        return this.min(root.left);
    }
    max(root){
        if(!root.right) return root.val;
        return this.max(root.right);
    }
    //Traversals
    preOrder(root){
        if(!root) return false;
        console.log(root.val);
        this.preOrder(root.left)
        this.preOrder(root.right);
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

    //using stack dfs
    dfs(){
        if(!this.root) return [];
        let stack = [this.root];
        let result = []
        while(stack.length){
            let curr = stack.pop();
            result.push(curr.val)
            if(curr.right){
                stack.push(curr.right);
            }
            if(curr.left){
                stack.push(curr.left);
            }
        }
        return result
    }
    //DFS using recursion
    dfsRecursion(root){
        if(!root) return [];
        let left = this.dfs(root.left);
        let right = this.dfs(root.right);
        return [root.val,...left,...right];
    }

    //using queue bfs
    bfs(){
        if(!this.root) return []
        let queue = [this.root];
        let result = []
        while(queue.length){
            //note it is shift
            let curr = queue.shift();
            result.push(curr.val)
            if(curr.left){
                queue.push(curr.left);
            }
            if(curr.right){
                queue.push(curr.right);
            }
        }
        return result
    }
    //bfs using recursion

// Count Nodes
    countNodes(root){
        let left = (node) => {
            if(!node) return 0
            return left(node.left)+1
        }
        let right = (node)=>{
            if(!node) return 0
            return right(node.right)+1
        }
        let trans = (node) => {
            let Lleng = left(node);
            let Rleng = right(node);
            if(Lleng == Rleng) return Math.pow(2,Lleng)-1
            return trans(node.left)+trans(node.right)+1
        }
        return trans(root)
    }

    //BF search 
    bfsearch(root,val){
        if(!root) return false;
        let queue = [root];
        while(queue.length){
            let curr = queue.shift();
            if(curr.val == val) return true;
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right)
        }
    return false;
    }
    //Death first search recursion
    searchRecursion(root,val){
        if(!root) return false;
        if(root.val === val) return true;
        return this.searchRecursion(root.left,val) || this.searchRecursion(root.right,val)
    }
    sum(root){
        if(!root) return 0;
        let sum = 0;
        let queue = [root];
        while(queue.length){
            let curr = queue.shift();
            sum+=curr.val;
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right)
        }
    return sum
    }
    recursiveSum(root){
        if(!root) return 0;
        return root.val + this.recursiveSum(root.left)+this.recursiveSum(root.right)
    }

    maxValue(root){
        if(!root) return false;
        let queue = [root];
        let max = -Infinity;
        while(queue.length){
            let curr = queue.shift();
            if(curr.val>max) max = curr.val;
            if(curr.left) queue.push(curr.left);
            if(curr.right) queue.push(curr.right)
        }
    return max

    }
    minValueRecursively(root){
        if(!root) return Infinity;
        const Lmin = this.minValueRecursively(root.left);
        const Rmin = this.minValueRecursively(root.right);
        return Math.min(root.val,Lmin,Rmin);
    }

    maxPathSum(root){
        if(!root) return -Infinity;
        if(!root.left && !root.right) return root.val;
        const maxPathSum = Math.max(this.maxPathSum(root.left),this.maxPathSum(root.right));
        return root.val+maxPathSum;

    }

    deleteNode(root,val){
        if(!root) return false;
        if(root.val === val){
            if(!root.left && !root.right) return null;
            if(!root.left) return root.right;
            if(!root.right) return root.left;
            let tempNode = root.right;
            while(tempNode.left){
                tempNode = tempNode.left;
            }
            root.val = tempNode.val;
            root.right = this.deleteNode(root.right,tempNode.val);
            return root;
        }else if(val<root.val){
            root.left = this.deleteNode(root.left,val);
            return root;
        }else{
            root.right = this.deleteNode(root.right,val);
            return root
        }
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
console.log(myTree.bfs());
// myTree.deleteNode(myTree.root,22)
// myTree.deleteNode(myTree.root,10)

// myTree.deleteNode(myTree.root,34)
// myTree.deleteNode(myTree.root,31)

// console.log(myTree.bfs());
console.log(myTree.maxPathSum(myTree.root));

//console.log(myTree.search(myTree.root,500));
//console.log(myTree.search(myTree.root,42));
// console.log(myTree.preOrder(myTree.root));
// console.log(myTree.inOrder(myTree.root));
// console.log(myTree.postrder(myTree.root));
//console.log(myTree.dfs());
//console.log("============");
//console.log(myTree.bfs());
//console.log(myTree.bfs(myTree.root));
// console.log(myTree.max(myTree.root));
// console.log(myTree.min(myTree.root));

//console.log(myTree.delete(34));
//myTree.levelOrder()
//console.log("============");

//console.log(myTree.countNodes(myTree.root));
// console.log(myTree.search(myTree.root,442));
// console.log(myTree.search(myTree.root,422));
// console.log(myTree.searchRecursion(myTree.root,10));
// console.log(myTree.sum(myTree.root));
// console.log(myTree.recursiveSum(myTree.root));

// console.log(myTree.maxValue(myTree.root));
// console.log(myTree.minValueRecursively(myTree.root));
// console.log(myTree.maxRootLeaf(myTree.root));

//console.log(myTree.bfs());
// myTree.deleteNode(myTree.root,36)
// console.log(myTree.bfs());

