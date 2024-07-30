//https://www.geeksforgeeks.org/problems/eventual-safe-states/0
/*
A node is a terminal node if there are no outgoing edges.(outdegree 0)
A node is a safe node if every possible path starting from that node leads to a terminal node.
return all safe nodes (see original diagram)
5 , 6 are terminal nodes which don't have outgoing edges ,so they automatically will be safe node
other than them only 2,4 have path connecting to terminal node 5 , 0 can't be because even though its one path reaches , but not every path reachs hence not a safe node

ans=[2,4,5,6]

Observations
1) anyone who is part of cycle will not reach terminal node , but return back to itself ,hence they will be not safe node
2) one who is connected to cycle i.e is going into the cycle as well will not be safe node,as it is going through the cycle hence not outcomming from the cycle (2 in our example) , but only who is going into the cycle something like this

     1->3<-7   7 would never reach a terminal node as it is going into the cycle ,atleast 
      \ |      not for all paths
        4

so if we figure who are in the path of the cycle and who are connected with it(incoming only) , the rest will automatically safe node
two cases
1)we detect cycle and mark rest of them as safe node
2) we don't detect a cycle and mark the whole path as safe
*/
const safeNodes=[];
// function safeNodes(visitedPath){
//   console.log(visitedPath);
//   const safe=visitedPath.map((val, index) => {
//     if (val === -1) {
//       return index;
//     }
//     return null; // Returning null for non-matching cases
//   })
//   .filter(index => index !== null);
//   return safe;
// }
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
safeNodes.push(start);
visitedPath[start]=-1;
return false;
}

function eventualSafeState(adjacentList){
  const visitedArr = new Array(adjacenyList.length).fill(-1);
  const visitedPath = new Array(adjacenyList.length).fill(-1);
  for(let i=0;i<adjacentList.length;i++){
    if(visitedArr[i]===-1){
      detectCycleDFS(i,adjacentList,visitedArr,visitedPath) 
    }
  }
  return safeNodes.sort((a,b)=>{return a-b});
}


// const adjacenyList=[[1, 2], [2, 3], [5], [0], [5], [], []];
const adjacenyList=[[1],[2],[3],[4,5],[6],[6],[7],[],[1,9],[10],[8],[9]]
const ans=eventualSafeState(adjacenyList);
console.log(ans);