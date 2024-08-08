//https://leetcode.com/problems/word-ladder/description
/*
two words are given , "beginword" and "endword" and dictinary contain unique words "wordlist"
beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
so with every transformation we can change a letter in beginword to make it endword for eg hit can be writtern as hot (i changed to o) but the word should be available in wordlist

"hit" -> "hot" -> "dot" -> "dog" -> cog", is one of transformation which takes 5 steps , we have to find the shortest transformation
*/

/*Brute Force
we can simply observe that to change beginword to endword , we have to change every char possible from a-z and check if exists in dictionary or not for eg

hit-> we will change h-> ait bit cit till zit no found
hit-> we will check for o-> hat hbt hct here  we will find hot so one found
then we will also check for t if there is another path which leads us to our endword
hit-> for t , hia ,hib hic etc not found 

then we check for all 3 chars in hot ->like aot ,bot.. zot ,hat hbt hct..hzt ,hoa,hob,hoc etc
so here we will find dot

also we can dot can lead to dog and log both hence we will explore both the parts as well and find whichever leads us to smallest path
*/

//Works Correctly But Exceeds T.L use Sets instead of checking with includs which saves time
function replaceCharacterAtIndex(str, index, newChar) {
  if (index < 0 || index >= str.length) {
    console.log(index);
    throw new Error("Index out of bounds");
  }
  
  return str.slice(0, index) + newChar + str.slice(index + 1);
}

function wordLadder(beginWord,endWord,wordList){

if(!wordList.includes(endWord)){
  return 0
}
const stack=[];
//getting a to z in arr;
let chars = [];
const visited = new Set();
visited.add(beginWord);
for (let i = 97; i <= 122; i++) {
  chars.push(String.fromCharCode(i));
}
stack.push(beginWord);
let steps=0;
while(stack.length>0){
  steps++;
  let size=stack.length;
  for(let s=0;s<size;s++){
    const word=stack.shift();
  for (let i = 0; i <word.length; i++) {
      for (let j = 0; j < chars.length; j++) {
         let toReplaceChar=chars[j];
         let newWord=replaceCharacterAtIndex(word,i,toReplaceChar);
         if(newWord===endWord){
          return ++steps;
         
         }
         if(!visited.has(newWord) &&wordList.includes(newWord)){
            stack.push(newWord);
            visited.add(newWord);
            let index=wordList.indexOf(newWord);
            wordList[index]="";
         }
      }
    }

  }
    
  
}
return 0;

}
const beginWord = "hit";
const  endWord = "cog"; 
const wordList = ["hot","dot","dog","lot","log","cog"]
const  ans=wordLadder(beginWord,endWord,wordList);
console.log(ans);