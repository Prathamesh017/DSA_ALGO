//https://leetcode.com/problems/candy/description/

/*given n children , there is  a rating rating , we must distrubite LRchoclates according to these 2 rules
//Rule 1  Each Children would have atleast one candy
//Rule 2 Children with a higher rating get more candies than their neighbors.

Input: ratings = [1,0,2] Output: 5
Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.

Input: ratings = [1,2,2] Output: 4
Explanation: You can allocate to the first, second and third child with 1, 2, 1 candies respectively.
The third child can get be satisfied with  1  candy because it satisfies the above two conditions.
*/

/*Approach
 First we will go from left to right giving canditates eg =[1,3,2,2,1]
 so 1,2,1,1,0 ,
 Similary can go from right to left  => [1,2,1,2,1] 
 
 so from both we take maximum val , as it would be correct from both sides so after taking sum we will get our correct distribution
*/

function candyDistribution(rating){
  let size=rating.length;

  //Assigning first two
  let chocolatesLtoR=rating[0]<rating[1]?[1,2]:rating[0]===rating[1]?[1,1]:[2,1];

  //Going from left to right 
  for (let i = 1; i < rating.length-1; i++) {
    let lastAllocatedChoclate=chocolatesLtoR[chocolatesLtoR.length-1];
        if(rating[i]<rating[i+1]){
          chocolatesLtoR.push(lastAllocatedChoclate+1);
        }else if(rating[i]===rating[i+1]){
          chocolatesLtoR.push(1);
        }else{
          chocolatesLtoR.push(lastAllocatedChoclate-1);
        }
  }

  //Assigning first twos
  let choclatesRtoL=rating[size-1]<rating[size-2]?[1,2]:rating[size-1]===rating[size-2]?[1,1]:[2,1];
  //Going from right to left
  for (let i = size-2; i >0; i--) {
    let lastAllocatedChoclate=choclatesRtoL[choclatesRtoL.length-1];
        if(rating[i]<rating[i-1]){
          choclatesRtoL.push(lastAllocatedChoclate+1);
        }else if(rating[i]===rating[i-1]){
          choclatesRtoL.push(1);
        }else{
          choclatesRtoL.push(1);
        }
  }
  choclatesRtoL=choclatesRtoL.reverse();

  console.log
  let minimumChoclates=0;
  //Taking the bigger as that would satisy both ends
  for (let i = 0; i < choclatesRtoL.length; i++) {
    if(chocolatesLtoR[i]<choclatesRtoL[i]){
      minimumChoclates+=choclatesRtoL[i]
    }else{
      minimumChoclates+=chocolatesLtoR[i]
    }    
  }
  return minimumChoclates;
}




const rating=[1,3,2,2,1];
const res=candyDistribution(rating);
console.log(res);