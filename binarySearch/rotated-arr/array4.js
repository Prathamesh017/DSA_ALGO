//https://leetcode.com/problems/find-peak-element/description/
//peak element will be element which is greater than both its left and right causing a peak , it doesn't necessarly it will be the largest element
//for eg [1,2,1,3,5,6,4] so here 2 and 6 are peak element
//you can imagine  like like a moutain 1-->2<--1-->3-->5-->6<---4
//
function searchForPeak(arr){
  let peak;
  if(arr.length===1){
    peak=0;
  }
  //check for first and last as they won't have mid-1 and mid+1 elements
  if(arr[0]>arr[1]){
    return peak=0;   //[2,1]
  }
  if(arr[arr.length-1]>arr[arr.length-2]){

   return  peak=arr.length-1; //[4,5]
  }
  //can start from 1 and n-2;
  let start=1;
  let end=arr.length-2;
  while(start<=end){
    let mid=Math.floor((start+end)/2);
    //search
    if((arr[mid-1])<arr[mid] && arr[mid]>arr[mid+1]){
      console.log(mid);
      return peak=mid;
    }
    // for eg -[1,2,3,5,1],
    //here I can say if mid-1<mid, the peak will be right side,as we are climbing up
    if(arr[mid-1]<arr[mid]){
      start=mid+1
    }
    //here I can say if mid+1<mid, the peak will be left side,as we are climbing down
    else{
      end=mid-1;
    }
  }

  return peak;
}

console.log(searchForPeak([1,2,1,2,1]))
//this will work on mutiple peaks as long as we have to return any on of the peak