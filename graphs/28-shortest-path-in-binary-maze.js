//https://leetcode.com/problems/shortest-path-in-binary-matrix/description
/*
given a binary maze with 0 and 1's  , we have to return shortest clear path . 
clear path will be from 0,0 to last cell  and we can only visit only 0's cells


we will be using Dijkstra algo ,
Approach
We will taking 2d distance arr and visit all the neighbouring 8 directions
Here normal queue will work same as priority queue because here the distance is increasing constantly like for src's neighbouring node it will be 1 , for these neighbour's neighbour will be 2 etc , like graphs there can be different weights 4,3,1 etc so priority should be given to the shortest path only ,but  here doesn't matter much
*/
function shortestPathBinaryMatrix(matrix){
  if(matrix[0][0]===1){
    return -1;
  }
    const numRows = matrix.length;
  const numCols = matrix[0].length;
  let target=[numRows-1,numCols-1];
  console.log(numRows,numCols);
  // Create a new matrix filled with Infinity
  const  distanceMatrix = Array.from({ length: numRows }, () =>
      Array(numCols).fill(Number.MAX_SAFE_INTEGER)
  );
  distanceMatrix[0][0]=1;
  matrix[0][0]=-1;
  const queue=[];
  queue.push([0,0]);
  while(queue.length>0){
    const [i,j]=queue.shift();
     //top
     if(i-1>=0 && matrix[i-1][j]!==-1){
      //if it is target itself;
      if(i-1===target[0] && j===target[1] && matrix[i-1][j]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1); 
      }else if(matrix[i-1][j]===0){
        queue.push([i-1,j]);
        matrix[i-1][j]=-1;
        distanceMatrix[i-1][j]=distanceMatrix[i][j]+1

      }
    }
    //top-left
    if(i-1>=0 && j-1>=0 &&  matrix[i-1][j-1]!==-1){
      //if it is target itself;
      if(i-1===target[0] && j-1===target[1] && matrix[i-1][j-1]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1); 
      }else if(matrix[i-1][j-1]===0){
        queue.push([i-1,j-1]);
        matrix[i-1][j-1]=-1;

        distanceMatrix[i-1][j-1]=distanceMatrix[i][j]+1

      }
    }
     //top-right
     if(i-1>=0 && j+1>=0 && matrix[i-1][j+1]!==-1){
      //if it is target itself;
      if(i-1===target[0] && j+1===target[1] && matrix[i-1][j+1]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1); 
      }else if(matrix[i-1][j+1]===0){
        queue.push([i-1,j+1]);
        matrix[i-1][j+1]=-1;
        distanceMatrix[i-1][j+1]=distanceMatrix[i][j]+1

      }
    }
    //bottom
    if(i+1<numRows && matrix[i+1][j]!==-1){
      //if it is target itself;
      if(i+1===target[0] && j===target[1] && matrix[i+1][j]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1); 
      }else if(matrix[i+1][j]===0){
        queue.push([i+1,j]);
        matrix[i+1][j]=-1;
        distanceMatrix[i+1][j]=distanceMatrix[i][j]+1
      }
    }

     //bottom left
     if(i+1<numRows && j-1>=0 && matrix[i+1][j-1]!==-1){
      //if it is target itself;
      if(i+1===target[0] && j-1===target[1] && matrix[i+1][j-1]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1); 
      }else if(matrix[i+1][j-1]===0){
        queue.push([i+1,j-1]);
        matrix[i+1][j-1]=-1;
        distanceMatrix[i+1][j-1]=distanceMatrix[i][j]+1
      }
    }

    //bottom right
    if(i+1<numRows && j+1<numCols && matrix[i+1][j+1]!==-1){
      //if it is target itself;
      if(i+1===target[0] && j+1===target[1] && matrix[i+1][j+1]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1); 
      }else if(matrix[i+1][j+1]===0){
        queue.push([i+1,j+1]);
        matrix[i+1][j+1]=-1;
        distanceMatrix[i+1][j+1]=distanceMatrix[i][j]+1
      }
    }

    //left
    if(j-1>=0 && matrix[i][j-1]!==-1){
      //if it is target itself;
      if(i===target[0] && j-1===target[1] && matrix[i][j-1]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1);  
      }else if(matrix[i][j-1]===0){
        queue.push([i,j-1]);
        matrix[i][j-1]=-1;
        distanceMatrix[i][j-1]=distanceMatrix[i][j]+1

      }
    }

    //right
    if(j+1<numCols && matrix[i][j+1]!==-1){
      //if it is target itself;
      if(i===target[0] && j+1===target[1] && matrix[i][j+1]===0){
        distanceMatrix[target[0]][target[1]]=Math.min(distanceMatrix[target[0]][target[1]],distanceMatrix[i][j]+1);  
      }else if(matrix[i][j+1]===0){
        queue.push([i,j+1]);
        matrix[i][j+1]=-1;
        distanceMatrix[i][j+1]=distanceMatrix[i][j]+1

      }
    }
  }

  return distanceMatrix[target[0]][target[1]]===Number.MAX_SAFE_INTEGER?-1:distanceMatrix[target[0]][target[1]];

}

const matrix=[[0,0,0],[1,1,0],[1,1,1]];
const ans=shortestPathBinaryMatrix(matrix);
console.log(ans);