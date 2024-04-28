/*GCD(HCF) of A 2 Nos i.e the highest common factor
for eg-  16-> 1,2,3,4,8,16      
         24-> 1,2,3,4,8,12,24 
these are the common factors 8 being the highest hence GCD/HCF=8
1 will always be default highest common factor of any 2 numbers

*/


function findGCD(num1,num2){
  //need to iterate only till minimum num
  let min=Math.min(num1,num2);
  let gcd=1; //by default
  for (let i = 2; i <=min; i++) {
    if(num1%i===0 && num2%i===0){
      gcd=i;
    }
  }
  return gcd;
}
//A Faster Approach 
function findGCDFaster(num1,num2){
  let min=Math.min(num1,num2);
  let gcd=1; //by default
  for (let i = min;i>=2; i--) {
    if(num1%i===0 && num2%i===0){
      //checking by last ensuring we will get the highest common factor
      gcd=i;
      break;
    }
  }
  return gcd;
}

/*but in both the cases the worst time complexity is still O(Min(n))
N being the minium of 2 numbers */

/*Eucledian Therome
gcd(a,b)=gcd(a-b,b) where a>b  ->this is equation
gcd(20,15)=gcd(5,15) i.e 5 reduce it more furthur
gcd(15,5)=gcd(10,5)  //changed position as a>b
gcd(10,5)=gcd(5,5)
gcd(5,5)=gcd(0,5)

we have to keep reducing till we get 1 value as 0, the second value is automatically our gcd

but subtracting takes time another way to make it more faster is to 
gcd(a,b)=gcd(a%b,b) where a>b;
gcd(20,15)=gcd(5,15); //a%b
gcd(15,5)=gcd(0,5) //changed position as a>b
got our ans much faster
*/

function findGCDByET(a,b){
  while(a>0 && b>0){
    if(a>b){
      a=a%b;
    }else{
      b=b%a;
    }
  }
  return a===0?b:a;
}

const res=findGCDByET(24,12);
console.log(res);