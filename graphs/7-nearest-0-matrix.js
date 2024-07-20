//https://leetcode.com/problems/01-matrix/description
// (similar problem to rotten-orange)

/*
given a matrix for each node, find the nearest 0 if it 0 itself ,then 0 if not then increment by 1 to find nearest 0
*/
function detectVisitedArr(visitedArr){

  for (let i = 0; i < visitedArr.length; i++) {
    for (let j = 0; j < visitedArr[0].length; j++) {
      if(visitedArr[i][j]===1){
        return true;
      }
    }
  }
  return false;
}
function bfs(matrix,queueLevel,visitedArr){
  let ctr=0;
  while(detectVisitedArr(visitedArr)){
    ctr++;
    let newQueue=[];
    while (queueLevel.length>0) {
       const node=queueLevel.shift();
       const i=node.no[0];
       const j=node.no[1];

       //check for top
       if(i-1>=0 && matrix[i-1][j]===1 && visitedArr[i-1][j]===1){
        matrix[i-1][j]=ctr;
        newQueue.push({no:[i-1,j]})
         visitedArr[i-1][j]=0;
  
      }
      //check for right
      if( j+1<matrix[0].length && matrix[i][j+1]===1 && visitedArr[i][j+1]===1){
        matrix[i][j+1]=ctr;
        newQueue.push({no:[i,j+1]})
        visitedArr[i][j+1]=0;
      }
      //check for bottom
      if(i+1<matrix.length &&  matrix[i+1][j]===1 && visitedArr[i+1][j]===1){
        matrix[i+1][j]=ctr;
        newQueue.push({no:[i+1,j]})
        visitedArr[i+1][j]=0;
        
      }
      // check for left
      if(j-1>=0 &&  matrix[i][j-1]===1 && visitedArr[i][j-1]===1){
        matrix[i][j-1]=ctr;
        newQueue.push({no:[i,j-1]})
        visitedArr[i][j-1]=0;
      }
    }
    queueLevel=newQueue;
    
  }

  return matrix;
  
}
function nearestZero(matrix){
  const queueLevel=[];
  const visitedArr = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(1));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j]===0){
        queueLevel.push({no:[i,j]})
        visitedArr[i][j]=0;
      }
    }
  }
  return bfs(matrix,queueLevel,visitedArr)

}


const matrix=[[0,0,0],[0,1,0],[0,0,0]]
const ans=nearestZero(matrix);
console.log(ans);