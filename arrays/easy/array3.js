// https://leetcode.com/problems/rotate-array/
//rotate a array upto n turns (left)
//[1,2,3,4] 2 => [3,4,1,2]


//time complexity =O(n)
//Space Complexity- 0(turns) i.e temp arr[turns] 
function rotate(arr, turns) {
  turns = turns % arr.length

  //for eg 4 turns for 4 size array will bring it back at the same position
  //for eg 20 turn for 7 size array= 7(same position)+7(same position)+6 turns extra right? 20%7=6;
  let tempArr = arr.slice(0, turns)
  console.log(tempArr)
  for (let i = turns; i <arr.length; i++) {
    arr[i-turns] = arr[i]
  }
  //re inserting temp
  for(let i=arr.length-turns;i<arr.length;i++){
    arr[i]=tempArr[i-(arr.length-turns)]
  }
  return arr
}

//with better space complexity
//here no additonal space used
// but  time complexity greater than previous (0(n+n))
//1 divided array 2 time reverse (n total) + whole array reverse (n total) hence O(n+n) time complexity
function rotateSpace(arr,turns){
  //eg- [1,2,3,4,5,6],2
  //rotateLeft=[1,2].reverse()=[2,1];
  //rotateRight=[4,5,6,7].reverse()=[7,6,5,4];
  //by merge and reversing  [2,1,4,5,6,7]=[7,6,5,4,1,2]
  turns = turns % arr.length
  let rotateLeft=arr.slice(0,turns).reverse();
  let rotateRight=arr.slice(turns,arr.length).reverse();
  return [...rotateLeft,...rotateRight].reverse();
}
console.log(rotateSpace([1, 2, 3, 4, 5,6], 7))
