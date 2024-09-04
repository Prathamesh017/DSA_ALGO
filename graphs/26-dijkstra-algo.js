/*Dijkstra Algorithm is used to find shortest path
this algo can be done with Priority Queue and Set , while Set being the fastest way

we will do this queue for now

Steps 1 - we will make a distance arr intailzed with MAX.Infintity
Step 2- we first put src in queue and check for its neighbour , obsiouly that would have Number.MAX_SAFE_INTEGER as wieght , so current weight would be smaller
Step 3 - In the next iteration let say from src 0 to 1 , from 1 we are no going 2 , so if 2's weight  is not Number.MAX_SAFE_INTEGER , we will check if it's current weight is  smaller than 0 and 1's combined weight , if true , then no change , or else , it will have a new shortest path

Dijkstra Algorithm doesn't work on negative weights , because it leads to infinite loop because we basically add the previous weight and the current weight and compare it already  assigned weight so like previous weight was 4 and current weight is -2 , it will be shorter 2 , then again  if -2 we had , it will keep getting shorter leading to infinite loop
(also check  21-shortest-path-bfs(same only))


Also Why Prioriry Queue Works Better than Queue , 
   (D)   (E)
    |     |
    3     7
     \   /
      (A)
     /   \
    2     3
   /       \
 (B)       (C)
so Priority Queue gives priority to shortest path so imagine we have reached A with  with two ways (3,7) so with queue it will take consider both paths 7's which would be 7+3 =10 and3's which be  3+3 =6 to reach C , similary 7+2=9(B) and (3+2)=5  , but we know shortest path will of 3's so why waste time with 7 , will priority it will give priority to lowest path so 7 will be not considered

similary with set , it saves things in ascending order , hence set and priority queue are preffered over queue , 

distanceArr works as visited arr , if the particular node is already visited with shorter distance no need to explore it furthur
*/

function shortestPath(src,adjacentyList){
  const distanceArr = new Array(adjacentyList.length).fill(Number.MAX_SAFE_INTEGER);
  //src distance will always be 0;
  distanceArr[src]=0;
  const queue=[];
  queue.push(src);
  while(queue.length>0){
    const val=queue.shift();
    let size=adjacentyList[val].length;
    for (let i = 0; i <size; i++) {
      const neighbour=adjacentyList[val][i][0];
      const weight=adjacentyList[val][i][1];
      if(distanceArr[neighbour]===Number.MAX_SAFE_INTEGER){
        distanceArr[neighbour]=weight+distanceArr[val];
        queue.push(neighbour);
      }else if(weight+distanceArr[val]<distanceArr[neighbour]){
        distanceArr[neighbour]=weight+distanceArr[val];
        queue.push(neighbour);
      }
    }
  }
  return  distanceArr;

}



const adjacentyList=[[[1, 1], [2, 6]], [[2, 3], [0, 1]], [[1, 3], [0, 6]]]
const ans=shortestPath(2,adjacentyList);
console.log(ans)