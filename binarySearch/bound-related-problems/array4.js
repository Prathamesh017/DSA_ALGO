//https://leetcode.com/problems/search-insert-position/
//Same Concept using lower and upper bound
//https://www.codingninjas.com/studio/problems/ceiling-in-a-sorted-array_1825401

function searchInsert(arr,target){
    let low=0;
    let high=arr.length-1;
    let ans;

    while(low<=high){
      let mid=Math.floor((high+low)/2);
      if(arr[mid]>=target){
         ans=mid;
         high=mid-1;
        }else{
          low=mid+1;
      }
    }
    return ans;
  }

  console.log(searchInsert([1,3,5,6],6
    ));