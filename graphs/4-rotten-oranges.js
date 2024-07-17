//https://leetcode.com/problems/rotting-oranges/description/
/*Similar like no-of-island */
/*
given a matrix , 2 represents rotten orange , every min its adjacening 4 sides become rotten , find time required to make all 1's which are fresh oranges to 2 rotten oranges, if all are not possbile return -1

The complexity is due to there can be many more than one orange so twwice ,thrice oranges  and they will also start to rotten thier neighbours from first min itself
*/
function bfsTraversal(matrix,queueLevel,visitedArr){
  let mins=0;
  while(queueLevel.length>0){
    const size=queueLevel.length
    let isOnce=true;
    for (let i = 0; i < size; i++) {
      const node=queueLevel.shift()
  
    let i=node.no[0];
    let j=node.no[1];
    //make it the node as 0 so it will be counted in current transversal only
    matrix[i][j]=0;
    visitedArr[i][j]=1;
    //check for top
    if(i-1>=0 && matrix[i-1][j]===1 && visitedArr[i-1][j]!==1){
      queueLevel.push({no:[i-1,j]})
       visitedArr[i-1][j]=1;
       isOnce===true?mins++:mins;
       isOnce=false;

    }
    //check for right
    if( j+1<matrix[0].length && matrix[i][j+1]===1 && visitedArr[i][j+1]!==1){
      queueLevel.push({no:[i,j+1]})
      visitedArr[i][j+1]=1;
      isOnce===true?mins++:mins;
      isOnce=false;
    }
    //check for bottom
    if(i+1<matrix.length &&  matrix[i+1][j]===1 && visitedArr[i+1][j]!==1){
      queueLevel.push({no:[i+1,j]})
      visitedArr[i+1][j]=1;
      isOnce===true?mins++:mins;
      isOnce=false;
    }
    // check for left
    if(j-1>=0 &&  matrix[i][j-1]===1 && visitedArr[i][j-1]!==1){
      queueLevel.push({no:[i,j-1]})
      visitedArr[i][j-1]=1;
      isOnce===true?mins++:mins;
      isOnce=false;
    }
  }
   
}
  return mins;
}






function rottenOranges(matrix){
  const visitedArr = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));
  let queueLevel=[];
  let mins=0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]===2){
          queueLevel.push({no:[i,j]});
      }
    }
  }
  mins=bfsTraversal(matrix,queueLevel,visitedArr);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if(matrix[i][j]===1){
          mins=-1;
          break;
      } 
    }
  }
  return mins;
}

const matrix=  [[2,1,1],[1,1,1],[0,1,2]]
const ans=rottenOranges(matrix);
console.log(ans);