//https://leetcode.com/problems/maximum-number-of-achievable-transfer-requests/description/

//? Why Backtracking - With Every Request , We have the choice to make the request or not , hence can be a backtracking solution
//NEED PRATICE

function maxRequest(n,arr,emp,max,index,ctr){
  if(ctr>0){
    let bool=emp.every((e)=>{if(e===0){return true}})
    if(bool){
      max=Math.max(max,ctr);
    }
  }
  if(index>arr.length-1){
    return max;
  }
  



 
  for (let i = index; i < arr.length; i++) {
    const left=arr[i][0];
    const right=arr[i][1];
     emp[left]-=1;
     emp[right]+=1;
     ctr++;
     max=maxRequest(n,arr,emp,max,i+1,ctr);
     emp[left]+=1;
     emp[right]-=1;
     ctr--;

  }
  return max;
}
const req=[[2,0],[0,0],[1,2],[0,0]];
const emp= Array.from({ length: 3 }, () => 0);
const res=maxRequest(3,req,emp,0,0,0)
console.log(res);

