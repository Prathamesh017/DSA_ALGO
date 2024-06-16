//https://leetcode.com/problems/maximum-69-number/description/(just read question easy)
//give a number just containing 6 and 9 for eg ->9696 change any number to make it biggest number



function max69Number(num){
  let numStr=""+num;
  let ans="";
  for (let i = 0; i <numStr.length; i++) {   
      let char=numStr.charAt(i);
      if(char==='6'){
       ans=ans+9+numStr.slice(i+1,numStr.length);
       break;
      }
      ans+=char;
  }
  return +ans;
}
const res=max69Number(9666);
console.log(res);



