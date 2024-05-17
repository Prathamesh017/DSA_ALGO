//https://leetcode.com/problems/n-queens/description/
//N QUEENS - Assign N queens in n*n 2d arr in such way no 2 queens can attack each other

function validCheck(arr,row,j,n){
  //check for column
  for (let x=row; x>=0 ;x--) {
    if(arr[x][j]==="Q"){
      return false;
    }
  }
   //check for digonal left;
  let up=row;
  let left=j
  while(up-1>=0 && left-1>=0){
    if(arr[--up][--left]==="Q"){
      return false
    }
  }
  //check for digonal right
  up=row;
  let right=j
  while(up-1>=0 && right+1<=n){
    if(arr[--up][++right]==="Q"){
      return false
    }
  }
 
 
  return true;
}

function nqueens(row,n,arr,result){
  if(row>n){
    let newArr = JSON.parse(JSON.stringify(arr));
    result.push(newArr);
    return result;
  }
  for (let i = 0; i <=n; i++) {
    if(validCheck(arr,row,i,n)){
      arr[row][i]="Q"
      nqueens(row+1,n,arr,result);
      arr[row][i]="."
    }

    
  }
  return result;

}


let arr=Array.from({ length: 4 }, () => Array(4).fill('.'));
const res=nqueens(0,arr.length-1,arr,[]);
console.log(res);
// let outputArray = res.map(board => board.map(row => row.join("")));
// console.log(outputArray);