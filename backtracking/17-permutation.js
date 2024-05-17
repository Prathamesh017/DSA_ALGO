//https://leetcode.com/problems/permutations/description/

//Time Complexity Explained -
//n=3 , each position has 3 possibilies 1,2,3 hence we can say  with each possiblit add we shrink the possibit like first position n , second n-1 ans so on  hence  n*(n-1)*(n-2) => T.C (O n!)
function permutations(arr,ans,res,start){
  if(start>arr.length){
    return;
  }
  if(ans.length===arr.length){
    res.push(ans);
    return;
  }
   
  for (let i = 0; i < arr.length; i++) {
    //the trick is not increment the for loop as we can't skip the previous element and check if the element is already present in ans , no need  to explore it furthur
    if(!ans.includes(arr[i])){
      ans=[...ans,arr[i]];
      permutations(arr,ans,res,start+1);
      ans=ans.slice(0,-1);
    }
  }
  return res;
}


const arr=[1,1,2]
const res=permutations(arr,[],[],0);
console.log(res);

