//
/*
The existing algorithm written in detect-cycle-dfs is for undirected graph which doesn't work in directed graph

1->2->3-->4
   /  |   |
  8   v   v
 / \  6-->5->7
9-->10       

here 3-4-5-6 may  have been cycle with undirected graph but not here , while 8->9 ,9->10 and 10->8 is a cycle
The important part is it should to be a  cycle in directed ,"node has to be visited again from the same path"
example with 3 we go 3->5->7 and return back and then again go 3->6->5->7 hence no cycle while with 8->9->10->8 we visit 8 in the same path 

Approach
We will contain 2 arr one visited and second path vis , if we find the val to be visited and on the same path as well we will return true
*/

function detectCycleDFS(start,adjacentList,visitedArr,visitedPath){
  if(visitedArr[start]===1 && visitedPath[start]===1){
    return true;
  }
  const size=adjacentList[start].length;
  visitedPath[start]=1;
  visitedArr[start]=1;
  for (let i = 0; i <size; i++) {
   let ele=adjacentList[start][i]
   if(visitedArr[ele]===1 && visitedPath[ele]===1){
      return true;
    }
   else if(visitedArr[ele]==-1){
      const res=detectCycleDFS(ele,adjacentList,visitedArr,visitedPath)
      if(res){
         return true;
      }
     }
   
  }
  visitedPath[start]=-1;
}


function undirectedGraphDFS(adjacentList){
   const visitedArr = new Array(adjacenyList.length).fill(-1);
   const visitedPath = new Array(adjacenyList.length).fill(-1);
   const ans=detectCycleDFS(0,adjacentList,visitedArr,visitedPath)
   return ans?ans:false;
}



const adjacenyList=[  [], [ '2' ], [ '4' ], [ '1' ], [ '0' ], [ '3' ]   ];
const ans=undirectedGraphDFS(adjacenyList);
console.log(ans);