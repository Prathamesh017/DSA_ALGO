// https://leetcode.com/problems/generate-parentheses/description/
//Generate n pairs of parentheses which should be valid ,
//valid = n=2  (())->valid ()()=>valid ())(-> in valid

//SOL - With the help of backtracking we will try to generate all possible open close combinations , and check for valid ones

//T.C - we are generating 2n string and each string has 2 option on going furthur , hence T.C - 2^2n - for n 2->16 possible str combination
//S.C - no auxillary space , but stack space will be 2*n according to recursion tree

function isValid(str) {
  let count = 0
  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (char === '(') {
      count++
    } else {
      count--
    }
    if (count < 0) {
      return false
    }
  }
  return count === 0 ? true : false
}
function generateParenthese(str, n, result) {
  //maximum length base case
  if (str.length === n * 2) {
    if (isValid(str)) {
      result.push(str)
    }
    return result
  }

  str += '('
  generateParenthese(str, n, result)
  str = str.slice(0, -1)
  str += ')'
  generateParenthese(str, n, result)
  str = str.slice(0, -1)
  return result
}




//A bit optimized
function generateParenthese2(str, n, result, openCheck, closeCheck) {
  //maximum length base case
  if (str.length === n * 2) {
    // if (isValid(str)) {
      result.push(str)
    // }
    return result
  }
  //no need to call recursion furthur if openCheck or closeCheck already gretter than n as it should be at max==n for balanced parantheses
  if (openCheck <= n) {
    str += '('
    generateParenthese(str, n, result, openCheck + 1, closeCheck)
    str = str.slice(0, -1)
  }
  //close check should always be less than open , if it bigger in any scenerio , we can tell the created string won't be balanced
  if (closeCheck<openCheck && closeCheck<=n){
    str += ')'
    generateParenthese(str, n, result, openCheck, closeCheck+1)
    str = str.slice(0, -1)

  } 
  return result
}



const res = generateParenthese2('', 3, [],0,0)
console.log(res)