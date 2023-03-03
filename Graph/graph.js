
class graph{
    constructor(){
          this.adjacencyList ={}
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
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }

    bfs(){
        
    }
}

const g = graph()
g.addVertex('A')
g.addVertex('B')

g.addEdge('A','B')
g.addEdge('C','B')