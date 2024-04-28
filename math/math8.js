/*The sieve of Eratosthenes is one of the most efficient ways to find all primes smaller than n when n is smaller than 10 million or so.*/

//Find Prime Number till N
/*Basic Approach
// check for every number from 1 to N , with the prime function we made
//hence t.c - (O(n)) outer loop * O(sqrt(n)) //prime check function*/

/*Sieve Of Eratosthenese 
Steps 1 - create a array of 2-> N adding 1 at every index
eg N=6  [1][1][1][1][1][1] //each index shows 1,2,3,4,5,6 
ie .added 1 also because we won't included 1 in prime check as it is neither prime nor composite , but because of we can directly check indexe-based arr []//
Step  2 - Check if  value is 1 at index i ,if it 1 we can mark it as prime and then make all its multiple indexes 0 , making them no-prime 
for eg -  if i =2 ,so at index 2 it is 1 , so we can make 2 as prime and add him, make it all it's multiple  i.e 4,6,8,10,12.. 0 as it already has a factor 2 , make it non-prime

//A Bit optimizaton , we don't need to start from 2 everytime to mark 
eg- 2*2,2*3,2*4 , 3*2,3*3, 5*2,5*3 ,
//like 3*2 will alredy marked by 2*3 and 5*3 will be already marked by 3*5 right  , so we can directly start from its square 
like for 2->2*2, 3->3*3 , 5->5*5 
*/


function sieveOfPrimeCheck(n){
 let arr = Array.from({ length: n }, (_, index) => 1);
 const primes=[];
 for (let i = 2; i <n; i++) {
   if(arr[i]===1){
      primes.push(i);
   }
   for (let j = i*i; j<n; j+=i) {
    arr[j]=0;
   }
 }

 return primes.length;

}

const res=sieveOfPrimeCheck(19)
console.log(res);