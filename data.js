const graph1 = {
  edges: [
    1,2,3,4,5,6,7,8,9,10
  ],
  verticies: [
    [1,2],[1,4],[2,3],[2,8],[2,7],[2,5],[4,3],[3,10],[3,9],[8,7],[8,5],[7,5],[5,6]
  ],
}

const graph2 = [
  {
    id: 1,
    edges: [2,4]
  },
  {
    id: 2,
    edges: [1,3,7,8,5]
  }, 
  {
    id: 3,
    edges: [2,4,9,10]
  },
  {
    id: 4,
    edges: [1,2,3]
  },
  {
    id: 5,
    edges: [6,7,8,2]
  },
  {
    id: 6,
    edges: [5]
  },
  {
    id: 7,
    edges: [8,3,5]
  },
  {
    id: 8,
    edges: [2,5,7]
  },
  {
    id: 9,
    edges: [3]
  },
  {
    id: 10,
    edges: [3]
  },
]

module.exports = { 
  graph1,
  graph2
}