// https://leetcode.com/problems/single-element-in-a-sorted-array
//in binary search , we reduce half by diving arr with the help of target,but here there is no target, a single element can occur on any half
//so we have to look for observations
//for eg - [1,1,2,2,3,4,4] 
//1) if the mid has same number on its left or right side, it is not our ans
//2)we have to find out,where does our number occur left or right side
//3)we can see a pattern the left side of our ans for eg-3 here has same elements on even,odd index -(0,1)(2,3) and right side has odd,even index(5,6) and so , this happens because of our  single element  right?
//4)so if i found number on mid and mid-1 is same , and the pattern is even, odd I can say that my element must on right side of mid has the change has not occured yet(change means even,odd to odd,even) 
//5) By this I can eliminate my left side,and check on right side

function  singleElement(arr){
  if(arr.length===1){  //[1] 
    return arr[0];
  }
  //eliminate edge case for by checking 0th and last number has doesn't have anything on it's left and right side respectively
  if(arr[0]!==arr[1]){
    return arr[0]
  }
  if(arr[arr.length-1]!==arr[arr.length-2]){
    return arr[arr.length-1];
  }
  //so first and  last are handled, we start from 1 and n-2 index
  let start=1;
  let end=arr.length-2;
  let ans

  while(start<=end){
    let mid=Math.floor((start+end)/2);
    //searching
    if(arr[mid]!==arr[mid-1] && arr[mid]!==arr[mid+1]){
      ans=arr[mid];
      return ans;
    }
    //if not found start elimination
    if(mid%2===0){
      if(arr[mid]===arr[mid+1]){
        start=mid+1;
      }else{
        end=mid-1;
      }
    }else{
      if(arr[mid]===arr[mid-1]){
        start=mid+1;
      }else{
        end=mid-1;
      }

    }
  }

}
console.log(singleElement([1,1,2,2,3,3,4,4,5]));