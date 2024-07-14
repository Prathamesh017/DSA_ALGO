function createAdjacencyList(nodes,edges) {
  const list = new Array(nodes).fill(null).map(() => []);

  edges.forEach(([u, v]) => {
      // Since the graph is undirected, push the edges in both directions
      list[u].push(v);
      list[v].push(u);
  });

  return list;
}

// Undirected Graph of 4 nodes
const nodes= 4;
const edges = [[0, 1], [0, 2], [1, 2], [2, 3], [3, 1]];
const list = createAdjacencyList(nodes,edges);
for(let x=0;x<list.length;x++){
  console.log(`${x} -> ${list[x].join(' ')}`);
  
}
