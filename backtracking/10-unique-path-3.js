//Unique Path - https://leetcode.com/problems/unique-paths-iii/description/


//Time Complexity - With Every grid , it has 4 possiblties possible in worst case
//T.C  4^(m*n)
function findUniquePath(arr,startIndexes,finalCount,res,result){
   let [i,j]=startIndexes;
   result.push([i,j]);
 
   if((result.length-1 ===finalCount) && (((i-1>=0) && arr[i-1][j]===2) || (j+1<=arr[0].length-1 && arr[i][j+1]===2) || (j-1>=0 && arr[i][j-1]===2) || (i+1<=arr.length-1 && arr[i+1][j]===2))){
      res++;  
     return res;
   }
   //up
   if(i-1>=0 && arr[i-1][j]===0){
     arr[i-1][j]=-1;
     res=findUniquePath(arr,[i-1,j],finalCount,res,result)
     result.pop();
   
    arr[i-1][j]=0;
   }
   //right
   if(j+1<=arr[0].length-1 && arr[i][j+1]===0){
    arr[i][j+1]=-1;
    res=findUniquePath(arr,[i,j+1],finalCount,res,result)
    arr[i][j+1]=0;
    result.pop();


  }
  //left
  if(j-1>=0 && arr[i][j-1]===0){
    arr[i][j-1]=-1;
    res=findUniquePath(arr,[i,j-1],finalCount,res,result)
    arr[i][j-1]=0;
    result.pop();


    
  }
  //down
  if(i+1<=arr.length-1 && arr[i+1][j]===0){
    arr[i+1][j]=-1;
    res=findUniquePath(arr,[i+1,j],finalCount,res,result)
    arr[i+1][j]=0;
    result.pop();


  }
  
  return res;
}

function uniquePath(arr){
  let count=0;
  let startIndexes=[];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j< arr[0].length; j++) {
       if(arr[i][j]===0){
        count++;
       }else if(arr[i][j]==1){
        startIndexes.push(i,j);
       }
    }
  }
  const res=findUniquePath(arr,startIndexes,count,0,[]);
  return res;
}


let arr = [[0,1],[2,0]]
const res=uniquePath(arr);
console.log(res);
