//https://leetcode.com/problems/subsets/
//subset- [1,2]=[],[1],[2],[1,2]
//subsets size=2^length of arr  (can check)
//eg 2 sized arr will have 4 subsets ,3 will be 8 ans so and so forth


//Logic
//for subset of 3  eg-[17,18,19] , there are 8 subsets so there 8 possible combinations
//we can basically use bits to calculate subsets
//for 8 ,we can represent subsets in this ways
/* 0 - 0 0 0  
   1 - 0 0 1
   2 - 0 1 0
   3 - 0 1 1
   4 - 1 0 0
   5 - 1 0 1
   6 - 1 1 0
   7-  1 1 1 
*/
//if we just use 1 set bit as index , we can have different combinations of subset right?
/* 0 - 0 0 0  []  //no 1s
   1 - 0 0 1  [17]
   2 - 0 1 0  [18]
   3 - 0 1 1   [17,18]
   4 - 1 0 0   [19]
   5 - 1 0 1   [17,19]
   6 - 1 1 0   [18,19]
   7-  1 1 1   [17,18,19]
*/

function subset(arr){
  let size=Math.pow(2,arr.length); //size of result arr
  let resultArr=[];
  for (let num = 0;  num < size; num++) {
    let subSetArr=[];
    for (let j = 0; j < arr.length; j++) {
     /*everything by this if condition we can see the no of set bits,
     with the help of this set bits , we can write different combinations*/
     let bitMask=1<<j;
     let res=num&bitMask;
     //checking if the j th bit is set or not
     if(res){
       subSetArr.push(arr[j]);
      }
    console.log(`Bitmask is ${bitMask},res is ${res},arr is ${subSetArr}]`);
    }
    resultArr.push(subSetArr);
    console.log("/////")
    
  }
  return resultArr;
}

const res=subset([17,18,19]);
console.log(res);


//another way is also there with recursion