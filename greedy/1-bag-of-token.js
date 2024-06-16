//https://leetcode.com/problems/bag-of-tokens/description/ (GOOD QUESION)

//explained in greedy.txt

/* Approach
1)Sort Arr , so I can get maximum token inexhange of totalScore and check if I have enough power atStart itself to get my first token atleaset
2)Explained With IF else condition
*/

function bagOfTokens(arr,power){
  let totalScore=0;
  let max=totalScore;
  let start=0;
  let end=arr.length-1;
  arr=arr.sort((a,b)=>{return a-b}); //sorting
  while(start<=end){
      //checking if I have enough power to take a token;
      if(power>=arr[start]){ 
        power=power-arr[start];
        totalScore++;
        start++;
        max=Math.max(totalScore,max);
      }//taking power and reducing high score
      else if(totalScore>=1){
        power=power+arr[end];
        end--;
        totalScore--;
        max=Math.max(totalScore,max);

      }else{
        return max;
      }

    }
    return max;
}


const tokens=[200,100];
const power=150;
const res=bagOfTokens(tokens,power)
console.log(res);

