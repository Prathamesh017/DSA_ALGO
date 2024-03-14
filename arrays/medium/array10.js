//https://leetcode.com/problems/subarray-sum-equals-k/description/

//Soln- Bute Force
function sumSubarray(arr, k) {
  //time limit exceded
  let sum = 0
  let subArr = 0
  let i = 0
  while (i < arr.length) {
    for (let j = i + 0; j < arr.length; j++) {
      sum = sum + arr[j]
      if (sum === k) {
        subArr++
      }
    }
    sum = 0
    i++
  }

  return subArr
}
//Optimal With Prefix Sum

function subSubarray2(arr, k) {
  let map=new Map();
  map.set(0,1);
  let sum=0;
  let count=0;
  for (let i = 0; i < arr.length; i++) {
     sum += nums[i];
        let rem = sum - k;

        if (map.has(rem)) {
            count += map.get(rem);
        }
        map.set(sum, (map.get(sum) || 0) + 1);
  }
  return count;
}
console.log(subSubarray2([1,2,3], 3))
