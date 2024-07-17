//https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph
/*
Given a graph , find if it has cycle with DFS,
   2- 4- 6 
 /          \ 
1           8
  \        /
   3- 5 -7

Basic Approach with dfs ,we will go from 1 ->2 ->4->8->7->5->3->1 and when we find 1 is already visited and it is not parent of 3 we will return true

*/

function detectCycleDFS(adjacenyList,curr,parent,visitedArr){
   
  
  const size=adjacenyList[curr].length;
  visitedArr[curr]=1;
  for (let i = 0; i < size; i++) {  
    const ele=adjacenyList[curr][i];
    if(visitedArr[ele]!==1){
      visitedArr[ele]=1;
      const ans=detectCycleDFS(adjacenyList,ele,curr,visitedArr);
      if(ans){
        return true;
      }
    }else{
      if(ele!=parent){
        console.log(ele,parent);
        return true;
      }
    }
  }
}


function isCycle(nodes,adjacenyList){
  //Step 1 
  const visitedArr = new Array(adjacenyList.length+1).fill(0);

  for (let i = 0; i <nodes; i++) {
    if(visitedArr[i]===0){
      if(detectCycleDFS(adjacenyList,i,-1,visitedArr)){
        return true;
      }
    }
  }
  return false;
}

const adj = [ [], [ '2' ], [ '1', '3' ], [ '2' ] ]
// const adj=[[],[2,3],[1,5],[1,4,6],[3],[2,7],[3,7],[5,4]]
const ans=isCycle(4,adj);
console.log(ans);