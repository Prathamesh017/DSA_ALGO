
/* Prime Factorization
Print Prime Factors of A Number
for eg- 60->2,3,4,5,6,10,12,15,30,60 these are factors
ie . Prime Factors are 2,3,5 */


function checkPrime(num){
  let sqrt=Math.floor(Math.sqrt(num));
  let factorsCount=0;
  for (let i = 2; i <=sqrt; i++) {
    if(num%i===0){
      factorsCount++;
    }
    if(factorsCount>=1){
      break;
    }
    
  }
  return factorsCount>=1?false:true;
}

//Time Complexity(sqrt(N) outer loop * sqrt(first fact) prime check * sqrt(second fact) prime check )
//but it will be approx as prime check doesn't happen on every num
function primeFactors(num){
  const fact=[];
  let sqrt=Math.floor(Math.sqrt(num));
  for (let i = 2; i <=sqrt; i++) {
    if(num%i==0){
      if(checkPrime(i)){
        fact.push(i);
      }
      //with i get the second factor as well ,
      const secFac=num/i;
      if(secFac!==i){   //no need for same no to add twice
        if(checkPrime(secFac)){
          fact.push(i);
        } 
      }
    }
  }
  return fact;
}


/*To optimize furthur, we will use lcm method
2 |780        go all the prime factors
2 |390
3 | 195
3 | 65
5 | 13
13| 13
*/


//T.C as Num gets smaller after each iteration , so it won't be O(n)
//but for large prime number 37 it will be O(n) only 
//hence instead till n, we can use sqrt(n)
function findPrimeFactorsByLCM(num){
  const fact=[];
  let temp=num;
  let sqrt=Math.floor(Math.sqrt(num));
  for (let i = 2; i <=sqrt; i++) {
    if(temp%i===0){
      //no need for prime check,
      fact.push(i);
      //keep dividing it till the number is not undivisble by i
      while(temp%i===0){
        temp=temp/i;
        /*for eg if 2, we will keep divinding the number by 2 till it is not divisble by 2 ,once that happens it won't be divsible by 4,6,8 as they are multiplys and number divisble by 2 if 2 doesn't work now  no way these number would work 
        hence no prime check above*/  
      }
    }
    
    
  }
  //need to add the num itself , as it won;t be included
  if(checkPrime(num)){
    fact.push(num);
  }
  return fact;

}

const res=findPrimeFactorsByLCM(37);
console.log(res);