//https://leetcode.com/problems/combinations/

//for n , get all possible combinations 
// Input: n = 4, k = 2
// Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]


//BEST Example to understand backtracking ,(make a tree) 
// 1)with one element at a time 
// 2) Exploring till last
// 3) Remocving Last One


//T.C - NCR = 4C2=4!/(4-2)! *2!= 6
function combinations(n,k,ctr,ans,res){
  if(ans.length===k){
    res.push(ans);
    return;
  }
  for (let i =ctr; i <=4; i++) {
    let val=i;
    ans=[...ans,val];
    combinations(n,k,i+1,ans,res)
    ans=ans.slice(0,-1);
  }
  return res;
}
const res=combinations(4,2,1,[],[]);
console.log(res);





