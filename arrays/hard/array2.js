//https://leetcode.com/problems/majority-element-ii/description/

//Better Approach

function majorityElement(arr){
  let max=Math.floor(arr.length/3);
  console.log(max);
  let ans=[];
  let map=new Map();

  for (let i = 0; i < arr.length; i++) {
    if(map.has(arr[i])){
      let val=map.get(arr[i]);
      val=val+1;
      //eg if max=2  I need occurence greater than 2 but only one time check because I can't add it everytime even it occur more times
      if(val===max+1){
        ans.push(arr[i]);
      }
      map.set(arr[i],val);

    }else{
      map.set(arr[i],1);
      //adding for checking max=0
      if(max===0){
        ans.push(arr[i]);
      }
    }
  }
  return ans;
}
console.log(majorityElement([3,2,3]))


//Optimal Approach is Similar with  Another Majority Problem
//Medium-2
