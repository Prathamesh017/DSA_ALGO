//https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620

//Given 2 arrs arrival and depature with time of train, arrange in such way so we can run all the trains  with the help of minimum platforms

/*Approach - Assuming we can watching the platform we can keep track simply at first there is no train 
We sort them accordingly example 
i)at 9.00 there is an arrival platform 1 will be occupeid ,
ii)9.10 there is a depature ,so empty
ii) 9.40 again a arrival 1 again occupied
iii)9.50 again a arrvival 2 occupied , 
this way we can now the max occupied time of platform like how many platforms were occupied
*/

function minimumPlatforms(arr,dep){
  let d=0;
  let a=1;
  let sortedTrains=[{"op":"Arr",time:arr[0]}];
  while(a<arr.length && d<dep.length){
     if(dep[d]<arr[a]){
      sortedTrains.push({"op":"Dep",time:dep[d]})
      d++;
     }else{
      sortedTrains.push({"op":"Arr",time:arr[a]});
      a++;
     }
  }
  while(a<arr.length){
    sortedTrains.push({"op":"Arr",time:arr[a]});
    a++;
  }
   while(d<dep.length){
    console.log(d,dep.length)
    sortedTrains.push({"op":"Dep",time:dep[d]})
    d++; 
   }
   let plaformsOccMax=0;
   let max=0;
   for (let i = 0; i < sortedTrains.length; i++) {
      if(sortedTrains[i].op==="Arr"){
        plaformsOccMax++
      }else{
        plaformsOccMax--;
      }
    max=Math.max(max,plaformsOccMax)
   }
   return max;
}


const arr=[900,940, 950, 1100, 1500, 1800];
const dep=[910,1200, 1120, 1130, 1900, 2000];
const res=minimumPlatforms(arr,dep);
console.log(res);