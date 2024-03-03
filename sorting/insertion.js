// Insertion works by  comparing adjacent values till left<right.
//Steps
// 1)IT WILL CHECK Y AND Y-1 VALUE TILL Y-1<0 AND LEFT>RIGHT
// 2) IF CONDITION MATCHED IT WILL UPDATE THE RIGHT SIDE 
// 3)WILL UPDATE THE SMALLER VALUEL


function insertion(arr){
  for (let y = 1; y < arr.length; y++) {
    let x=y-1;
    let curr=arr[y];
    
    

    while (x >= 0 && arr[x] > curr) {
      //update the right side with bigger value x+1==y
      arr[x + 1] = arr[x];
      x = x - 1;
    } 
   //update the left side with smaller value x+1===x due (x=x-1));
    arr[x + 1] = curr;    
  }
  return  arr;
}
console.log(insertion([4,2,1,5,3]))