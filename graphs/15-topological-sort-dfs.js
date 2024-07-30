//https://www.geeksforgeeks.org/problems/topological-sort/1
/*
Topological Sorting states that if there is a edge between U and V , then U should be before V in the Sorting(explained in graph.txt)
5->0<-4      5->0,4->0 ,5->2,2->3,3->1,4->1 (U->V)
|     |      Topological sorting -  5,4,2,3,1,0,
v     v  
2->3->1     

Approach  & Intution
we will visit each node with adjacenty list and we will place the element in stack once its dfs is completed we put it in the stack
for eg from 4 we can visit 0 and 1,first we go 0 finish put in stack, then 1 finish dfs and put it in the stack   and then 4 is also complete so put in stack so according to topological sorting 4 will be before 0 and 1 hence our approach works

also if there is no neighbour of node , we can easily it will at last cause it comes before no one 
*/

function topologicalDFS(start,adjacentyList,visitedArr,ans){
  let size=adjacentyList[start];
  visitedArr[start]=0;
  for (let i = 0; i <size; i++) {
    const ele=adjacentyList[start][i];
    if(visitedArr[ele]===-1){
      topologicalDFS(ele,adjacentyList,visitedArr,ans);
    }
  }
  ans.unshift(start);
  return ans;
}
function topologicalSorting(adjacentyList){
  const visitedArr = new Array(adjacentyList.length).fill(-1);
  const ans=[];
  for (let i = 0; i < adjacentyList.length; i++) {
    if(visitedArr[i]===-1){
      topologicalDFS(i,adjacentyList,visitedArr,ans);
    }
  }
 return ans;
}

const adjacentyList=[
   [], [ 2 ], [], [ 5 ], [], [], [ 3, 5 ], [ 3, 1 ] 
]

const ans=topologicalSorting(adjacentyList);
console.log(ans);