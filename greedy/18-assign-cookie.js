//https://leetcode.com/problems/assign-cookies

//given a greed arr and cookie arr , we can assign a child only one cookie which would be greater or equal to his greed 
/*eg Input: g = [1,2,3], s = [1,1]
Output: 1
Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
You need to output 1.*/

//find maximum no of children you can satisfy

function assignCookies(greed,cookies){

  greed=greed.sort((a,b)=>a-b);
  cookies=cookies.sort((a,b)=>a-b);

  let i=0;
  let j=0;
  let count=0;
  while(i<greed.length && j<cookies.length){
     if(greed[i]<=cookies[j]){
        count++;
        i++;
        j++;
     }else if(greed[i]>cookies[j]){
       j++;
     }
     else{
      j++;
     }
     }
    
return count;
}
const greed=[10,9,8,7];
const cookies=[5,6,7,8];
const res=assignCookies(greed,cookies);
console.log(res);