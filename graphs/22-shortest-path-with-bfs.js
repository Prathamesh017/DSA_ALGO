// https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance
/*This is similar to 21 , but here unit distance is constant 1 
Pretty Easy(once understood 21)
 */

function shortestPath(edges,src,noOfVertices){
  //make adjacenylist
  const adjacentyList = new Array(noOfVertices).fill().map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const u = edges[i][0];
    const v = edges[i][1];
    adjacentyList[u].push(v);
    adjacentyList[v].push(u);

  }
  console.log(adjacentyList);

  const distanceArr = new Array(noOfVertices).fill(Number.MAX_SAFE_INTEGER);
  distanceArr[src]=0;
  const stack=[];
  stack.push(src);
  while(stack.length>0){
    const ele=stack.shift();
    const size=adjacentyList[ele].length;
    for (let i = 0; i <size; i++) {
      const neighbour = adjacentyList[ele][i];
      if(distanceArr[neighbour]===Number.MAX_SAFE_INTEGER){
        distanceArr[neighbour]=distanceArr[ele]+1;
        stack.push(neighbour);
      }
    }
  }
  for (let i = 0; i <distanceArr.length; i++) {
    if(distanceArr[i]===Number.MAX_SAFE_INTEGER){
      distanceArr[i]=-1;
    }
  }
  return distanceArr;

}




const adjacenyList=[  [ 1, 5 ], [ 1, 6 ],
[ 2, 0 ], [ 3, 3 ],
[ 4, 0 ], [ 4, 6 ],
[ 5, 3 ], [ 5, 4 ],
[ 6, 5 ], [ 6, 6 ]];
const ans=shortestPath(adjacenyList,4,7);
console.log(ans);