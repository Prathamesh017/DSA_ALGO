//https://www.geeksforgeeks.org/problems/topological-sort/1
/*
Topological Sorting states that if there is a edge between U and V , then U should be before V in the Sorting(explained in graph.txt)
5->0<-4      5->0,4->0 ,5->2,2->3,3->1,4->1 (U->V)
|     |      Topological sorting -  5,4,2,3,1,0,
v     v  
2->3->1 

We already did it in dfs way , now we will do it in BFS Way using InDegree Concept (Also Known as Kahn's Algorithm)

Approach and Intution
we will have each node's inDegree , like how many other nodes are comming into one node
for above example
0-[2] 1-[2] 2-[1] 3-[1], 4-[0],5-[0]
1)After Observation 4,5 don't have any indegree so automatically they will be on starting of the sort
2)so we will place 4,5 in stack, then take out 4 and reduce its neighbouring like we are deleting the connection , so 4's neighbour are 0 ,1 so both's indegrees will be reduced by 1 ,
3)once a node indegree is 0 , we can say all its previous members which should be before it should be already in the correct position, cause that why it has zero now(think)
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
return topologicalSort;
}
const adjacentyList=[
  [ [ 2 ], [ 0, 3 ], [], [ 0 ] ]
 
]

const ans=topologicalSorting(adjacentyList);
console.log(ans);