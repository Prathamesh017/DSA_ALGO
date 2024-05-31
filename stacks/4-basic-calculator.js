//https://leetcode.com/problems/basic-calculator/description/
/*Given a string s representing a valid expression,  return the result of the evaluation.
Input: s = "(1+(4+5+2)-3)+(6+8)"
Output: 23
*/

// Approach - no of all single char can be digits 0-9, +,/,-,* operations or brackets ,


const { Stack } = require('./0-stack-101')


function basicCalc(str){
  const stack=new Stack();
  let strArr=str.split("");
  let signs=["+","-"]
  let number=0;
  let result=0;
  let sign =1;
  for (let i = 0; i <strArr.length; i++) {
    let char=str.charAt(i)
    if(char.trim().length===0){ //handling whitespaces
      continue;
    }
    else if((!isNaN(char))){
      number=(number*10)+ (+char);
    }
    //if it is a sign
    else if(signs.includes(char)){
     //sign means we got number ready  (1 + ) so 1 is already in no so lets add with the sign
     result=result+(number*sign);
     sign=char==="-"?-1:1
     number=0;
    }else if(char==="("){
       stack.push({sign,result});
       sign=1
       result=0;
    }else if(char===")"){
      if(number!=0){
        result=result+(number*sign);
        number=0;
      }
      let data=stack.top.data;
      result=((data.sign*data.result)+result)*data.sign;
      stack.pop();
    }
  }
  if(number!==0){
     result=result+(number*sign);
  }
  return result;
}

console.log(1-(    -2))
const res=basicCalc("1-(    -2)");

console.log(res);



