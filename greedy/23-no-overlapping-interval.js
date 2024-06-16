//https://leetcode.com/problems/non-overlapping-intervals/description
//remove minimum arrs ,so that we can have non overlapping intervals

function noOverLappingInterval(arr){
   //Based on ending check
  arr.sort((a,b)=>{   //arr=[1,2] , inside sort , there are reverse a=2,b=1 
    if(a[1]<[b[1]]){
      return -1 //denotes change as [a,b] are [b,a] here
    }else if(a[1]>b[1]){
      return 1  //no  change
    }
  }
)
  let i=0;
  let j=1;
  let toRemoveIntervals=0;
  while(j<arr.length){
   let arr1=arr[i];
   let arr2=arr[j];
    if(arr[i][1]<=arr[j][0]){
       i=j;
       j++;
    }else{
      j++
      toRemoveIntervals++;
    }
  }
  return toRemoveIntervals;

}
console.log(-26<=-27)
const intervals=[[-3035,30075],[1937,6906],[11834,20971],[44578,45600],[28565,37578],[19621,34415],[32985,36313],[-8144,1080],[-15279,21851],[-27140,-14703],[-12098,16264],[-36057,-16287],[47939,48626],[-15129,-5773],[10508,46685],[-35323,-26257]];
const res=noOverLappingInterval(intervals);
console.log(res);