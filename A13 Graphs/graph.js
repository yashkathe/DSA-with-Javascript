class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {

        if(!this.adjacencyList[ vertex ]) {
            this.adjacencyList[ vertex ] = [];
        }
    }

    addEdge(v1, v2) {
        this.adjacencyList[ v1 ].push(v2);
        this.adjacencyList[ v2 ].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[ v1 ] = this.adjacencyList[ v1 ].filter(
            v => v !== v2
        );

        this.adjacencyList[ v2 ] = this.adjacencyList[ v2 ].filter(
            v => v !== v1
        );
    }

    removeVertex(vertex) {
        while(this.adjacencyList[ vertex ].length) {
            const adjacentVertex = this.adjacencyList[ vertex ].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex]
    }

}

const graph = new Graph();

graph.addVertex("Aspen");
graph.addVertex("Dallas");
graph.addVertex("Tokyo");

graph.addEdge("Aspen", "Dallas");
graph.addEdge("Tokyo", "Aspen");

// graph.removeEdge("Aspen", "Dallas");

graph.removeVertex("Dallas")

console.log(graph.adjacencyList);
