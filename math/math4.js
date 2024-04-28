//give all factors of a no
//36 -> 1,2,3,4,6,9,18,36

//Simple T.C (O N) 
function findFactors(num){
  let factors=[];
  for (let i = 0; i <=num; i++) {
    if(num%i===0){
      factors.push(i);
    }
  }
  return factors;
}

//Better Approach - to get both a1 and b1 where  a1*b1=num as both are factors of the number
//so factors of 36 are 
// 1 * 36      //9*4
// 2 * 18     //12* 3
// 3 * 12     // 18 * 2 
// 4 * 9      // 36 * 1 
// 6 * 6 
// As we can see after 6 which is sqrt of 36 , the numbers are repeating , so we can iterate till Sqrt(n) and improve our time Complexity

function findFactors2(num){
  let sqrt=Math.floor(Math.sqrt(num));
  let factors=[];
  for (let i = 0; i <=sqrt; i++) {
    if(num%i===0){
      //adding a
      factors.push(i);
      const secMul=num/i;
     //time to get the second Multiple value as well , but adding check to avoid duplicate factor i.e 6 which is already added above 
      if(secMul!==i){
        factors.push(secMul)
      }
    }
    
  }
  return factors;
}



// const res=findFactors(36);
const res=findFactors2(6);
console.log(res);

//P.S we can use the same function to determine a number is prime number or not , with the help of no of factors found with this fuctions 

