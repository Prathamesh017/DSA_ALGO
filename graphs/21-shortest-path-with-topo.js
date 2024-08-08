//https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph
/*
a given graph now also have some weights attached , we have to find the shortest distance from src to every vertex 

we will given data in this format [[4,6,1],[4,7,2]] which means 4->6 weight 1 and 4->7 weight 2
  
step 1 would be convert this into proper adjaceny list with weights
4->[6,1][7,2] , like ith will be the edges and jth will be the distance

Step 2- do toposort
Step 3- we will visit adjaceny neighbour of each node(according to topo sort) and check if while reaching it do we have taken the minimum time , 

why toposort , with toposort we are already algind in left to right way
5->0<-4      5->0,4->0 ,5->2,2->3,3->1,4->1 (U->V)
|     |      Topological sorting -  5,4,2,3,1,0,
v     v  
2->3->1
from 5 we will reach 0 and 2 and check distance and asign , then from 0  and 2 we will move forward and keep calculating the shortest distance possible  as it already sorted topological we will reach till the last possible node from sort

 */
function  topologicalSorting(adjacentyList){
  //Step 1- make indegree arr;
  const InDegreeArr = new Array(adjacentyList.length).fill(0);
  for (let i = 0; i < adjacentyList.length; i++) {
    for (let j = 0; j < adjacentyList[i].length; j++) {
      const ele=adjacentyList[i][j][0];
      InDegreeArr[ele]+=1; 
    }
  }
  //Step 2 - Add Zero Indegrees in Stack
  let stack=[];
  for (let i = 0; i < InDegreeArr.length; i++) {
    if(InDegreeArr[i]===0){
      stack.push(i)
    }
  }
  let topologicalSort=[]
  while(stack.length>0){
    const ele=stack.shift();
    let size=adjacentyList[ele].length;
    for (let i = 0; i <size; i++) {
      const element = adjacentyList[ele][i][0];
      InDegreeArr[element]-=1; 
      if(InDegreeArr[element]===0){
        stack.push(element)
      }
    }
    topologicalSort.push(ele);
  }
  return topologicalSort;
  }
function shortestPath(noOfVertices,edges){
  //Step 1 - convert into adjacenty list;
  const adjacentyList = new Array(edge.length).fill().map(() => []);
  for (let i = 0; i < edges.length; i++) {
    const u= edges[i][0];
    const v= edges[i][1];
    const weight= edges[i][2];
    adjacentyList[u].push([v,weight]);
  }
  console.log(adjacentyList);
  //Step 2 topological sort;
  const topoStack=topologicalSorting(adjacentyList);

  //Step 3 do distance
  const distanceArr = new Array(noOfVertices).fill(Number.MAX_SAFE_INTEGER);
  distanceArr[0]=0;
  while(topoStack.length>0){
    const val=topoStack.shift();
    let currDistance=distanceArr[val];
    let size=adjacentyList[val].length;
    for (let i = 0; i <size; i++) {
       let neighbourNode=adjacentyList[val][i][0]
       let weight=adjacentyList[val][i][1]
       if(distanceArr[neighbourNode]>weight){
        distanceArr[neighbourNode]=weight+currDistance;
       }
    }
  }
  for (let i = 0; i < distanceArr.length; i++) {
    if(distanceArr[i]===Number.MAX_SAFE_INTEGER){
      distanceArr[i]=-1;
    }
    
  }
  return distanceArr;
}



const edge = [[0,1,2],[0,4,1],[4,5,4],[4,2,2],[1,2,3],[2,3,6],[5,3,1]];
const ans=shortestPath(6,edge);
console.log(ans);