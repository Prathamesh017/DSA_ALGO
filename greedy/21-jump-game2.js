//https://leetcode.com/problems/jump-game-ii/description(revisit)

//There is Also A DP solution (Try Later)


//Range Game
//Approach with every jump , there is a range which a user go jump up to
//for eg =[3,1,3,2] -> from i=0 , we can jump 1st , 2nd ,3rd index , this is my range in which I can easily jump to
//so to get the minium jump we have to get the best option through which I can jump furthest which would 2nd 3 , 

//Using Same Approach , we have l and r based range in which I can jump upto and among the ranges we will pick up the best jump(max value) , so that we can jump furthr
function jumpGame2(arr){
  let jumps=0;
  let left=0;
  let right=0;

  while(right<arr.length-1){
    let far=0;
    for (let i = left; i <=right; i++) {
      far=Math.max(i+arr[i],far);
    }
    left=right+1;
    right=far;
    jumps++;
  }

  return jumps;
}
const res=jumpGame2([3,4,3,2,5,4,3]);
console.log(res);

