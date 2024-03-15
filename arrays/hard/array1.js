// Pascal Trianlge
//Q1)To find out a element at particular row and coln

/*This is can be calculated easilty by NCR =  N!/ R!×(N−R)!
Remember r will be r-1 and n wil be n-1 so for 5,3->4,2
we can easily eliminate certain things to reduce complexity
for eg 10c3 -> 10*9*8*7!/(3*2*1)*(10-3)!
so 10-3 is 7 factorial , I can directly  divide numertator's 7! fact
to solve I can iterate upto r like 10*9*8, if we had 2 as r , we would have only 10*9 after reduction can check  */

function nCrCombo(r,c){
 let num=1;
 let den=1;
 for (let i = 0; i < c-1; i++) {
  num=num*(r-1-i);
  den=den*(c-1-i);
 }
 return Math.floor((num/den));
}
// console.log(nCrCombo(6,3));

//Q2 give me the whole row, of the pascal's trigangle
// 1 way to do it will using the above function and passing values one by one for eg for row 4 we can pass 4,1 ,4,2 4,3 4,4 as row===no of values present in row , so we will get the whole row
//Brute Force
// function getPascalTriangleRow(rowNo){
//   let row=[];
//   for (let i = 1; i <=rowNo; i++) {
//     row.push(nCrCombo(rowNo,i));
//   }
//   return row;
// }

//Better Way
//for any row -> first element will be always be 1 correct
//on second  numerator will row-1 and denominator will be 1
//will divide num/den we will get our second row value , add
//we keep multiplying previous  numerator and denoiminator with 
//decreasing and increasing i value respectively
function getPascalTriangleRow(rowNo){
  let num=1;
  let den=1;
  let sum=1;
  let row=[];
  row.push(sum);
  for (let i = 0; i <rowNo-1; i++) {
       num=num*(rowNo-1-i);
       den=den*(i+1);
       let ans=Math.floor((num/den));
       row.push(ans);
  }
  return row;
}
//for all row upto n
function  generatePascalTriangle(numRows) {
  let ans=[];
  for (let i = 1; i <=numRows; i++) {
     let row=getPascalTriangleRow(i);
     ans.push(row);
}
return ans;
};

console.log(generatePascalTriangle(25));