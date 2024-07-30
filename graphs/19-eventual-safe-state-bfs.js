//https://leetcode.com/problems/find-eventual-safe-states/description/
/*
Given a graph , return safe nodes
a terminal node is a node who don't have an outgoing edges
a safe node is node ,whose every path lead to terminal node 

Intutuion and approach(using the topological sort)
so terminal node is a node ,which doesn't have any outgoing node ,
for eg 10->5->7 (7 is a terminal node) and 10 and 5 doesn't have any path which don't lead to terminal node
if 10->5->7
   |
   v
   12
here also 10 has 2 paths which both lead to terminal nodes only so it is safe node  here also
but if it was a cycle then who it won't be possible for 10

so first we have to reverse the edges , so this way terminal nodes won't have any InDegree
then we caluclate in degrees and then start to remove connection and we get our safe node
why does the works
we start from terminal node and add whoever has 0 connections , what does 0 signify that it doesn't have any more connections apart from our terminal node as we start from terminal node itself , if it has 1,2 left it means 1 of the paths it takes leads to non-terminal node 
*/

function eventualSafeBFS(adjacentyList){
  //Step 1 - Reversing the edges
  const reverseAdjacentyList = new Array(adjacentyList.length).fill().map(() => []);
  //making the adjaceny list
  for (let i = 0; i < adjacentyList.length; i++) {
   for (let j = 0; j < adjacentyList[i].length; j++) {
    const element = adjacentyList[i][j];
    reverseAdjacentyList[element].push(i);
   }
  }
  console.log(reverseAdjacentyList);

  //Step 2 - calculate InDegree
  const InDegreeArr = new Array(reverseAdjacentyList.length).fill(0);
  for (let i = 0; i < reverseAdjacentyList.length; i++) {
    for (let j = 0; j < reverseAdjacentyList[i].length; j++) {
      const ele=reverseAdjacentyList[i][j];
      InDegreeArr[ele]+=1; 
    }
  }
  console.log(InDegreeArr);
  //Step 3 - Add Zero Indegrees in Stack
  let stack=[];
  let topologicalSort=[]
  for (let i = 0; i < InDegreeArr.length; i++) {
    if(InDegreeArr[i]===0){
      stack.push(i)
    }
  }
  while(stack.length>0){
    const ele=stack.shift();
    let size=reverseAdjacentyList[ele].length;
    for (let i = 0; i <size; i++) {
      const element = reverseAdjacentyList[ele][i];
      InDegreeArr[element]-=1; 
      if(InDegreeArr[element]===0){
        stack.push(element)
      }
    }
    topologicalSort.push(ele);
  }
  return topologicalSort.sort((a,b)=>{return a-b});

}

const adjacentyList=[[1,2],[2,3],[5],[0],[5],[],[]];
const ans=eventualSafeBFS(adjacentyList);
console.log(ans);