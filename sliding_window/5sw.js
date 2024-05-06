//? Longest Substring with Distinct Chars K .You are given a string 'str' and an integer K. Your task is to find the length of the largest substring with at most K distinct characters.                                                          eg-  abbbbbbc k =2  so longest sub=abbbbbb as there are only 2 distict elememnts

 
//Brute Force T.C (O(N2)))
function longestDistictSubString(str,k){
  let charArr=[];
  let unique=k-1;
  let max=0;
  for (let i = 0; i < str.length; i++) {
    let charAtI=str.charAt(i);
    charArr.push(charAtI);
    for (let j = 1+i; j < str.length; j++) {
      let charAtJ=str.charAt(j);
      if(charArr.includes(charAtJ)|| unique){
        if(!charArr.includes(charAtJ)){
          unique--;
        }
        charArr.push(charAtJ);
        max=Math.max(max,charArr.length);
      }else{
        break;
      }      
    }
    unique=k-1;
    charArr=[]
  }
  return max;
}

const res=longestDistictSubString('abcddefg',3);
console.log(res);


//Sliding Window (O(N)) 
function longestDistictSubString2(str,k){
  let left=0;
  let right=0;
  let map=new Map();
  let max=0;
  while(right<str.length){
    let charAt=str.charAt(right);
    if(map.has(charAt)){
      let val=map.get(charAt);
      map.set(charAt,val+1);
    }else{
      map.set(charAt,0);
    }
    if(map.size>k){
      let charAt=str.charAt(left);
      let val=map.get(charAt);
      map.set(charAt,val-1);
      left++;
    }else{
      max=Math.max(max,right-left+1);
    }
    right++;
  }
  return max;

}

const res2=longestDistictSubString2('abcddefg',3);
console.log(res);

