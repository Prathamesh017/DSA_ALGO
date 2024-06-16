//https://leetcode.com/problems/minimum-time-to-make-rope-colorful

/* give a string , condering every char as a indivual ballon of a color , two same chars should not be adjacent   , it should be removed , but the minimum time ballon should be removed
* Example Input: colors = "aabaa", neededTime = [1,2,3,4,1]
Output: 2
Explanation: Bob will remove the balloons at indices 0 and 4. Each balloons takes 1 second to remove.
There are no longer two consecutive balloons of the same color. Total time = 1 + 1 = 2.
*/
//T.L Exceeds
function removeBallon(str, arr) {
  let i = 0
  let j = 1
  let ans = 0
  while (j < str.length) {
    let firstPtr = str.charAt(i)
    let secondPtr = str.charAt(j)
    if (firstPtr === secondPtr) {
      if (arr[i] < arr[j]) {
        ans += arr[i]
        i=j
        j++
      } else {
        ans += arr[j]
        j++
      }
    } else {
      i=j
      j++
    }
  }
  return ans
}



const str = 'aaabbbabbbb'
const arr = [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1]
const res = removeBallon(str, arr)
console.log(res)
