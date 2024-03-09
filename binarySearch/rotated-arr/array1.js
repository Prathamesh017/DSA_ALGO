// /https://leetcode.com/problems/search-in-rotated-sorted-array
//rotated array like this -[6,7,8,1,2,3,4,5]
//here we can say that always one half of the array is sorted
//for eg here mid==3 then left=[6,7,8,1] right=[2,3,4,5] right side sorted
//if I have target 7 I can search in left half , again mid=1
//now left =[6,7] right [8,1] now left is sorted , with this approach we can use binary search on rotated array as well


function searchOnRotatedArr(arr, target){
  let start=0;
  let end=arr.length-1;
   let ans=-1;
  while(start<=end){
    console.log(start,end);
    let mid=Math.floor((end+start)/2);
    if(arr[mid]===target){
      ans=mid;
      return ans;
    }
    //we can always assume that one half will be sorted
    //can resume right is sorted
    if(arr[mid]<=arr[end]){

       //check if target lises within the sorted or not
       if(arr[mid]<=target&& target<=arr[end]){
           start=mid+1;
       }else{
         end=mid-1;
       }

    }else{
  
      if(arr[start]<=target&& target<=arr[mid]){
        end=mid-1;
      }else{
        start=mid+1;
    }
  }
}
return ans;
}
console.log(searchOnRotatedArr([3,4,5,1,2],3))
//this will work for duplicates as well , but it will fail when we low==mid==high for eg [3,4,3,1,2,3] here low,high,mid all are 3 so it will be difficult to determine the sorted array 
// to solve this what we can if this condition occur some where we can trim down our search space  start=start+1;and end=end-1; 
//eg -https://leetcode.com/problems/search-in-rotated-sorted-array-ii 

