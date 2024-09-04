//https://leetcode.com/problems/path-with-minimum-effort/description
/*
Given a 2d arr , from src to destination , find the maximum absolute distance
Getting TLE for now , works better with priority queue but correct solution
*/


function minimumEffort(matrix){
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  let target=[numRows-1,numCols-1];
  // Create a new matrix filled with Infinity
  const  distanceMatrix = Array.from({ length: numRows }, () =>
      Array(numCols).fill(Number.MAX_SAFE_INTEGER)
  );
  const queue=[];
  queue.push({diff:0,pos:[0,0]});
  let ans=Number.MAX_SAFE_INTEGER;
  while(queue.length>0){
    const val=queue.shift();
    const [i,j]=val.pos;
    distanceMatrix[i][j]=-1;
    const currentVal=matrix[i][j];
    //check for top and check if it is already visited
    if(i-1>=0 && distanceMatrix[i-1][j]!==-1){
      let topVal=matrix[i-1][j];
      const maximumAbs=Math.max(val.diff,Math.abs(topVal-currentVal))
      if(i-1===target[0] && j===target[1]){
         ans=Math.min(maximumAbs,ans);
      }else{
        queue.push({pos:[i-1,j],diff:maximumAbs})
      
      }
    }
    //check for bottom
    if(i+1<numRows && distanceMatrix[i+1][j]!==-1){
      let bottmVal=matrix[i+1][j];
      const maximumAbs=Math.max(val.diff,Math.abs(bottmVal-currentVal))
      if(i+1===target[0] && j===target[1]){
        ans=Math.min(maximumAbs,ans);
     }else{
      queue.push({pos:[i+1,j],diff:maximumAbs})
    
      }
    }

     //check for left
     if(j-1>=0 && distanceMatrix[i][j-1]!==-1){
      let leftVal=matrix[i][j-1];
      const maximumAbs=Math.max(val.diff,Math.abs(leftVal-currentVal))
      if(i===target[0] && j-1===target[1]){
        ans=Math.min(maximumAbs,ans);
     }else{
      queue.push({pos:[i,j-1],diff:maximumAbs})
     
      }
    }
    //right
    if(j+1<numCols && distanceMatrix[i][j+1]!==-1){
      let rightVal=matrix[i][j+1];
      const maximumAbs=Math.max(val.diff,Math.abs(rightVal-currentVal))
      if(i===target[0] && j+1===target[1]){
        ans=Math.min(maximumAbs,ans);
     }else{
      queue.push({pos:[i,j+1],diff:maximumAbs})
    
      }
    }
   
    queue.sort((a,b)=>{
      return a.diff-b.diff;
    })
    

  }

  return ans;
}




const heights = [[1,2,2],[3,8,2],[5,3,5]]
const ans=minimumEffort(heights);
console.log(ans);