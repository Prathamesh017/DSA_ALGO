//https://leetcode.com/problems/set-matrix-zeroes/

//Transpose a Matrix-  means change row into column and vice versa
//for eg [[1, 2, 3],[4, 5, 6],[7, 8, 9]]]
//will be [[1,4,7],[2,5,6][3,6,9]]
function rotateMatrix(arr) {

  //Have to iterate whole arr 
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //   if(i===j || j>i){
   //     continue;
   //   }else{
    //   let temp=arr[i][j];
    //   arr[i][j]=arr[j][i];
    //   arr[j][i]=temp;
    // }
  // }
// }

   //we have to right only on the right half after the diaganal will automatically swap with the left half by reversing index
   //transpose
   for (let i = 0; i < arr.length-1; i++) {
     for (let j =i+1; j <arr.length; j++) {
        let temp=arr[i][j];
        arr[i][j]=arr[j][i];
        arr[j][i]=temp;
     }
   }
   //reverse
   for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].reverse();
   }
  return arr;
}
console.log(
  rotateMatrix([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
)
