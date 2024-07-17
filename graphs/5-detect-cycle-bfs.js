//https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph
/*
Given a graph , find if it has cycle with BFS
   2- 4- 6 
 /          \ 
1           8
  \        /
   3- 5 -7
Approach
1) there can be 2  broken graphs as well , 
1->2    3->4->5
         \  /
          6
hence depending upon nodes i.e 6 , first it  check for 1 it will make 1,2 visited then from 3 it will check again for detectingCycles if found in atleast one will return true;

2)with every traversal, there will be queue , which would have parent as well with node value

3)so every neighbour we would check if it is visited before or not,if not we will mark it as visible,if not we would check for its parent ,if it is visited but it is current not parent ,so we can say it is the same path we came from now so no chance of cycle , but if it not parent then

4) with bfs we are coming different ways , so if we get a neighbour that is that visited before and it is not parent, so obviouly some other came thier
 */

function detectCycleBFS(adjacenyList,startingPoint,visitedArr){
  const queueLevel=[];
  queueLevel.push({curr:startingPoint,neighbour:adjacenyList[startingPoint],parent:-1});
  visitedArr[startingPoint]=1;
  while(queueLevel.length>0){
    const node=queueLevel.shift();
  
    for(let i=0;i<node.neighbour.length;i++){
      const nodeNeighbour=node.neighbour[i];
      //3
      if(visitedArr[nodeNeighbour]!==1){
        queueLevel.push({curr:nodeNeighbour,neighbour:adjacenyList[nodeNeighbour],parent:node.curr})
        visitedArr[nodeNeighbour]=1;
      }else{
        if(nodeNeighbour!==node.parent){
          return true;
        }
      }
    }
  }
  return false;
  
}

function isCycle(nodes,adjacenyList){
  //Step 1 
  const visitedArr = new Array(adjacenyList.length+1).fill(0);

  for (let i = 0; i <nodes; i++) {
    if(visitedArr[i]===0){
      if(detectCycleBFS(adjacenyList,i,visitedArr)){
        return true;
      }
    }
  }
  return false;
}

// const adj = [[1],[2],[]]
const adj=[[], [2], [1, 3], [2]]
const ans=isCycle(2,adj);
console.log(ans);