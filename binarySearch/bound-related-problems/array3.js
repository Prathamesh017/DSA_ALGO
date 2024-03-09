// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array
function highBound(nums,target){
  let ans=-1;
  let start=0;
  let end=nums.length-1;
      while(start<=end){
      let mid=Math.floor((end+start)/2);
        if(nums[mid]===target){
           ans=mid;
        }
        if(nums[mid]<=target){
          start=mid+1;
        }else if(nums[mid]>target) {
          end=mid-1;
        }
 }
 return ans;
}

function lowBound(nums,target){
  let ans=-1;
  let start=0;
  let end=nums.length-1;
      while(start<=end){
      let mid=Math.floor((end+start)/2);
        if(nums[mid]==target){
           ans=ans===-1?mid:mid<ans?mid:ans;
           end=mid-1;
        }
        if(nums[mid]<target){
          start=mid+1;
        }else if(nums[mid]>target) {
          end=mid-1;
        }
 }
 return ans;
}


var searchRange = function(nums, target) {
   let ans=[]
   ans[0]=lowBound(nums,target);
   ans[1]=highBound(nums,target);
   return ans;
};


console.log(searchRange([1,2,2,2,3,3,4],3))
//better solution
// var searchRange = function(nums, target) {
//    const binarySearch = (nums, target, isSearchingLeft) => {
//        let left = 0;
//        let right = nums.length - 1;
//        let idx = -1;
     
//        while (left <= right) {
//            const mid = Math.floor((left + right) / 2);
           
//            if (nums[mid] > target) {
//                right = mid - 1;
//            } else if (nums[mid] < target) {
//                left = mid + 1;
//            } else {
//                idx = mid;
//                if (isSearchingLeft) {
//                    right = mid - 1;
//                } else {
//                    left = mid + 1;
//                }
//            }
//        }
     
//        return idx;
//    };
   
//    const left = binarySearch(nums, target, true);
//    const right = binarySearch(nums, target, false);
   
//    return [left, right];    
// };