// https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph
/* Breadth First Traversal
         1
       /   \                
      2     6       consider  this graph and starting point to be 6,
    /  \    / \     so (3,4,7,8) won't be the 2 level here , as we used to do with trees
   3   4    7  8    so from 6 , level 1 will be 1,7,8 as they all are at  equal distance 
        \  /        from 6 
         5   
so 1st level -1,7,8 ,2nd level - 2(from 1) 5(from 7), 3rd level-3,4(from 2)
unlike trees, where we had only top->bottom approach, here there can be problem of revisiting the node for eg from 4 I can go to 5 again ,(which is already visited with 7)

so we have to keep a visited arr to avoid revisit

So To DO BFS we need a queue , a visited array and adjacent list(or adjaceny matrix) which represent the graph
adjaceny list 1-{2,6},2={1,3,4},3={2},4={2,5},5={4,7},6={1,7,8},7={5,6},8={6} 

Space Complexity = Queue(O(N))+ Visited Arr(O(N))+AnsArr+(O(N))=O(N)


Time Complexity - the while function while execute for each node O(N) and
(degree of a node = no of neighbours of a node) and the inner for loop runs for its neighbours, so for each node, it runs for all its neighbour , the summation of all neighbours is sum of all degrees of graph which is= 2*No Of Edges  
therefore = O(N)+(2*(No Of Edges))
*/
function bfsTraversal(adjacenyList,startingPoint){
  const queueLevel=[];
  const traversals=[];
  queueLevel.push({no:startingPoint,val:adjacenyList[startingPoint]});
  const visitedArr = new Array(adjacenyList.length+1).fill(0);

  while(queueLevel.length>0){
    const node=queueLevel.shift()
    if((visitedArr[node.no]!==1)){
      traversals.push(node.no);
    }
    visitedArr[node.no]=1;
    for (let i = 0; i <node.val.length; i++) {
      if(visitedArr[node.val[i]]!==1){
        queueLevel.push({no:node.val[i],val:adjacenyList[node.val[i]]})
      }
    }
  }
  return traversals;
}



const adjacenyList=[[],[2,6],[1,3,4],[2],[2,5],[4,7],[1,7,8],[5,6],[6]]
// const adjacenyList = [
//   [], // Node 0
//   [2, 3], // Node 1
//   [1, 4], // Node 2
//   [1, 5], // Node 3
//   [2, 6], // Node 4
//   [3], // Node 5
//   [4] // Node 6
// ];
const ans=bfsTraversal(adjacenyList,6);
console.log(ans);