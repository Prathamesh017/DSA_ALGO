// Bubble Sort works by comparing adjacent element and making swap
//STEPS
//1)COMPARE WITH y and y+1 element as we compare adjacent element
//2)FIRST Loop Goes upto 2nd last index as last value will not have any adjacent value to compare with
//3)SECOND LOOP- with every iteration out last index will be correct hence no reason to go all the way hence -x; 

function bubble(arr){
  for (let x = 0; x < arr.length-1; x++) {
    for (let y = 0; y <arr.length-x-1
      ; y++) {
      if(arr[y]>arr[y+1]){
        let temp=arr[y]
        arr[y]=arr[y+1];
        arr[y+1]=temp;
      }
      
    }
  }
  return arr;
}

console.log(bubble([4,2,1,5,3]))