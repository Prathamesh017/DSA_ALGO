//https://leetcode.com/problems/minimum-replacements-to-sort-the-array(won't be able to figure out in real time)

//given an arr , you can replace any element into 2 pairs for eg- 5->2,3  such that arr should be in non-decreasing(it should increase or stay same like [1,2,4,4,6,6,7] but shouldn't decrease)  , so find minimum break down needed to make arr no-decreasing


/*Input: nums = [3,9,3] ,Output: 2
Explanation: Here are the steps to sort the array in non-decreasing order:
- From [3,9,3], replace the 9 with 3 and 6 so the array becomes [3,3,6,3]
- From [3,3,6,3], replace the 6 with 3 and 3 so the array becomes [3,3,3,3,3]
There are 2 steps to sort the array in non-decreasing order. Therefore, we return 2.
the 2 steps = 9 into 6 and 3 and 6 into 3 and 3

so  9 is ultmatily 3,3,3, so no of steps will be pair-1 =3-1=2
*/

/*Approach
1)we will go first right to left easy to compare
2)we will find pairs for eg [12,3] so 12 would be divided into pairs which be smaller or equal to 3 ,also we would try to break it done to most bigger pairt for eg 12->3,3,3,3 instead of 12->2,2,2,2,2,2 right 
hence we first divide for if [13,3]  we would get 3,3,3,3,1 hence if not 0 incrment by 1 again ok
3) to find the sutiable pair (not my approach)  arr[i]/pairs= 


*/
function  minReplacementArr(arr){
  let i=arr.length-2;
  let noOfOperations=0;
  for (let i = arr.length-2; i>=0; i--) {
    if(arr[i]<arr[i+1]){
      continue;
    }
    let pairs=Math.floor(arr[i]/arr[i+1]);
    if(arr[i]%arr[i+1]!==0){
      pairs++;
    }
    noOfOperations=noOfOperations+(pairs-1);
    arr[i]=Math.floor(arr[i]/pairs);
  }
  return noOfOperations;
}


const arr=[9,7,6];
const res=minReplacementArr(arr);
console.log(res);