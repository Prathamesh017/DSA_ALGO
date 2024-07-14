/* 
Depth First Search
Depth First Search is all about going in depth doesn't matter left or right , but going just in depth  [1-2-6-5-3-4-8-7] or [1-3-4-8-7-2-5-6]
         1
       /   \                
      2     3- 4       
    /  \    |  |       
   5   6    7--8       

so considering starting point 3 so can go anywhere 1,4,7,8 so 3-4-7-8-1-2-5-6

so to dfs , we will need visited arr and
adjaceny list - 1=[2,3],2=[1,5,6],3=[1,4,7],4=[3,8],5=[2],6=[2],7=[3,8],8=[4,7]

Space Complexity- O(N)(visited arr),+O(N)(ans arr)+ in worst case of skew tree the recursive call stack will be O(N) therefore O(N)+O(N)+O(N)=O(N)

Time Complexity - the dfs function is called once for each node O(N) and
(degree of a node = no of neighbours of a node)
it is also called for each node's neighbour , for node's neighbour is degree of the node , hence total sum of degree of graph. total sum of degree= 2* no of edges , so it will be 
O(N)+(2*(No Of Edges))
*/
let ctr=0;
function dfsTraversal(adjacenyList,startingPoint,visitedArr,arr){
  const size=adjacenyList[startingPoint].length;
  arr.push(startingPoint);
  visitedArr[startingPoint]=1;
  for (let  i= 0; i <size; i++) {
    const ele=adjacenyList[startingPoint][i];
    if(visitedArr[ele]!==1){
      dfsTraversal(adjacenyList,ele,visitedArr,arr);
    }
  }
  return arr;
}


function dfsTraversal2(adjacenyList,startingPoint,visitedArr,arr){
  const size=adjacenyList[startingPoint].length;
  arr.push(startingPoint);
  visitedArr[startingPoint]=1;
  for (let  i= 0; i <size; i++) {
    const ele=adjacenyList[startingPoint][i];
    if(visitedArr[ele]!==1){
      dfsTraversal(adjacenyList,ele,visitedArr,arr);
    }
  }
  return arr;
}
const adjacenyList=[[],[2,3],[1,5,6],[1,4,7],[3,8],[2],[2],[3,8],[4,7]];
const visitedArr = new Array(adjacenyList.length+1).fill(0);
const ans=dfsTraversal(adjacenyList,1,visitedArr,[]);
console.log(ans);

