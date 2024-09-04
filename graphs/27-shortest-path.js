//https://www.geeksforgeeks.org/problems/shortest-path-in-weighted-undirected-graph/1
/*
given a src and target find the shortest path possible
*/

function shortestPath(src,target,edges){
  //convert into adjacency list
  const adjacentyList = new Array(edges.length).fill().map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const u= edges[i][0];
    const v= edges[i][1];
    const weight= edges[i][2];
    adjacentyList[u].push([v,weight]);
  }
  let parentPath=new Array(edges.length).fill(Number.MAX_SAFE_INTEGER);
  
  const distanceArr = new Array(adjacentyList.length).fill(Number.MAX_SAFE_INTEGER);
  let ans=Number.MAX_SAFE_INTEGER;
  const queue=[];
  distanceArr[src]=0;
  queue.push(src);
  while(queue.length>0){
    const val=queue.shift();
    let valWeight=distanceArr[val];
    let size=adjacentyList[val].length;
    for (let i = 0; i <size; i++) {
      let neighbour=adjacentyList[val][i][0];
      let weight=adjacentyList[val][i][1];
      if(neighbour===target){
        ans=Math.min(ans,weight+valWeight);
        parentPath[neighbour]=val;
      }else if(distanceArr[neighbour]===Number.MAX_SAFE_INTEGER){
        distanceArr[neighbour]=valWeight+weight;
        queue.push(neighbour);
        parentPath[neighbour]=val;
      }else{
        if(distanceArr[neighbour]>valWeight+weight){
          parentPath[neighbour]=val;
        }
        distanceArr[neighbour]=Math.min(distanceArr[neighbour],valWeight+weight)
        queue.push(neighbour);
        

      }
    }
  }
  let finalAns=[];
  if(parentPath[target]===Number.MAX_SAFE_INTEGER){
    finalAns.push(-1);
  }else{
    let latest=target;
    while(latest!==1){
      finalAns.push(latest);
      latest=parentPath[latest];
    }
    finalAns.push(1);
  }
  return finalAns.reverse();

}

const edges=[[1, 2, 2], [2, 5, 5], [2, 3, 4], [1, 4, 1], [4, 3, 3], [3, 5, 1]];
const ans=shortestPath(1,5,edges);
console.log(ans);