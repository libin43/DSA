class gph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = new Set()
        }
    }

    addEdge(vertex1,vertex2,isBidirectional){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        if(isBidirectional){
            this.adjacencyList[vertex2].add(vertex1)
        }
       
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
        if(!this.adjacencyList[vertex]){
            return
        }
        else{
            for(let adjacentVertices of this.adjacencyList[vertex]){
                this.removeEdge(vertex,adjacentVertices)
            }
            delete this.adjacencyList[vertex]
        }
    }

    display(){
       for(let vertex in this.adjacencyList){
        console.log(vertex + '->'+ [...this.adjacencyList[vertex]]);
       }
       
    }

    levelOrder(startingVertex){
        let visited = new Set()
        const queue = [startingVertex]
        visited.add(startingVertex)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr);
            const neighbors = this.adjacencyList[curr]
            for(let neighbor of neighbors){
                if(!visited.has(neighbor)){
                    visited.add(neighbor)
                    queue.push(neighbor)
                }
            }
        }
    }

    DFS(startingVertex){
        const visited = new Set()
        const traverse=(vertex)=>{
            process.stdout.write(vertex+'->')
            visited.add(vertex)
            const neighbors = this.adjacencyList[vertex]
            for(let neighbor of neighbors){
                if(!visited.has(neighbor)){
                    traverse(neighbor)
                }
            }
        }
        traverse(startingVertex)
    }
}

const graph = new gph()
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdge('A','B',true)
graph.addEdge('B','C',true)

// console.log(graph.hasEdge('A','B'));


graph.DFS('B')
