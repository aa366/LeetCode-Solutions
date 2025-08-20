
// is a non-linear data structure that models relationships between objects.
// it consists of two main components vertices (Nodes ) & Edges
// vertices (Nodes)=> individual entities within the graph
// edges => vertices,signifying a relationship or connection between them

// adjacency matrix => how connect with whom in graph
// adjacency List => a List show connections  like A:["B","E"]

class Graph {

    adjacencyList;
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vtx) {
        if (!this.adjacencyList[vtx]) {
            this.adjacencyList[vtx] = [];
            return true
        }
        return false
    }
    addEdge(vtx1, vtx2) {
        if (
            !this.adjacencyList[vtx1].includes(vtx2) ||
            !this.adjacencyList[vtx2].includes(vtx1)
        ) {


            this.adjacencyList[vtx1].push(vtx2)
            this.adjacencyList[vtx2].push(vtx1)
            return true
        }
        return false
    }
    removeEdge(vtx1, vtx2) {
        if (
            this.adjacencyList[vtx1].includes(vtx2) ||
            this.adjacencyList[vtx2].includes(vtx1)
        ) {

            console.log("worjing");

            this.adjacencyList[vtx1] = this.adjacencyList[vtx1].filter((v) => v !== vtx2)
            this.adjacencyList[vtx2] = this.adjacencyList[vtx2].filter((v) => v !== vtx1)
            return true
        }
        return false
    }
    removeVertex(vtx){
        if (!this.adjacencyList[vtx]) {
            return undefined
        }
        for (const neighbor of this.adjacencyList[vtx]) {
            this.adjacencyList[neighbor] = 
            this.adjacencyList[neighbor]
            .filter((v)=>v !==vtx )
        }
        delete this.adjacencyList[vtx]
        return this
    }
}
[].filter

const g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")

g.addEdge("A", "B")
g.removeEdge("A", "B")

console.log(g);




