/*https://www.geeksforgeeks.org/problems/alien-dictionary */
/*
given a alien dictinary and no of starting chars , find the sequence in which they appear

Intution
if we observe we can see some chars appear before some other chars so it is question of topological sort , but for that we have to create a adjaceny list 

*/

function alienDictinory(dictionary,noOfChars){
  let charToIndex = new Map();

 for (let i = 0; i < 26; i++) {
  let char = String.fromCharCode(97 + i);
  //maping char to index and mapping index to char as well a-0 and 0-a
  charToIndex.set(char, i);
  charToIndex.set(i, char);

}
  const adjacentyList= new Array(noOfChars).fill().map(() => []);

  for (let i = 0; i <dictionary.length-1; i++) {
    const word1=dictionary[i];
    const word2=dictionary[i+1];
    let j=0;
    let char1=word1.charAt(j);
    let char2=word2.charAt(j);
    while(char1 && char2 && char1===char2){
     j++;
     char1=word1.charAt(j);
     char2=word2.charAt(j);
    }
    if(char1&& char2){
      console.log(char1,char2)
      adjacentyList[ charToIndex.get(char1)].push(charToIndex.get(char2));
    }
  }
  const topologicalSort= topologicalSorting(adjacentyList);
  const ans=[];
  for (let i = 0; i < topologicalSort.length; i++) {
    const order = topologicalSort[i];
    ans.push(charToIndex.get(order));
  }
  return ans;
}

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


const dict=["baa","abcd","abca","cab","cad"];
const ans=alienDictinory(dict,4);
console.log(ans);