// *  Merge Sort With Recurision

//Merge Sort Work by dividing the arr till we are left with one sized arr , then we start merging

/* Time Complexity - mergeSort run by dividing  the arr in two parts, hence logn and the merge function run  till n loop while checking and pushing element hence 
* T.C - n*log(n)
* S.C - stack space O(n) and auxillary space with arr O(n)
*/
function merge(arr,start,mid,end){
  let left=start;
  let right=mid+1;
  let temp=[];
  while(left<=mid && right<=end){
    if(arr[left]<arr[right]){
      temp.push(arr[left]);
      left++;
    }else{
      temp.push(arr[right]);
      right++;
    }
  }
   while(left<=mid){
    temp.push(arr[left]);
      left++;
   }
   while(right<=end){
    temp.push(arr[right]);
      right++;
   }

   for (let i = start;i <=end; i++) {
    arr[i]= temp[i-start];
   }
   console.log(arr);
   return arr;
  
  
}
function mergeSort(arr,start,end){

  if(start>=end){
    return;
  }
  let mid=Math.floor((start+end)/2)
   mergeSort(arr,start,mid);
   mergeSort(arr,mid+1,end);

   return merge(arr,start,mid,end);

}


let arr=[5,12,1,2,3,2]
let start=0;
let end=arr.length-1;
const res=mergeSort(arr,start,end);
console.log(res);