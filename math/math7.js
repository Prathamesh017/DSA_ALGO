//Custom Power Function
// js pow function is pow(2,3)=8 

//Simple Soln
function powerFun(a,b){
  let ans=1;
  for (let i = 0; i < b; i++) {
    ans=ans*a;
  }
  return ans;
}

//Better Approach
/*eg a=2 , b=21; ans=1;
  if b is odd if remove one  from it 
   (2^1)*(2^20)===2^21 correct?
   ans=1*2 (2 is the new spearted one)
   now 2^20 is same as (2^2)^(20/2)  i.e a^2 and b/2;
   so then it will be 4^10
   still even , again same  (4^2)^(10/2) 
   now = 16^5 
   now it odd hence (16^1)*(16^4)
   ans=1*2*16
   now  (16^4) is even hence (16^2)^(4/2);
   now 256^2 again even hence (256^2)^(2^2)
   now 65536^1 now odd 
   ans=1*2*16*65536  as 1/2==0 
*/

//T.C Log2N
function powerFun2(a,b){
  let ans=1;
  let sign=b>0?true:false;
  b=Math.abs(b);
  while(b>0){
    if(b%2===0){
      a=a*a;
      b=Math.floor(b/2);
    }else{
      ans=ans*a;
      b=b-1;
    }

  }
  return sign?ans:(1/ans);
}
const res=powerFun2(2,-3);
console.log(res,Math.pow(2,-3));


