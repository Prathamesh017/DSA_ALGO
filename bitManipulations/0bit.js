//decimal to binary
function reverseString(str) {
  // empty string
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

//Decimal To Binary
//Step 1- Keep dividing n till 0 and store remindars in string
//Step 2 - reverse string 
//T.C - O(Lg N)(we keep dividing number by 2 till 0 hence)
//S.C - O(Lg N)
function decimalToBinary(n){
  let result="";
  while(n!==0){
    result+=n%2===1?1:0;    
    n=Math.floor(n/2);
  }
  return reverseString(result);
}

//Binary To Decimal
//Step 1 - Start from Last Str char and multiply with power of 2 starting with 1
//Step 2- add and in result and keep incrementing pow 1,2,4,8...
//1101->(1*2^4)+ (1*2^3)+ (0*2^2) + (1*2*1)=8+4+0+1=13 
function BinaryToDecimal(str){
  let len=str.length;
  let result=0;
  let pow=1;
  for (let i=len-1; i>=0; i--) {
    let char=str.charAt(i);
    result+=char*pow;
    pow=pow*2;
  }
  return result;
}

//1's Compliment - 
//Step 1- Convert Decimal to Binary
//Step 2 - Change 1 to 0 and 0 to 1 
function onesCompliment(n){
  let decToBin=decimalToBinary(n);
  let result="";
  for (let i=0; i<decToBin.length; i++){
    let char=decToBin.charAt(i);
    result+=char==="1"?"0":"1"
  }
  return result;
}

//2's Compliment
//Step 1- Calcualte 1's Compliment;
//Step 2 - Add 1
//2 scenerios considering last digit can be 0 or 1
//a) 0+1=1 ,b)1+1=0 carry 1
function twosCompliment(n){
  let onesComp=onesCompliment(n);
  let len=onesComp.length;
  let carry=1;
  // Convert the string to an array for manipulation
   let oneCompArray = oneComp.split('');
  for (let i=len-1; i>=0; i--) {
    let char= oneCompArray[i];
    //0+1=1;
    if(char==="0" && carry===1){
      oneCompArray[i]="1";
      break;
    }else {
      //so char is 1 ,i.e 1+1=0;
      oneCompArray[i]="0"; 
    }
  }
  //converting back to str;
  let twosComp = oneCompArray.join('');

  return twosComp;

  

}

const decToB=decimalToBinary(11);
const BinToD=BinaryToDecimal("1100011");
const oneComp=onesCompliment(99);
const twosComp=twosCompliment(99);
console.log(decToB);
console.log(BinToD)
console.log(oneComp);
console.log(twosComp);


//AND Operator 1+1===1 else all 0
//13 & 7  -> 1 1 0 1 
//         & 0 1 1 1
//         = 0 1 0 1    because (1+1===1 else all 0)  

//OR Operator 0+0===0 else all 1
//13 | 7  -> 1 1 0 1 
//         | 0 1 1 1
//         = 1 1 1 1    because (0+0===0 else all 1)  

//XOR Operator 0+0===0 and 1+1===0 else all 1
//13 ^ 7  -> 1 1 0 1 
//         ^ 0 1 1 1
//         = 1 0 1 0    because (0+0===0 and 1+1===0 else all 1) 
//IMP - XOR of X^X is O for eg 5^5=0 ,4^4=0 and   X^0=X


//Right Shift Operator 13>>1 ->
// 13>>1  ->  1 1 0 1  
//        >>  1
//shiftby1 =  0 1 1 0 / /the right most bit i.e 1 is  is removed 
// 13>>2== 0 0 1 1    // 2 right most bits 0 and  1 removed
// formula - n>>k  ---> n/(2^k)
//for = eg  13>>1=(13/(2^1)) =13/2= 6  , 13>>3=13/2^3 =13/8= 1 


//Left Shift 13<<1
// 13<<1  ->  1 1 0 1  
//        <<  1
//shiftby1 =  1 0 1 0 / /the left most bit i.e 1 is removed 
// formula = n<<k --> n*2^k i.e 13<<2 =26


//do you see why in right shift we divide by 2 and in multiple in left
//right  shift formula explained (n/(2^k))
//13-->  1 1 0 1 -> (1*2^3)+(1*2^2)+(0*2^1)+(1*2^0)=13
//13>>1    1 1 0  ->((1*2^2)+(1*2^1)+(0*2^0))=6 
// if we notice we just removed a 2 from each((1*2^2) become (1*2^1),
//(0*2^1) become (0*2^0))  so on and so forth) hence we divide in  right shift by 2 
//----------------------------------------------------------------
//in left shift
//13-->  1 1 0 1 -> (1*2^3)+(1*2^2)+(0*2^1)+(1*2^0)=13
//13<<1  1 0 1 0  ->((1*2^3)+(0*2^2)+(1*2^1)+(0*2^0))=6 
//if we compare , we added a 2 i each (0*2^1) become (0*2^2) , (1*2^2) become  (1*2^3) hence we multipl




//Representation of Postive and Negative Numbers
// the left most bit represents the number positive or negative bit
// for eg-  1 for negative and 0 for positive

//Calculate Binary Of A  Negative Number for -13 
//By 2s' Compliment 

//Largest Integer Value (If 1 integer requires 4bytes memory)
//so the left most bit is sign bit right , so it will be 0 right as we want to be largest hence 0 as positive
//and rest we can assume the largest number would be 011111..... (32 times)
//so remaining 31 bits i.e -> (1*2^30)+(1*2^30)+ ....(1*2^1)+(1*2^0)
// i.e (2^31-1 ) (check with different value)
// therefore largest interger for 4 bytes memory will be (2^31-1 )
//Hence MAX_VALUE=(2^31-1 ) and MIN_VALUE= (-2^31)
//we can't left shift (2^31-1 )<<1  , it will cause overflow



//NOT Operator (~13)
//Steps 1 ->flip it 
// ~13 -> 1 1 0 1 -> 0 0 1 0 
//if is it negative no , Step 2 - 2's Compliment
//if not , then done  
// ~13 -> (-6)
// ~6-> 5 
