// /https://leetcode.com/problems/word-search/


//Done by Self , Simple Backtracking for every grid item
function isCharAvailAble(arr,str,wordIndex,i, j,ans){
  let nextChar=str.charAt(wordIndex);

  if(wordIndex===str.length){
     ans=true;
     return ans;
  }

  //check for up
  if(i-1>=0 && arr[i-1][j]===nextChar){
    arr[i-1][j]='$'
    ans=isCharAvailAble(arr,str,wordIndex+1,i-1,j,ans)
    if(ans){
      return true;
    }
    arr[i-1][j]=nextChar;
  }
  //check for down
  if(i+1<=arr.length-1 && arr[i+1][j]===nextChar){
    arr[i+1][j]='$'
    ans=isCharAvailAble(arr,str,wordIndex+1,i+1,j,ans)
    if(ans){
      return true;
    }
    arr[i+1][j]=nextChar;
  }
  if(j+1<=arr[0].length-1 && arr[i][j+1]===nextChar){
    arr[i][j+1]='$'
    ans=isCharAvailAble(arr,str,wordIndex+1,i,j+1,ans)
    if(ans){
      return true;
    }
    arr[i][j+1]=nextChar;
  }
  if(j-1>=0 && arr[i][j-1]===nextChar){
    arr[i][j-1]='$'
    ans=isCharAvailAble(arr,str,wordIndex+1,i,j-1,ans)
    if(ans){
      return true;
    }
    arr[i][j-1]=nextChar;
  }
  return ans;
}
function wordSearch(arr, word,wordIndex) {
 let ans=false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      let char = arr[i][j]
      let charInStr = word.charAt(wordIndex)
      if (char===charInStr) {
       arr[i][j]='$'
    ans=isCharAvailAble(arr,word,wordIndex+1,i,j,ans);
       if(ans){
        return true;
       }
       arr[i][j]=charInStr;
      }
    }
  }
  return ans;
}

const arr=[["C","A","A"],["A","A","A"],["B","C","D"]]
const res = wordSearch(arr,"AAB",0);
console.log(res);
