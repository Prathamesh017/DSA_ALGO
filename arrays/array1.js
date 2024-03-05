// https://www.codingninjas.com/studio/problems/ninja-and-the-second-order-elements_6581960?utm_source=striver&utm_medium=website&utm_campaign=a_zcoursetuf
//find the second largest and second smallest number;
function secondSmallest(arr){
  let smallest=arr[0];
  let secondSmallest=Number.MAX_VALUE;//max number

  for (let i = 0; i < arr.length; i++) {
    if(arr[i]<smallest){
      secondSmallest=smallest;
      smallest=arr[i];
    }else if(arr[i]>smallest && secondSmallest>arr[i]){
      secondSmallest=arr[i];
    }
    
  }
  return secondSmallest;
}
function secondLargest(arr){
  let largest=arr[0];
  let slargest=Number.MIN_VALUE;//max number

  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>largest){
      slargest=largest;
      largest=arr[i];
    }else if(arr[i]<largest && slargest<arr[i]){
      slargest=arr[i];
    }
    
  }
    
  
  return slargest;
}
console.log(secondSmallest([1,1, 2, 4, 6, 7, 5]));
console.log(secondLargest([1,1, 2, 4, 6, 7,7, 5]));







