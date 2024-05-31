//https://leetcode.com/problems/132-pattern/
//Do this again (understand again)
/*in a given arr , find a subsequence(not a subarr) where  index i<j<k and arr[i]<arr[k]<arr[j] is valid
example 

Input: nums = [1,2,3,4] Output: false
Explanation: There is no 132 pattern in the sequence.

Input: nums = [3,1,4,2] ,Output: true
Explanation: There is a 132 pattern in the sequence: [1, 4, 2].
*/

//Brute Force  With Time Limit Exceded
function no132pattern(arr){
 for (let i = 0; i < arr.length; i++) {
  for (let j = 1+i; j < arr.length; j++) {
    if(arr[i]<arr[j]){
      for (let k = j+1; k <arr.length; k++) {
        if((arr[k]<arr[j]) && (arr[i]<arr[k])){
          return true;
        }
      }
    }
  }
 }
 return false;
}


//Optimal Approach
//seeing the indexes i<j<k and arr[i]<arr[k]<arr[j], so we need the biggest elment will appear somewhere in middle and just a little smaller thna it on right side and most smallest on left 

//so it will be better if we move the right, 
/*Approach
1)We willtake  the the rightmost elment as the biggest and start to move left , 
2)if we find the no , smaller than current max, we know can be good option for kth elment , we will store it in stack as we also want to be greter than 'i'th element
3) once we find bigger (if we don't it would be false as arr[j]>arr[k], as number appearing in middle somewhere would be automatically be greater than rightmost elements) , we can make it the jth elment, the no just smaller than  it from stack the  kth element
4) and now we know ith element which is smaller than both would appear somewhere on left of the biggest element and once we find a number smaller than both j, k  , it can be our ith number and we are moving on left side so automatically satisfying the i<j<k condition as well;
*/


const { Stack } = require('./0-stack-101')
function no132patternSort(arr){
 const stack=new Stack();
 
 //num2 is the midle  number;
 let num3=Number.MIN_SAFE_INTEGER;
 let num2=0; //this will the biggest element;

 for (let i=arr.length-1; i>=0; i--) {
  let ele=arr[i];
  //initally no number will be less than our smallest number;
    if(ele<num3 && num3<=num2){
      //once num3 and num2 are set we only need to find a elment which would smaller than num3
      return true;
    }
    //assuming ele to be the biggest number m we have to keep poping data out of stack till we get a number smaller than ele , which automatically make it num3
    while(!stack.isEmpty() && stack.top.data<ele){
      num3=stack.peek();
      stack.pop();
    }
    //assingning the biggest number to num2;
    num2=ele;
    stack.push(num2);
 }
 return false;


}

const arr=[-2,1,2,-2,1,2];
const res=no132patternSort(arr);
console.log(res);