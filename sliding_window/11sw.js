// https://leetcode.com/problems/minimum-window-substring/description/
//* give two sts a and b return minimum substring of a where all the characters of b occurs including all its duplicates as well if need if not return empty string Example 1:
//? Input: a = "ADOBECODEBBANC", b = "ABBC"                                  Output: "BBANC"  Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.  it should contain 2 B'S AS T

//Brute Force
function minWindowSubstring(str1,str2){
  //Count all occurences
  let charMap=new Map();
  for (let i = 0; i < str2.length; i++) {
    let char=str2.charAt(i);
    if(charMap.has(char)){
      let occ=charMap.get(char);
      charMap.set(char,occ+1);
    }else{
      charMap.set(char,1);

    }
  }
  //Generate All Substrings ALMOST WORKS -T.L EXCEEDS
  let min=Number.MAX_SAFE_INTEGER;
  let res="";
  for (let i = 0; i < str1.length; i++) {
    let checkMap=cloneMap(charMap);
    for (let j = 0+i; j < str1.length; j++) {
      let char=str1.charAt(j);
      if(checkMap.has(char)){
        let occ=checkMap.get(char);
        if(occ>1){
          checkMap.set(char,occ-1);
        }else{
          checkMap.delete(char);
        }
      }
      if(checkMap.size<=0){
        let newMin=j-i+1;
        if(newMin<min){
          min=newMin;
          res=str1.slice(i,j+1);
          console.log(res);
      
        }
      }
    }
  }
  return res;
}

function cloneMap(originalMap) {
  const clonedMap = new Map();
  originalMap.forEach((value, key) => {
      clonedMap.set(key, value);
  });
  return clonedMap;
}

// const res=minWindowSubstring("aa","aa")
// console.log(res);

//Optimal 

function minWindowSubstring2(str1,str2){
   //Count all occurences
   let charMap=new Map();
   for (let i = 0; i < str2.length; i++) {
     let char=str2.charAt(i);
     if(charMap.has(char)){
       let occ=charMap.get(char);
       charMap.set(char,occ+1);
     }else{
       charMap.set(char,1);
 
     }
   }
 
   //Sliding Window
   let min=Number.MAX_SAFE_INTEGER;
   let res="";
   let left=0
   let pos=[];
   let right=0
   let count=0;

   while(right<str1.length){
    let char=str1.charAt(right);
    if(charMap.has(char)){
      let occ=charMap.get(char);
      //this suggest the value of str 2 exists in  str1
      if(occ>0){
        count++;
      }
      charMap.set(char,occ-1);
    }else{
      charMap.set(char,-1);
    }

    while(count===str2.length){
      let newMin=right-left+1;
      if(newMin<min){
        min=newMin;
        pos[0]=left;
        pos[1]=right;
        console.log(res);
      }
      let char=str1.charAt(left);
      let occ=charMap.get(char);
      if(occ>=0){
        count--;
      }
      charMap.set(char,occ+1);
      left++;
    }
    right++;
    
  }
  res=pos.length===2?str1.slice(pos[0],pos[1]+1):""  
  return  res;
}

const res=
minWindowSubstring2("AA","AA")
console.log("ss",res);