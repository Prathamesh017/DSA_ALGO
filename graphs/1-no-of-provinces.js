//https://leetcode.com/problems/number-of-provinces/description
/*Approach
a province is something we can travel in one go , 
1->2   4->5   , these are 2 different provinces,  
   |                     
   3

so in 1 traversal , we cover everything of a single province , so no of traversals=no of provinces
you will given matrix , convert into adjaceny list
*/
function dfsTraversal(adjacenyList,startingPoint,visitedArr){
  const size=adjacenyList[startingPoint].length;
  visitedArr[startingPoint]=1;
  for (let  i= 0; i <size; i++) {
    const ele=adjacenyList[startingPoint][i];
    if(visitedArr[ele]!==1){
      dfsTraversal(adjacenyList,ele,visitedArr);
    }
  }
}
function noOfProvinces(adjacenyMatrix){
  const list = [[]];

  //coverting adjacenyMatrix into AdjacenyList
  for (let i = 0; i < adjacenyMatrix.length; i++) {
    const subArr=[];
   for (let j = 0; j < adjacenyMatrix.length; j++) {
    if(adjacenyMatrix[i][j]===1 && i!==j){
      subArr.push(j+1)
    }
  }
  list.push(subArr);
  }
  // return list;
  //for every possible node ,do dfs ,starting from 1 because we don't need the 0th empty one as a province
  let ctr=0;
  const visitedArr = new Array(list.length+1).fill(0);
  for(let i=1;i<list.length;i++){
     if(visitedArr[i]!==1){
      ctr++;
       dfsTraversal(list,i,visitedArr);
     }
  }

  return ctr;
}
  const adjacenyMatrix=[[1,0,0],[0,1,0],[0,0,1]];
  const ans=noOfProvinces(adjacenyMatrix);
  console.log(ans);

