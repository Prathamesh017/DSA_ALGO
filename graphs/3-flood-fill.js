//https://leetcode.com/problems/flood-fill/description
/* Similar to No-Of-Island*/
/*
here , the starting point it already given, if the 4 direction also has the same no we will mark it as well and check the neighbour also in 4 directions

Time Complexity - O(N)
Space Complexity - VisitedArr O(N2) 
*/
function bfsTraversal(matrix,startingPoint,pixel,visitedArr){
  const queueLevel=[];
  queueLevel.push({no:startingPoint});
  while(queueLevel.length>0){
    const node=queueLevel.shift()
    let i=node.no[0];
    let j=node.no[1];
    const val=matrix[i][j]
    //make it the node as 0 so it will be counted in current transversal only
    matrix[i][j]=pixel;
    visitedArr[i][j]=1;
    //check for top
    if(i-1>=0 && matrix[i-1][j]===val && visitedArr[i-1][j]!==1){
      queueLevel.push({no:[i-1,j]})
       visitedArr[i-1][j]=1;

    }
    //check for right
    if( j+1<matrix[0].length && matrix[i][j+1]===val && visitedArr[i][j+1]!==1){
      queueLevel.push({no:[i,j+1]})
      visitedArr[i][j+1]=1;
    }
    //check for bottom
    if(i+1<matrix.length &&  matrix[i+1][j]===val && visitedArr[i+1][j]!==1){
      queueLevel.push({no:[i+1,j]})
      visitedArr[i+1][j]=1;
    }
    // check for left
    if(j-1>=0 &&  matrix[i][j-1]===val && visitedArr[i][j-1]!==1){
      queueLevel.push({no:[i,j-1]})
      visitedArr[i][j-1]=1;
    }
  }
}



function floodFill(matrix,row,col,pixel){

  const visitedArr = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));
  bfsTraversal(matrix,[row,col],pixel,visitedArr);
  return matrix;

}

const matrix=  [[1,1,1],[1,1,0],[1,0,1]]
const ans=floodFill(matrix,1,1,2);
console.log(ans);