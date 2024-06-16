//https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words(changed code based on inputs only)
//you will be given arr of str containing 2 letter strings , form a palindrome and give me biggesst palindrome possible
/*Input: words = ["ab","ty","yt","lc","cl","ab"]
Output: 8
Explanation: One longest palindrome is "ty" + "lc" + "cl" + "yt" = "tylcclyt", of length 8.
Note that "lcyttycl" is another longest palindrome that can be created.*/

//Time Limit Exceeds
function twoLetterPalindrome(arr) {
  let i = 0
  let length = 0
  let isSinglePair = false
  while (i < arr.length) {
    let str1 = arr[i]
    let indexPair = arr.lastIndexOf(str1.charAt(1) + str1.charAt(0))
    if (indexPair > 0) {
      length = length + 4 //2 pairs
      arr.splice(i, 1)
      arr.splice(indexPair - 1, 1)
    } else if (str1.charAt(0) === str1.charAt(1)) {
      isSinglePair = true
      arr.splice(i, 1)
    } else {
      arr.splice(i, 1)
    }
  }
  return isSinglePair ? length + 2 : length
}


//to avoid changing the arr constantly used map to store frequency
function twoLetterPalindrome2(arr) {
  //which stores frequenceis in map
  const map = new Map()
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      const val = map.get(arr[i])
      map.set(arr[i], val + 1)
    } else {
      map.set(arr[i], 1)
    }
  }
  let palindromeLength = 0
  let validSinglePair = 0
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i]
    let pairChar = char.charAt(1) + char.charAt(0)
    if (char === pairChar && map.has(char)) {
      let occur=map.get(char);
      if(occur%2===0){
        palindromeLength=palindromeLength+(occur*2)
      }else{
        validSinglePair=true;
        palindromeLength=palindromeLength+((occur-1)*2)
      }
      map.delete(char);
    }
    else if (map.get(pairChar) > 0 &&  map.get(char) > 0) {
      palindromeLength = palindromeLength + 4
      let charOcc = map.get(char)
      let pairCharOcc = map.get(pairChar)
      map.set(char, charOcc - 1)
      map.set(pairChar, pairCharOcc - 1)
    }
  }
  console.log(validSinglePair);
  return validSinglePair ? palindromeLength+2 : palindromeLength;
}

const arr = ["em","pe","mp","ee","pp","me","ep","em","em","me"]
const res = twoLetterPalindrome2(arr)
console.log(res)
