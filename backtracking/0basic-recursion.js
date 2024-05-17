//Reverse A String Through Recursion
function reverseStr(str,index,rev){
  if(index>=str.length){
    return rev;
  }

  rev=strPrint(str,index+1,rev);
  rev+=str.charAt(index);
  return rev;

}
// const res=reverseStr("abc",0,"");
// console.log(res);

//Factorial Recursion
function factorial(n){
  if(n<=1){
    return 1;
  }
  
  return n*factorial(n-1);
}

//example of tail recursion
// function factorial(n,ans){
//   if(n<=1){
//     return ans;
//   }
  
//   return factorial(n-1,ans*n);
// }

const res=factorial(5,1);
console.log(res);


// function fibonacci(n){
//   if(n<=1){
//     return n;
//   }
//   return fibonacci(n-1)+fibonacci(n-2);
// }
// const res=fibonacci(6);
// console.log(res);