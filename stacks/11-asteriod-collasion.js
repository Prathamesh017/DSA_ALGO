//https://leetcode.com/problems/asteroid-collision/description/ , 

//Most Difficult No OF EDGE CASES

/*In a arr, there are n asteriods . each represents it size and sign represent its speed '-' means left  and '+' means right . 
If there in same direction , they won't meet ,  if opposite they met and if both of same size , both will explode , if not then less one will explode


Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide
*/

const { Stack } = require('./0-stack-101')

function sameSignCheck(top,ele){
  if((top>=0 && ele>=0) || (top<0 && ele<0)){
    return true;
  }else{
    return false;
  }
}

function asteriodCollasionRev(arr){
  let stack=new Stack();
  stack.push(arr[0]);

  for (let i =1; i<arr.length; i++) {
    let ele=arr[i];
    let top=stack.peek();
    if(stack.isEmpty()){
      stack.push(ele);
    }
    else if(sameSignCheck(top,ele)){
      stack.push(ele);
    }else if(top<0 && ele>=0){
      stack.push(ele);
    }else if(Math.abs(ele)===Math.abs(top)){
        stack.pop(); 
    }else if(Math.abs(top)>Math.abs(ele)){
      continue;
    }
    else if(Math.abs(top)<=Math.abs(ele)){
      let cancelledOut=true;
        while(cancelledOut && !sameSignCheck(top,ele) && Math.abs(top)<=Math.abs(ele)){
          stack.pop();
          if(Math.abs(top)===Math.abs(ele) && (!sameSignCheck(top,ele))){
            cancelledOut=false;
          }
          top=stack.peek();    
        }
      let condititon=sameSignCheck(top,ele)?true:Math.abs(ele)>=Math.abs(top)
      if((stack.isEmpty() || condititon) && cancelledOut){
          stack.push(ele);
      }
    }
  }
  const ans=[];
  while(stack.top){
    ans.push(stack.peek());
    stack.pop();
  }
  return ans.reverse();
}



const arr=[-2,-1,1,-2];
const res=asteriodCollasionRev(arr);
console.log(res);

