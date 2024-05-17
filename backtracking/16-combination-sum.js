//  https://leetcode.com/problems/combination-sum/ (Check 15 one before)



function combinationSum(arr,target,sum,start,ans,res){
  if(sum===target){
    res.push(ans);
    return;
  }else if(sum>target){
    return;
  }

  for (let i = start; i <arr.length;i++) {
    sum+=arr[i];
    ans=[...ans,arr[i]]
    //not incrementing i in recursive call as "same no's sum" is also valid
    //breaking out of the loop of sum is already bigger as arr is already sorted ,no next no will make sum smaller
    if(sum<=target){
      combinationSum(arr,target,sum,i,ans,res);
      ans=ans.slice(0,-1);
      sum-=arr[i];
    }else{
      break;
    }
  }
  return res;
}
const arr = [2,3,5];
const target = 8
const res=combinationSum(arr.sort(),target,0,0,[],[])
console.log(res);