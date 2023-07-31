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

        delete this.adjacencyList[ vertex ];
    }

    recursiveDepthFirstSearch(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        function dfs(vertex) {

            if(!vertex) return null;

            visited[ vertex ] = true;
            result.push(vertex);

            adjacencyList[ vertex ].forEach(neighbour => {
                if(!visited[ neighbour ]) {
                    return dfs(neighbour);
                }
            });
        }

        dfs(start);

        return result;

    }

    iterativeDepthFirstSearch(start) {
        const stack = [ start ];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[ start ] = true;

        while(stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[ currentVertex ].forEach(neighbour => {
                if(!visited[ neighbour ]) {
                    visited[ neighbour ] = true;
                    stack.push(neighbour);

                }
            });
        }

        return result;

    }

    breadthFirstSearch(start) {

        const queue = [ start ];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[ start ] = true;

        while(queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[ currentVertex ].forEach(neighbour => {
                if(!visited[ neighbour ]) {
                    visited[ neighbour ] = true;
                    queue.push(neighbour);
                }
            });
        }
        return result;
    }
}

const g = new Graph();

// graph.addVertex("Aspen");
// graph.addVertex("Dallas");
// graph.addVertex("Tokyo");

// graph.addEdge("Aspen", "Dallas");
// graph.addEdge("Tokyo", "Aspen");

// graph.removeEdge("Aspen", "Dallas");

// graph.removeVertex("Dallas")

// console.log(graph.adjacencyList);

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// console.log(g.recursiveDepthFirstSearch("A"));
// console.log(g.iterativeDepthFirstSearch("A"));
console.log(g.breadthFirstSearch("A"));