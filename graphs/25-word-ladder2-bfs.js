//https://leetcode.com/problems/word-ladder-ii/description
/*
Doing BFS Way
Approach  consider  ["ted","tex","red","tax","tad","den","rex","pee"]
when we go from red we can go to red and tex , both are valid paths ,so we can tak them with red
red-ted ,red-tex now from ted we get tad so path will be red-ted-tad we will continue till we get ans if not we are alreading taking out from the stack hence no worrires

*/
function replaceCharacterAtIndex(str, index, newChar) {
  if (index < 0 || index >= str.length) {
    console.log(index);
    throw new Error("Index out of bounds");
  }
  
  return str.slice(0, index) + newChar + str.slice(index + 1);
}

//Good Soln. Doesn't Matter If get TLE
function wordLadderBFS(beginWord,endWord,wordList){
  const queueLevel=[];
  const visited=new Set();
  const wordSet = new Set(wordList)
  if(!wordList.includes(endWord)){
    return []
  }
  visited.add(beginWord) 
  queueLevel.push([beginWord]);
  let finalArr=[];
  let chars = [];


  while(queueLevel.length>0){
    let size=queueLevel.length;
    //take out every word and check its relative pair
    for (let i = 0; i < size; i++) {
      const pathArr=queueLevel.shift();
      const latestword=pathArr[pathArr.length-1];
      visited.add(latestword);
      for (let i = 0; i <latestword.length; i++) {
          for (let k = 97; k <= 122; k++) { // from 'a' to 'z'
            let toReplaceChar = String.fromCharCode(k);
           let newWord=replaceCharacterAtIndex(latestword,i,toReplaceChar);
           if(newWord===endWord){
            
            if(finalArr.length===0){
              finalArr.push([...pathArr,newWord]);
            }else if(finalArr[0].length-1===pathArr.length){
              finalArr.push([...pathArr,newWord]);
            }
           }else if(!visited.has(newWord) &&wordSet.has(newWord)){
            queueLevel.push([...pathArr,newWord]);
              // visited.add(newWord);
           }
        }
      }
      
    }

  }

  return finalArr;


}





const beginWord = "red"
const  endWord = "tax"
const wordList = ["ted","tex","red","tax","tad","den","rex","pee"]
const  ans=wordLadderBFS(beginWord,endWord,wordList);
console.log(ans);