function bubbleSort(arr,size){
  if(size===1){
    return;
  }
  for (let x = 0; x < size; x++) {
    if(arr[x]>arr[x+1]){
      let temp=arr[x]
      arr[x]=arr[x+1];
      arr[x+1]=temp;
    }
  }
  bubbleSort(arr,size-1)
  return arr;

}


console.log(bubbleSort([4,8,2,6,1,7,5,3],7))