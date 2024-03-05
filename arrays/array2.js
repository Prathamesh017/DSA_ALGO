// https://www.codingninjas.com/studio/problems/remove-duplicates-from-sorted-array_1102307
//REMOVE DUPLICATES FROM SORTED ARRAY AND RETURN UNIQUE ELEMENT NUMBERS 
function removeDuplicates(arr,n) {
  // Write your code here.
  let i=0;
  for(let x=1;x<arr.length;x++){
      if(arr[i]!=arr[x]){
          i++;
          arr[i]=arr[x]; 
      }
  }
return i+1;
}

console.log(removeDuplicates( [1,2,2,2,3,4,5,6,6,6,7,9,9]))
