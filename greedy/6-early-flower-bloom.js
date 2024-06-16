// https://leetcode.com/problems/earliest-possible-day-of-full-bloom/description/ (good example ->ignore second leetcode one example)

//given plantime and growtime arr , we can only plant one plant at a day
/*
Input: plantTime = [1,4,3], growTime = [2,3,1]
Output: 9
Explanation:
On day 0, plant the 0th seed. The seed grows for 2 full days and blooms on day 3.
On days 1, 2, 3, and 4, plant the 1st seed. The seed grows for 3 full days and blooms on day 8.
On days 5, 6, and 7, plant the 2nd seed. The seed grows for 1 full day and blooms on day 9.
Thus, on day 9, all the seeds are blooming.
 */

//Approach - Ignore 2 example in leetcode, we know that the grow taking time till we can plant other seeds , if we sort grow arr from bigger to smaller and then start planting trees accordingly we get our ans (try to dry run)
//

function earlyFlowerBloom(plant, grow) {
  // Create pairs of [grow, plant]
let pairedArray = grow.map((growValue, index) => [growValue, plant[index]]);

// Sort the paired array by the grow values in descending order
pairedArray.sort((a, b) => b[0] - a[0]);

// Extract the sorted grow values and the reordered plant values
const sortedGrow = pairedArray.map(pair => pair[0]);
const reorderedPlant = pairedArray.map(pair => pair[1]);

  let max=0;
  let sum=0
  //find the max days a plant might need  with plant+grow till bloom
  for (let i = 0; i <reorderedPlant.length; i++) {
    let total=sum+sortedGrow[i]+reorderedPlant[i];
    max=Math.max(max,total);
    sum=sum+reorderedPlant[i];
    console.log(sum);
  }
  return max;
}

const plant = [1,1]
const grow =  [3,1]
const res = earlyFlowerBloom(plant, grow)
console.log(res)
