
// https://leetcode.com/problems/regular-expression-matching/description/

//Logic  - *  Matches zero or more of the preceding element. so it is up to use to take it or not .
/*Lets take example  str= ab  pattern a*ab   
here 
1) first we can match a===a move forward b and *ab 
2) but '*' always need it's precedding char hence we will have b and a*ab 
3)If we match we will return false  
4)but we have also have option take '8' 0 zero times ,so if we skip it , it will be str=b  ,pattern ab matching hence true

*/

//This 2 cases need to be handled correctly '.*' and 'a*' (any char instead of a ) as * means we can skip it entirely or take 2,3,4 n times
function regularExpress(str,pattern,index,ans){
  if((!str)&& (!pattern)){
    return ans=true;
  }
  let ch1=str.charAt(index);
  let ch2=pattern.charAt(index);
  if(ch1 && ch2 && (ch1===ch2 || ch2==='.') && pattern.charAt(index+1)!=='*'){
    ans=regularExpress(str.slice(index+1),pattern.slice(index+1),index,ans);
  }else if(pattern.charAt(index+1)==='*'){
    //not taking the * pattern
    ans=regularExpress(str,pattern.slice(index+2),index,ans);
    if(!ans){
    // ans=regularExpress(str,pattern.slice(index+2),index,ans);
    if(ch1 && ch2 && (ch1===ch2 || ch2==='.')){
      if(ch1!==str.charAt(index+1) && ch2!=="."){
        ans=regularExpress(str.slice(index+1),pattern.slice(index+2),index,ans);
      }else{
        ans=regularExpress(str.slice(index+1),pattern,index,ans);
      }
    }else{
      return ans=false;
    }
    }
  }
  else{
    return ans=false;
  }
  return ans;
  
}
let ans=true;
const res=regularExpress("a",".*..a*",0,ans);
console.log(res)