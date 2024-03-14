//https://leetcode.com/problems/set-matrix-zeroe

// Soln- 1 Better Opproach - TC  (On2)

function setRow(arr, size, j) {
  for (let x = 0; x<size;x++) {
    arr[j][x] = 0
  }
  return arr
}
function setCol(arr, size, j) {
  for (let x = 0; x<size; x++) {
    arr[x][j] = 0;
  }
  return arr
}
function setMatrix(arr) {
  let m = arr.length
  let n = arr[0].length

  let colArr = new Array(m).fill(0);
  let rowArr = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][j] === 0) {
         colArr[i]=1;
         rowArr[j]=1;
        //  break;
     
      }
    }
  }
 console.log(rowArr,colArr)
  for (let i = 0; i < rowArr.length; i++) {
     if(rowArr[i]===1){
       arr=setCol(arr,m,i)
     }
  }
  for (let i = 0; i < colArr.length; i++) {
    if(colArr[i]===1){
      arr=setRow(arr,n,i)
    }
 }
  return arr
};

//Can Come For Optimal Later

console.log(setMatrix([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
