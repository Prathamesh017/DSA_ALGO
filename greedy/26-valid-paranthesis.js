//https://leetcode.com/problems/valid-parenthesis-string/



//given a string consisting '(' ,')' or * (which can either mean opening or closing  or can mean an empty string as well) accordingly hence find out the given string is valid or not

//Brute Force - Simple Login , If found ) decrement , if not ( incrment , the star can possibly consist "" ,),( with recurion we try out every possible combination
//Works Correctly - T.L Excedded T.C ->3^N  
//Can be improved with D.P (Later)
//TODO WITH DP
function recursiveCall(str,i,count){
  if(count<0){
    return false;
  }
  if(i===str.length){
    return count===0?true:false;
  }
  let char=str.charAt(i);
  if(char==="("){
    return recursiveCall(str,i+1,count+1);
   
  }else if(char===")"){
    return recursiveCall(str,i+1,count-1);
  }else{
    //no inclusions
    let res;
    res=recursiveCall(str,i+1,count);
    if(res===true){
      return true;
    }
    //as (
    res=recursiveCall(str,i+1,count+1);
    if(res===true){
      return true;
    }
    res=recursiveCall(str,i+1,count-1);
    if(res===true){
      return true;
    }
    return false;

  }
}

function validParanthesis(str){
 const res=recursiveCall(str,0,0);
 return res;
}

//2 Pointers
//1st we go left to right , adding ( and * and once we get ) we decrement , if after including everyone (i.e '(' ,"*")) we still got count less than 0 so no way our string is valid one
//same procedure for closing bracket from right to left
function validParanthesis2(str){

  // Left to right;
  let openingBracket=0;
  for (let  i= 0; i<=str.length; i++){
     let char=str.charAt(i);
     if(char===")"){
      openingBracket--;
     }else{
      openingBracket++;
     }
     if(openingBracket<0){
      return false;
     }
  }

  let closingBracket=0;
  for (let i= str.length-1; i>=0; i--){
     let char=str.charAt(i);
     if(char==="("){
      closingBracket--;
     }else{
      closingBracket++;
     }
     if(closingBracket<0){
      return false;
     }
  }
  return true;


}

const str='(*))'
const res=validParanthesis2(str);
console.log(res);