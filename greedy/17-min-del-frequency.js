//https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique

/*give  a str , find minimum chars to remove to make string  good
a good str is a string which has different frequency for each unique char
aab  a-2, b-1  0 changes , aabb - a=2,b=2 remove 1 a or 1 b  then different frequencies 
*/


function minDelFrequence(str){
  const frequencyMap=new Map();
  for (let i = 0; i < str.length; i++) {
    let char=str.charAt(i);
    if(frequencyMap.has(char)){
       let occ=frequencyMap.get(char);
       frequencyMap.set(char,occ+1);
    }else{
      frequencyMap.set(char,1);
    }
  }
let count=0;
let set=new Set();
for (let [key, value] of frequencyMap) {
   if(!(set.has(value))){
     set.add(value)
   }else{
    let freqCount=value;
     while(value>=1){
      if(!(set.has(value-1)) && value-1!==0){
         set.add(value-1);
         count+=freqCount-(value-1);
         break;
      }else{
        value=value-1;
      }
     }
     if(value===0){
      count+=freqCount;
     }
   }
}
return count;
}



const str="bbcebab";
const res=minDelFrequence(str);
console.log(res);