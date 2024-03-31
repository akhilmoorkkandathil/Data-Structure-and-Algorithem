//Impliment graph using adjescency List
class Graph{
    constructor(){
        this.adjescencyList = {}
    }
    addVertex(vertex){
        if(!this.adjescencyList[vertex]){
            this.adjescencyList[vertex] = new Set()
        }
    }
    addEdge(vertex1,vertex2){
        if(!this.adjescencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjescencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjescencyList[vertex1].add(vertex2);
        this.adjescencyList[vertex2].add(vertex1);
    }
    hasEdge(vertex1,vertex2){
        return (
            this.adjescencyList[vertex1].has(vertex2) && this.adjescencyList[vertex2].has(vertex1)
        )
    }
    removeEdge(vertex1,vertex2){
        this.adjescencyList[vertex1].delete(vertex2);
        this.adjescencyList[vertex2].delete(vertex1);
    }
    removeVertex(vertex){
        if(!this.adjescencyList[vertex]){
            return
        }
        for(let adjescentvertex of this.adjescencyList[vertex]){
            this.removeEdge(vertex,adjescentvertex)
        }
        delete this.adjescencyList[vertex];
    }
    display(){
        for(let vertex in this.adjescencyList){
            //console.log(vertex,this.adjescencyList[vertex]);
            console.log(vertex + " => " + [...this.adjescencyList[vertex]])
        }
    }

    // Breadth first searach
    bfs(startNode){
        const queue = [startNode];
        const visited = {}
        let keys = Object.keys(this.adjescencyList);
        for(let v of keys){
            visited[v] = false;
        }
        visited[startNode] = true;
        let bfs = []
        while(queue.length){
            const curr = queue.shift();
            bfs.push(curr)
            for(let neighbor of this.adjescencyList[curr]){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return bfs
    }
    dfs(startNode){
        const stack = [startNode];
        const visited = {};
        let keys = Object.keys(this.adjescencyList);
        for(let v of  keys){
            visited[v] = false;
        }
        visited[startNode] = true;
        let dfsResult = []
        while(stack.length){
            const curr = stack.pop();
            dfsResult.push(curr);
            for(let neighbor of this.adjescencyList[curr]){
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            }
        }
        return dfsResult;
    }
}

const myGraph = new Graph();
myGraph.addVertex("a")
myGraph.addVertex("b")
myGraph.addVertex("c")
myGraph.addVertex("d")
myGraph.addVertex("e")
myGraph.addEdge("a","b")
myGraph.addEdge("a","d")
myGraph.addEdge("b","e")
myGraph.addEdge("b","c")
myGraph.addEdge("e","c")

//myGraph.removeVertex("a")
myGraph.display()
console.log(myGraph.adjescencyList);
//console.log(myGraph.hasEdge("a","c"));
console.log(myGraph.bfs("a"));
console.log(myGraph.dfs("a"));
