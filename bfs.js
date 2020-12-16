const graph = require('./data').graph2

console.log('Traversing graph using BFS')
console.log('--------------------------')

console.log(graph)

// Design
// ------

// Pick a random starting vertex
// Add to result
// Add to queue

// While queue length > 0
  // Pop next vertex off queue
  // Explore vertex: for each adjacent vertex
  //   Add to result
  //   Add to queue
  // Add vertex to explored

const startingVertex = graph[0]
const result = [startingVertex.id]
const queue = [startingVertex.id]
const explored = []

while(queue.length > 0) {
  const vertexId = queue.pop()
  const vertex = graph.find(it=>it.id === vertexId)
  
  // Boundary condition
  if (explored.includes(vertex.id)) continue

  for (const adjacentVertexId of vertex.edges) {
    if (!result.includes(adjacentVertexId)) result.push(adjacentVertexId)
    queue.unshift(adjacentVertexId)
  }
  explored.push(vertex.id)
}

console.log('result', result)