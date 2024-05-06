//https://leetcode.com/problems/longest-repeating-character-replacement/description/

//? Give a str and integer k ,we can convert k characters in any other chars for eg ABCAAB k=2 can I change any 2 chars to A,B,C andn generate a max consecutive substring  eg- s = "AABABA", k = 1  if I convert middle B into A we can get the longest sub with 4 same chars


/* Logic -
Step 1- find the longest frequency of a substring for eg AABABBA for [A]=1 [A,A]=2 .[A,A,B]=2 ,[A,A,B,A=]3 so and so forth  like A is appearing max  times
Step 2- SO it makes sense, to convert the minimum appearing chars to change right so that we can get maximuum subsstring like [A,A,B,A] changing B WOULD MAKE SENSE
Step 3 - to find no of changes to done 
//* formula -> substring.length- max frequency
 eg "AABABA" here if we consider the whole string max frequency is of A=4 and and length is 6 hence no of changes that is B right would 2
Step 4- but the change are only valid if there less than k as we can make only k changes  
*/
//Brute Force - Generate All Substrings Valid But Exceed T.L
function longestRepeatingSubstr(str,k){
  let map=new Map();
  let max=0;
  for (let i = 0; i < str.length; i++) {
    let charAtI=str.charAt(i);
    let maxFrequency=0;
    map.set(charAtI,1);
    for (let j = i+1; j < str.length; j++) {
    let charAtJ=str.charAt(j);
      if(map.has(charAtJ)){
        let occ=map.get(charAtJ);
        map.set(charAtJ,occ+1);
      }else{
        map.set(charAtJ,1);
      }
      maxFrequency=Math.max(maxFrequency,map.get(charAtJ)); //Step 1 
        let subStringLength=j-i+1
        let changeRequried=subStringLength-maxFrequency; //Step 3
        if(changeRequried<=k){
          max=Math.max(max,subStringLength);
        }else{
          break;
        }
    }
    map=new Map();

  }
  return max;
 
}

// const res=longestRepeatingSubstr("ABAB",2);
// console.log(res);

// Sliding Window

function longestRepeatingSubstr2(str,k){
  let map=new Map();
  let max=0;
  let left=0;
  let right=0;
  let maxFrequency=0;
  while(right<str.length){
    let char=str.charAt(right);
    if(map.has(char)){
      let occ=map.get(char);
      map.set(char,occ+1);
    }else{
      map.set(char,1);
    }
    maxFrequency=Math.max(maxFrequency,map.get(char)); 
    let subStringLength=right-left+1
    let changeRequried=subStringLength-maxFrequency; //Step 3
    if(changeRequried<=k){
    max=Math.max(max,subStringLength);
    
    }else{
      let char=str.charAt(left);
      let occ=map.get(char);
      map.set(char,occ-1);
      left++;
    }
    right++
  }
  
  return max;
 
}
const res2=longestRepeatingSubstr2("AABABBA",1);
console.log(res2);
