function DFSTraversal(startingPoint,adjacentList,visitedArr,ans,color){
  const size=adjacentList[startingPoint].length;
  visitedArr[startingPoint]=0;
  if(ans[startingPoint]===-1){
    ans[startingPoint]=color;
  }
  let neighbourColor=color===0?1:0;
  for (let i = 0; i < size; i++) {
    const  neighbour=adjacentList[startingPoint][i];
    if(visitedArr[neighbour]===-1){
      //if is not visited yet , then we assign it the opposite of adjacent to all the neighbours
       let res=DFSTraversal(neighbour,adjacentList,visitedArr,ans,neighbourColor);
       if(!res){
        return false;
    }
     }else{
       //if visited ,we check with parent neighbour 
       if(ans[neighbour]==ans[startingPoint]){
        return false;
       }
     }
  }
  return true;
}

function bipartiteDFS(adjacentList){
  //Has connected components , hence this way
  const visitedArr = new Array(adjacenyList.length).fill(-1);
  const ans = new Array(adjacenyList.length).fill(-1);
  for (let i = 0; i <adjacentList.length; i++) {
    if(visitedArr[i]===-1){
      if(!DFSTraversal(i,adjacentList,visitedArr,ans,0)){
        return false;
      }
    }
  }
  return true;
}


const adjacenyList=[[2,3,5,6,7,8,9],[2,3,4,5,6,7,8,9],[0,1,3,4,5,6,7,8,9],[0,1,2,4,5,6,7,8,9],[1,2,3,6,9],[0,1,2,3,7,8,9],[0,1,2,3,4,7,8,9],[0,1,2,3,5,6,8,9],[0,1,2,3,5,6,7],[0,1,2,3,4,5,6,7]];
const ans=bipartiteDFS(adjacenyList);
console.log(ans);