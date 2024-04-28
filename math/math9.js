//Prime Factorization with  Sieve of Eratosthenes 

//We will optimize the SOE a bit to help with prime factoriazation

//Normal Approach to Find prime factors  of number (Already DOne with in math.6)

/*With SPF(Smallest Prime Factor Method)
IN SIE , we used to mark everything with 1 and then mark it
Step 1- here we will intialize with index itself
for eg -6 [0][1][2][3][4][5][6] 
Step 2 - iterate from 1 to Sqrt(N) same like math6.js explained there
and we will check  if the index===value, it is safe to say that value is the prime factor
Step 3 - we will start to mark all it multiples with the indexValue if they haven't been marked yer
eg 6 - i=2  [0][1][2][3][2][5][2]
this list will basically have the smallest factor of each number
Step 4 -
no we will have list like this [0][1][2][3][2][5][2] see 6th index won't mark it with 3 as it is already been marked with 2 , if 9 was present it would be replaced with 3
Step 5 - we we divide the number with lowest prime  factor found, by this way we would get all the prime factors  
eg 30->2 ,add 2,15->3 add 3, 5->add 5
   48->2  add 2 .24->2 add 2 , 12->2 add 2 , 6->2 add 2 , 3->add 3   
*/


function primeFactorsWithSOE(n){
 let arr = Array.from({ length: n+1 }, (_, index) => index); //Step 1
 let sqrt=Math.floor(Math.sqrt(n)); 
 let factors=[];   
 for (let i = 2; i<=sqrt; i++) {
   if(arr[i]===i){     //Step 2
    //i  prime number comfired;
    for (let j = i*i; j <=n; j+=i) {     
      //start marking it's multiples
      //check if already it hasn't been marked 
      if(arr[j]===j){ //not marked  Step 3
         arr[j]=i;
      }
    }
  }
 }

 while(n!==1){
  let spf=arr[n];  //Step 5
  factors.push(spf);
  //spf is lowest prime  factor of that number
  n=Math.floor(n/spf);
 }


 return factors;

}


const fact=primeFactorsWithSOE(48);
console.log(fact);