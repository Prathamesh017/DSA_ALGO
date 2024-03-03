//check for element  which is smaller than current index and swap
//STEPS
//1)GET THE FIRST INDEX
//2)CHECK WITH FIRST+1 INDEX and swap if FIRST>FIRST+1 INDEX
//3)AFTER SWAP CHANGE THE CURRENTINDEX VALUE AS AFTER SWAP VALUE AT FIRST POSITION HAS CHANGED 
// REPEAT
function selectionSort(arr){
  let size=arr.length;
  for (let x = 0; x<size; x++) {
    let currentIndex = arr[x];

    for(let y=x+1;y<size;y++){
      if(currentIndex>arr[y]){
        //then swap
        let temp=arr[x];
        arr[x]=arr[y];
        arr[y]=temp;

        //after swap the current index value is now shifted
        currentIndex=arr[x]
      }
    }
  
  }
  return arr;
}


console.log(selectionSort([3,4,2,1,5]));
