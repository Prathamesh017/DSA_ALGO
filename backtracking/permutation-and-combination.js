
//Permutation->abc is different than cba hence permutation
//abc->abc,aca,bac,bca,cba,cab 
function permutation(str,ans,ansArr){
  if(ans.length===str.length){
    ansArr.push(ans);
    return;
  }

  for (let i = 0; i < str.length; i++) { 
    let char=str.charAt(i); 
    if(!ans.includes(char)){
      ans+=char;
      permutation(str,ans,ansArr);
      ans=ans.slice(0,-1);
    }
  }
  return ansArr;
}

// const res=permutation("abcd","",[]);
// console.log(res);

//Combination => abc of 2 would be ab ,bc,ca  ,here ab=ba would be same

function combinations(str,ans,k,start,finalArr){

  if(ans.length===k){
    finalArr.push(ans);
    return;
  }
  for (let i = start; i < str.length; i++) { 
    let char=str.charAt(i); 
      ans+=char;
      combinations(str,ans,k,i+1,finalArr);
      ans=ans.slice(0,-1);
    
  }
  return finalArr;
}
const res2=combinations("abcd","",2,0,[]);
console.log(res2);


