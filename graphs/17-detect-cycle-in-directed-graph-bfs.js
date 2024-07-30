//https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1
/*
As we know topological sort only works on Direct ACyclic Graph.
Why?
Cycle Definition: A cycle in a directed graph is a path that starts and ends at the same vertex. 
Topological Order Definition: In a topological order, each node must appear before its successors. 
If there's a cycle, it means there exists a node that is both a predecessor and a successor to another node. This directly violates the topological order requirement. 

hence we get find topological sorting of a graph ,we can say that the graph is not cyclic
*/


function  topologicalSorting(adjacentyList){
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
 
  return topologicalSort.length!==adjacentyList.length;
  }
  const adjacentyList=[
     [ '1' ], [ '2' ], [ '3' ], [ '3' ] 
   
  ]
  
  const ans=topologicalSorting(adjacentyList);
  console.log(ans);