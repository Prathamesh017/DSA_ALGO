// https://www.codingninjas.com/studio/problems/sorted-array_6613259
//UNION OF 2 arrays

function unionArr(arr1,arr2){
  let arrSize=arr1.length;
  let arr2Size=arr2.length;
  let a1=0;
  let a2=0;
  let new_arr=[];
  while(a1<arrSize && a2<arrSize){
     if(arr1[a1]<=arr2[a2]){
      if(new_arr.length===0 || arr1[a1]!==new_arr[new_arr.length-1]){
        new_arr.push(arr1[a1]);
      }
      a1++;
     }else{
      if(new_arr.length===0 || arr2[a2]!==new_arr[new_arr.length-1]){
        new_arr.push(arr2[a2]);
      }
      a2++;
     }
  }
  return new_arr;
}
function interArr(arr1,arr2){
  let arrSize=arr1.length;
  let arr2Size=arr2.length;
  let a1=0;
  let a2=0;
  let new_arr=[];

  while(a1<arrSize && a2<arrSize){
     if(arr1[a1]===arr2[a2]){
        new_arr.push(arr1[a1]);
        a1++;
        a2++
     }  
     else if(arr1[a1]<arr2[a2]){
        a1++
     } else{
        a2++;
     }
  }
  return new_arr;
  
}
// console.log(unionArr([1,2,3,4,5,6],[2,3,5]));
console.log(interArr([1,2,2,3,4,5,6],[2,2,3,3,5]));
