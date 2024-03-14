//https://leetcode.com/problems/longest-consecutive-sequence/description/

//Soln -Using a Sorting and then doing a linear Search
//Better Soln

function longestSequence(arr){
  let set = new Set(arr);
  let i=0;
  let count=1;
  let max_count=0;
  while(i<arr.length){
    let p=1;
    while(set.has(arr[i]-p) && !set.has(arr[i]+1)){
      count++;
      p++;
    }
    i++;

    max_count=max_count>count?max_count:count;
    count=1;
    
  }
  return max_count;
}


console.log(longestSequence([100,4,200,0,1,2,5]));