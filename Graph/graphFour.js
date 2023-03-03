class graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    hasEdge(vertex1,vertex2){
        return(
            this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
        )
    }

    removeEdge(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    removeVertex(vertex){
        if(!this.adjacencyList[vertex]) return
        for(let adjacentVertices of this.adjacencyList[vertex]){
            this.removeEdge(vertex,adjacentVertices)
        }
        delete this.adjacencyList[vertex]
    }
    
    display(){
        for(let vertex in this.adjacencyList){
            console.log(vertex +'->' +[...this.adjacencyList[vertex]]);
        }
    }

   levelOrder(startingVertex){
    const visited = new Set()
    const queue = [startingVertex]
    visited.add(startingVertex)
    while(queue.length){
        let curr = queue.shift()
        console.log(curr);
        for(let neighbor of this.adjacencyList[curr]){
            if(!visited.has(neighbor)){
                visited.add(neighbor)
                queue.push(neighbor)
            }
        }
    }
   }

   dfs(startingVertex){
    const visited = new Set()
    const traverse = (vertex)=>{
        process.stdout.write(vertex+'->')
        visited.add(vertex)
        for(let neighbor of this.adjacencyList[vertex]){
            if(!visited.has(neighbor)){
                traverse(neighbor)
            }
        }
    }
    traverse(startingVertex)
   }
}

const g = new graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')

g.addEdge('A','B')
g.addEdge('B','C')

g.dfs('B')
