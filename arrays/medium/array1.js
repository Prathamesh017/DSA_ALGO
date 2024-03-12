// https://leetcode.com/problems/sort-colors/
// Sol-1 - Any of the Sorting Algo - Merge Sort
// Sol -2
// function sortColor(arr){
//   let ones=0;
//   let twos=0;
//   let zeros=0;

//   for (let i = 0; i < arr.length; i++) {
//     arr[i]===0?zeros++:arr[i]===1?ones++:twos++;
//   }

//   for (let i = 0; i <zeros; i++) {
//     arr[i]=0
//   }
//   for (let i = zeros; i <zeros+ones; i++) {
//     arr[i]=1;
//   }

//   for (let i = zeros+ones; i <ones+twos+zeros; i++) {
//     arr[i]=2;
//   }
//   return arr;
// }

//Soln- 3 optimal soln dutch national flag algorithm
//Try to visivalize this way with video,
//keep low and mid pointer to first index and high on last , we know 0 will be left and 2 will on right side , 1 be on middle position in sorted arr correct
//low-0th index pointer,mid->0th index,high->n-1 index
//so if we find 0 swap it with  left most part and  low++,
//if 1 -> no swap -> mid++
//if 2- >swap with  the righest and high++;

function sortColor(arr) {
  let low = 0
  let mid = 0
  let high = arr.length - 1

  while(mid<=high){
    // console.log(arr);
    if (arr[mid] === 0) {
      //shift to left most
      let temp = arr[low]
      arr[low] = arr[mid]
      arr[mid] = temp
      low++
      mid++
    }
    else if (arr[mid] === 1) {
      //no swap as 1 will be in  middle only
      mid++
    }
    else {
      //swap with the right most
      let temp = arr[high]
      arr[high] = arr[mid]
      arr[mid] = temp
      high--

    }
   
    
   
  }
  return arr
}
console.log(sortColor([2,0,2,1,1,0]))
