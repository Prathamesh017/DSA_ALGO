//https://leetcode.com/problems/spiral-matrix/description/

//The Spiral Follows a fixed pattern from left to right then top to bottom then right to left and then bottom to top

function spiralMatrix(arr){
 
  let left=0;
  let top=0;
  let right=arr[0].length-1;
  let bottom=arr.length-1;
  spiral_arr=[];

  while(top<=bottom && left<=right){
    //left to right

  for (let i = left; i <=right; i++) {
      spiral_arr.push(arr[left][i])
    }
    top++;
  //top to bottom
  if(top<=bottom){
    for (let i = top; i<=bottom; i++) {
      spiral_arr.push(arr[i][right])
    }
   }

   right--;
   if(top<=bottom ){
    //with for I am already checking for right -left hence upper  top -bottom check
   for (let i = right; i>=left; i--) {
      spiral_arr.push(arr[bottom][i])
      
    }
    bottom--;
  }
  if(left<=right){
     //with for I am already checking for  bottom-top hence upper  right -left check
    for (let i = bottom; i>=top; i--) {
      spiral_arr.push(arr[i][left])
    }
  }
  left++;

}

return spiral_arr;
}
  
  
// }
//123
//456
//789


console.log(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))