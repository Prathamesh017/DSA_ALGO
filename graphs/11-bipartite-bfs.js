//https://leetcode.com/problems/is-graph-bipartite/description
/* 
A Bipartite Graph is graph where we can color the graph with 2 colors so that no adjacent nodes can be of same color(explained more in graph.txt)


Approach
Traverse the graph and  maintain arr to check adjacents
*/

function bfsTraversal(start,adjacenyList,visitedArr){
  const queueLevel=[];
  queueLevel.push({no:start,val:adjacenyList[start],color:0});
  const ans = new Array(adjacenyList.length).fill(-1);
  ans[start]=0;
  const traversals=[];
  while(queueLevel.length>0){
   const node=queueLevel.shift();
   visitedArr[node.no]=0;
   const size=node.val.length;
   let color=node.color===0?1:0;
   for (let i= 0; i<size; i++) {
    const neighbour=node.val[i];
     if(visitedArr[neighbour]===-1){
      //if is not visited yet , then we assign it the opposite of adjacent to all the neighbours
       queueLevel.push({no:neighbour,val:adjacenyList[neighbour],color})
       if(ans[neighbour]===-1){
         ans[neighbour]=color;
       }
     }else{
       //if visited ,we check with parent neighbour 
       if(ans[neighbour]==ans[node.no]){
        console.log(neighbour,node.no)
        return false;
       }
     }
   }

  }
  return true;

}

function bipartiteBfs(adjacentList){
  //Has connected components , hence this way
  const visitedArr = new Array(adjacenyList.length).fill(-1);
  for (let i = 0; i <adjacentList.length; i++) {
    if(visitedArr[i]===-1){
      if(!bfsTraversal(i,adjacentList,visitedArr)){
        return false;
      }
    }
  }
  return true;
}


const adjacenyList=[[2,3,5,6,7,8,9],[2,3,4,5,6,7,8,9],[0,1,3,4,5,6,7,8,9],[0,1,2,4,5,6,7,8,9],[1,2,3,6,9],[0,1,2,3,7,8,9],[0,1,2,3,4,7,8,9],[0,1,2,3,5,6,8,9],[0,1,2,3,5,6,7],[0,1,2,3,4,5,6,7]];
const ans=bipartiteBfs(adjacenyList);
console.log(ans);