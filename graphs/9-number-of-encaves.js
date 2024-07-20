//https://leetcode.com/problems/number-of-enclaves/description(similar to surronded-region)
/* 
Given a Binary Matrix(m*n) find no of moves we can't make to reach the boundary
0 represents sea and 1 represents land
[[0,1,1,0],   output 1 , there are 4 ones in total , with  upper three we can easily reach
 [0,0,1,0],   boundary ,but with the last 1 , we can't , so no of  moves through which we 
 [0,1,0,0],   can't reach boundary is 1
 [0,0,0,0]]
*/

function makeConnectionToBoundary(matrix,pos){
  const queueLevel=[];
  queueLevel.push({pos})
  while(queueLevel.length>0){
   const node=queueLevel.shift();
   let i=node.pos[0];
   let j=node.pos[1];
   if (matrix[i][j] === 0) {
     continue; // Skip already visited cell
    }
    matrix[i][j]=0;
   //check for top
   if(i-1>=0 && matrix[i-1][j]===1){
    queueLevel.push({pos:[i-1,j]});
  }
  //check for right
  if( j+1<matrix[0].length && matrix[i][j+1]===1){
    queueLevel.push({pos:[i,j+1]});
  }

  //check for bottom
  if(i+1<matrix.length &&  matrix[i+1][j]===1){
    queueLevel.push({pos:[i+1,j]});
  }

  // check for left
  if(j-1>=0 &&  matrix[i][j-1]===1){
    queueLevel.push({pos:[i,j-1]});
  }
  }
}

function numberOfEncaves(matrix){
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //boundary confirmed;
      if((i-1<0 || j+1>=(matrix[0].length) ||i+1>=matrix.length || j-1<0) &&(matrix[i][j]===1)){
        makeConnectionToBoundary(matrix,[i,j])
      }
    }
  }

  console.log(matrix);
  let ctr=0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //boundary confirmed;
      if(matrix[i][j]===1){
        ctr++;
      }
    }
  }
  return ctr;
}



const matrix=[
  [0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]
]
const ans=numberOfEncaves(matrix);
console.log(ans);