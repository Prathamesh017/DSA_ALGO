//https://leetcode.com/problems/optimal-partition-of-string(simple)

//given a str , make max substring in such a way that all substrings chars must be unique
function uniqueStringPartition(str){
  let subArr=[];
  let count=0;
  for (let i = 0; i < str.length; i++) {
    let char=str.charAt(i);
    if(subArr.includes(char)){
      console.log(subArr);
      count++;
      subArr=[];
    }
    subArr.push(char);
  }
  return count+1;
}

const str="abacaba";
const res=uniqueStringPartition(str);
console.log(res);