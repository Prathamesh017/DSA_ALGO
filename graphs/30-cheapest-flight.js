//https://leetcode.com/problems/cheapest-flights-within-k-stops/description
/*
there are n cities connected with one another through graphs , there is flights arr which defines src->destionation with price , so given a src to dest find the the cheapest flight

the catch is that out of many options(traversal routes) , it should not cross the no of stops

*/

function cheapestFlight(edges,flights,src,des,stops){
//convert into adjacenyList
const adjacentyList = new Array(edges).fill().map(() => []);
for (let i = 0; i <flights.length; i++) {
  const u=flights[i][0];
  const v=flights[i][1];
  const weight=flights[i][2];
  adjacentyList[u].push([v,weight]);
}
const distanceArr = new Array(adjacentyList.length).fill(Number.MAX_SAFE_INTEGER);
distanceArr[src]=0;
const queue=[];
queue.push({val:adjacentyList[src],stop:0,currentPrice:0});
let ans=Number.MAX_SAFE_INTEGER;
while(queue.length>0){
  const {val,stop,parent,currentPrice}=queue.shift();
  let size=val.length;
  for (let i = 0; i <size; i++){
    const neighbour=val[i][0];
    const price=val[i][1];
    if(neighbour===des && stop<=stops){
      console.log(ans);
        ans=Math.min(ans,price+currentPrice);
      }
      //distanceArr works as visited arr , if the particular node is already visited with shorter distance no need to explore it furthur
      else if(currentPrice+price<distanceArr[neighbour]){
        distanceArr[neighbour]=currentPrice+price;
      queue.push({val:adjacentyList[neighbour],stop:stop+1,currentPrice:currentPrice+price})
    }
  }
}
return ans;

}



const flights=[[0,3,59],[2,0,83],[2,3,32],[0,2,97],[3,1,16],[1,3,16]]
const ans=cheapestFlight(4,flights,3,0,3);
console.log(ans)