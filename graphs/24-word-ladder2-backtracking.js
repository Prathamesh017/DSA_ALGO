//https://leetcode.com/problems/word-ladder-ii/description/
/*
two words are given , "beginword" and "endword" and dictinary contain unique words "wordlist"
beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
so with every transformation we can change a letter in beginword to make it endword for eg hit can be writtern as hot (i changed to o) but the word should be available in wordlist


Same As Word Ladder 1 , here we have to return all possible sequences
Backtracking
*/

//Works Correctly(NOT Sure 100%) But Exceeds T.L
function replaceCharacterAtIndex(str, index, newChar) {
  if (index < 0 || index >= str.length) {
    console.log(index);
    throw new Error("Index out of bounds");
  }
  
  return str.slice(0, index) + newChar + str.slice(index + 1);
}


function wordLadderRecursive(word,endWord,wordSet,chars,visited,possiblePaths,path,finalAns){
  let currentpath=[];
    for (let i = 0; i < word.length; i++) {
      for (let j = 0; j < chars.length; j++) {
        let toReplaceChar=chars[j];
        let newWord=replaceCharacterAtIndex(word,i,toReplaceChar);
        if(newWord===endWord){
          finalAns.push([...path,newWord]);
        
          return finalAns;
          
        }
        if(!possiblePaths.has(newWord) &&!visited.has(newWord) && wordSet.has(newWord)){
           currentpath.push(newWord);
        }
     } 
  }
  for(let i=0;i<currentpath.length;i++){
    possiblePaths.add(currentpath[i]);
  }
  for (let i = 0; i <currentpath.length; i++) {
    path.push(currentpath[i]);
    visited.add(currentpath[i]);
    wordLadderRecursive(currentpath[i],endWord,wordSet,chars,visited,possiblePaths,path,finalAns)
    visited.delete(currentpath[i]);
    path.pop()

  }
  for (let i = 0; i <currentpath.length; i++) {
    possiblePaths.delete(currentpath[i]);
  }
 
 
  return finalAns;
}

function wordLadder2(beginWord,endWord,wordList){
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) {
    return 0;
  }
let chars = [];
const visited = new Set();
visited.add(beginWord);
const possiblePaths=new Set();
possiblePaths.add(beginWord)
for (let i = 97; i <= 122; i++) {
  chars.push(String.fromCharCode(i));
}

return wordLadderRecursive(beginWord,endWord,wordSet,chars,visited,possiblePaths,[beginWord],[]);
}
const beginWord = "red"
const  endWord = "tax"
const wordList = ["ted","tex","red","tax","tad","den","rex","pee"]
const  ans=wordLadder2(beginWord,endWord,wordList);
console.log(ans);