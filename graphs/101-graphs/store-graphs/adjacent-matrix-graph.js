
/* 
 1
/  \    this is a undirected graph,therefore connections are (1->2),(2->1) ,(1->3),(3->1)
2-- 3    (2->3),(3->2) 



T.C for querying would be constant , can directly access values with the help of matrix
S.C - n2  
*/

function createAdjacencyMatrix(nodes,edges){
  const adjMatrix = Array.from(Array(nodes), () => Array(nodes).fill(0));

  //if edjes 1-->2
  adjMatrix[1][2]=1;
  adjMatrix[2][1]=1;

   //if edjes 1-->3
   adjMatrix[1][3]=1;
   adjMatrix[3][1]=1;

   //if edjes 2-->3
   adjMatrix[2][3]=1;
   adjMatrix[3][2]=1;


   return adjMatrix;

}
