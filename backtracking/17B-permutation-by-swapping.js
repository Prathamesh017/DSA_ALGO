//permuation by swapping positions as [1,2]=>[2,1] is just swapping right
//work with the the 17th solution only , this is just for better backtracking pratice


//Inution consider start 0 and try swapping each position but make sure start<=i otherwise it would cause duplicates

function swapping(arr,a,b){
  let temp=arr[a];
  arr[a]=arr[b];
  arr[b]=temp;
  return arr;
}

function swappingPermutation(arr,res,start){
  //valid arr if croosed the path
  if(start>arr.length-1){
     res.push(arr);
     return;
  }

  for (let i = 0; i < arr.length; i++) { 
    if(i>=start){
      arr=swapping([...arr],i,start);
      swappingPermutation(arr,res,start+1);
    }  
  }
  return res;
}
const arr=[1,1,2]
const res=swappingPermutation(arr,[],0);
console.log(res);