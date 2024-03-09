// https://www.codingninjas.com/studio/problems/lower-bound_8165382
//lower bound is basically the number slightly greater than give k
//eg- [1,3,5,6,] k=4 the lower bound is 5 ;
//lower bound of k = n>=k
//upper bound of k=n>k
//for eg [0,1,2,2,2,3] k=2; then lower bound=2 upper bound=3;


function lowerBound(arr,k){
  let low=0;
  let high=arr.length-1;
  let ans=arr[high]; 
  //if k is bigger than last element , we can directly assume the last value will be lower bound

  while(low<=high){
    let mid=Math.floor((high+low)/2);

    if(arr[mid]>=k){
       ans=arr[mid];
       high=mid-1;
    }else{
      low=mid+1;
    }
  }
  return ans;
}
function upperBound(arr,k){
  let low=0;
  let high=arr.length-1;
  let ans=high; 
  //if k is bigger than last element , we can directly assume the last value will be lower bound

  while(low<=high){
    let mid=Math.floor((high+low)/2);
    if(arr[mid]>k){
       ans=mid;
       high=mid-1;
      }else{
      low=mid+1;
    }
  }
  return ans;
}
console.log(upperBound([1,4,7,8,10],7))