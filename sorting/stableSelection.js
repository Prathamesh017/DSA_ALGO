// Stable-  instead of swapping , we will be shifiting the values to maintain the order and provide stabilty
//STEPS
// 1) FIRST FIND THE MINIMUM INDEX WITHIN THE GIVEN RANGE
// 2) KEEP SHIFTING THE VALUES TO RIGHT SIDE TO MAKE THE X the minimum element found
// 3)STORE MINVALUE AT XTH INDEX
function stableSelection(arr){
    for (let x = 0; x < arr.length; x++) {
      let minIndex=x;

      for (let y = x+1; y < arr.length; y++) {
         if(arr[x]>arr[y]){
          // MINIMUM INDEX FOUND
          minIndex=y;
         }
      }
      let minValue=arr[minIndex];
      // KEEP SHIFTING till TILL REACHED X
      while(minIndex>x){
        arr[minIndex]=arr[minIndex-1];
        minIndex--;
      }
      // PLACE MINVALUE  at X INDEX
      arr[x]=minValue;


      
    }
    return arr;
}
console.log(stableSelection([3,4,2,1,5,12,0,6]));
