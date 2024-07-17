// https://leetcode.com/problems/number-of-islands/description
//this is similar to no-of-provinces , but in no-of-provinces you get a proper adjaceny matrix , but here it is just a grid connecting to its neighbours in 8 directions

/*
Intution= Seeing The matrix , it is difficult to decide that this is graph problem , but if we consider each value as a node, and with each traversal(BFS/DFS) we cover the neighbouring nodes, it will be easy to determine no of island

Approach
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]


  no of islands === no of traversals, as each traversal will cover its neighbouring nodes in all possivle 8 directin

  we will take the starting point and put it in the queue and we will find the starting point and with help of bfs we will cover all its neighbour

  this is a matrix which has x,y positions , hence we need 2dvisisted arr for each node, we will check its neighbour if they are 1 , if will push them in queue and mark the visited arr this node it already pushed

  Space Complexity - will be O(N2) visited arr and + queue O(N2)(if all are one)
  Time Complexity - we are checking for 1 to check for land in matrix hence O(N2) and check for it neighbour and queue level check for  1s so O(N2)
*/


function bfsTraversal(matrix,startingPoint,visitedArr){
  const queueLevel=[];
  queueLevel.push({no:startingPoint});
  while(queueLevel.length>0){
    const node=queueLevel.shift()
    let i=node.no[0];
    let j=node.no[1];
    //make it the node as 0 so it will be counted in current transversal only
    matrix[i][j]=0;
    visitedArr[i][j]=1;
    //check for top
    if(i-1>=0 && matrix[i-1][j]==="1" && visitedArr[i-1][j]!==1){
      queueLevel.push({no:[i-1,j]})
       visitedArr[i-1][j]=1;

    }
     //check for top-right
    //  if(i-1>=0  && j+1<matrix[0].length && matrix[i-1][j+1]==="1" && visitedArr[i-1][j+1]!==1){
    //   queueLevel.push({no:[i-1,j+1]})
    //   visitedArr[i-1][j+1]=1;
    // }
    //check for right
    if( j+1<matrix[0].length && matrix[i][j+1]==="1" && visitedArr[i][j+1]!==1){
      queueLevel.push({no:[i,j+1]})
      visitedArr[i][j+1]=1;
    }
    //check for bottom right
    // if(i+1<matrix.length &&  j+1<=matrix[0].length && matrix[i+1][j+1]==="1" && visitedArr[i+1][j+1]!==1){
    //   queueLevel.push({no:[i+1,j+1]})
    //  visitedArr[i+1][j+1]=1;
    // }
    //check for bottom
    if(i+1<matrix.length &&  matrix[i+1][j]==="1" && visitedArr[i+1][j]!==1){
      queueLevel.push({no:[i+1,j]})
      visitedArr[i+1][j]=1;
    }
    // //check of bottom left
    // if(i+1<matrix.length && j-1>=0 &&  matrix[i+1][j-1]==="1" && visitedArr[i+1][j-1]!==1){
    //   queueLevel.push({no:[i+1,j-1]})
    // visitedArr[i+1][j-1]=1;

    // }
    // check for left
    if(j-1>=0 &&  matrix[i][j-1]==="1" && visitedArr[i][j-1]!==1){
      queueLevel.push({no:[i,j-1]})
      visitedArr[i][j-1]=1;
    }
    // // check for top-left
    // if(i-1>=0 && j-1>=0 &&  matrix[i-1][j-1]==="1" && visitedArr[i-1][j-1]!==1){
    //   queueLevel.push({no:[i-1,j-1]})
    //   visitedArr[i-1][j-1]=1;
    // }
    
  }
}
function noOfIslands(matrix){

  let ctr=0;
  const visitedArr = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]==="1"){
          ctr++;
          console.log(matrix)
          bfsTraversal(matrix,[i,j],visitedArr);
      }
      
    }
  }
  return ctr;

}

const matrix=  [["1","0","1","1","1"],["1","0","1","0","1"],["1","1","1","0","1"]]
const ans=noOfIslands(matrix);
console.log(ans);