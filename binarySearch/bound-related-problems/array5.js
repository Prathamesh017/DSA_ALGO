//https://www.codingninjas.com/studio/problems/occurrence-of-x-in-a-sorted-array

function getUpperBound(arr,k){
  let start=0;
  let end=arr.length-1;
  let ans;

  while(start<=end){
    let mid=Math.floor((end+start)/2);
    if(arr[mid]===k){
       ans=mid
       start=mid+1;
    }else if(arr[mid]>k){
      end=mid-1;
    }
    else{
      start=mid+1;
    }
  }
  return ans;
}

function getLowerBound(arr,k){
   let start=0;
   let end=arr.length-1;
   let ans;

   while(start<=end){
     let mid=Math.floor((end+start)/2);
     if(arr[mid]===k){
        ans=mid
        end=mid-1;
     }else if(arr[mid]>k){
       end=mid-1;
     }
     else{
      start=mid+1;
     }
   }
   return ans;
}

function getOccurrence(arr,k){
   let low=getLowerBound(arr,k);
   let high=getUpperBound(arr,k);
   return high-low+1;

}

console.log(getOccurrence([1,2,4,4,5],4));