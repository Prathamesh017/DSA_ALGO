//https://leetcode.com/problems/binary-search

//Time Complexity-(log n)
function binarySearch(arr,target){
 let low=0;
 let high=arr.length-1;
 
 while(low<=high){
   let mid=Math.floor((high+low)/2);
   if(arr[mid]===target){
    return mid;
   }
   if(arr[mid]>target){
     high=mid-1;
    }else{
    low=mid+1;
   }
  }

  return -1;
  
}
function binarySearchRec(arr,low,high,target){ 
   console.log(arr,low,high,target);
    if(low>high){
       return -1;
    }
    let mid=Math.floor((high+low)/2);
    if(arr[mid]===target){
     return mid;
    }
    if(arr[mid]>target){
      high=mid-1;
      return binarySearchRec(arr,low,high,target);
     }else{
     low=mid+1;
      return binarySearchRec(arr,low,high,target);
    }
   
 

   
 }
// console.log(binarySearch([5],5))
console.log(binarySearchRec([1,4,5,6,9,12],0,5,112))
