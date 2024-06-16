//https://leetcode.com/problems/minimum-rounds-to-complete-all-tasks/description/(just read question easy))

//given are arr of tasks difficult like [2,3,3,2,4] etc we can do 2 or 3 at a time , (P.S can't do only 1 task but have to return -1 then) find minium round required




function minimumRoundTask(tasks){
  //will store all occurences first;
 let map=new Map();

 for (let i = 0; i < tasks.length; i++) {
   if(map.has(tasks[i])){
    let occ=map.get(tasks[i])
    map.set(tasks[i],occ+1);
   }else{
    map.set(tasks[i],1);
   }
 }
 let ans=0;
 for (let [key, value] of map) {
  if(value===1){
    return -1;
  }
  //check if divisble
  if(value%3==0){
   ans+=value/3;
  }else{
    while(value>1){
      if(Math.round(value/3)>=2){
        ans+=1;
        value=value-3;
      }else{
        ans+=1;
        value=value-2
      }
    }
  }
}
return ans;
}


const tasks=[66,66,63,61,63,63,64,66,66,65,66,65,61,67,68,66,62,67,61,64,66,60,69,66,65,68,63,60,67,62,68,60,66,64,60,60,60,62,66,64,63,65,60,69,63,68,68,69,68,61];
const res=minimumRoundTask(tasks);
console.log(res);