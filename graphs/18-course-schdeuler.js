//https://leetcode.com/problems/course-schedule/description
/*
given a prequist arr consisting subarr[i,j] it suggest to take course i th course j should be taken , 
so if there is a cycle , we won't able to take the course
 */

function courseSchedule(courses,prequist){
  const adjacentyList = new Array(courses).fill().map(() => []);
  //making the adjaceny list
  for (let i = 0; i < prequist.length; i++) {
    const ith = prequist[i][0];
    const jth=prequist[i][1]
    adjacentyList[jth].push(ith);
  }
  
    //Step 1- make indegree arr;
    const InDegreeArr = new Array(adjacentyList.length).fill(0);
    for (let i = 0; i < adjacentyList.length; i++) {
      for (let j = 0; j < adjacentyList[i].length; j++) {
        const ele=adjacentyList[i][j];
        InDegreeArr[ele]+=1; 
      }
    }
    //Step 2 - Add Zero Indegrees in Stack
    let stack=[];
    for (let i = 0; i < InDegreeArr.length; i++) {
      if(InDegreeArr[i]===0){
        stack.push(i)
      }
    }
    let topologicalSort=[]
    while(stack.length>0){
      const ele=stack.shift();
      let size=adjacentyList[ele].length;
      for (let i = 0; i <size; i++) {
        const element = adjacentyList[ele][i];
        InDegreeArr[element]-=1; 
        if(InDegreeArr[element]===0){
          stack.push(element)
        }
      }
      topologicalSort.push(ele);
    }
   

    return topologicalSort.length===adjacentyList.length;

}



const prequist=[[1,0],[2,0],[3,1],[3,2]];
const ans=courseSchedule(5,prequist);
console.log(ans);