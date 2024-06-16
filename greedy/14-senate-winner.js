//https://leetcode.com/problems/dota2-senate/description/
// given str consist of R and D represents 2 parties , R and D , R can ban it;s next D and viceversa  , find the winner after all this ban tan


function senateWinner(str){
  //keeping the count;
  let r=0;
  let d=0;
  for (let i = 0; i < str.length; i++) {
     let char=str.charAt(i);
     char==="R"?r++:d++;
  }
  if(r===0){
    return "Dire"
   }else if(d===0){
    return "Radient";
   }

  let i=0;
  let strArr=str.split("")
  while(strArr.length!==1){
   let currentMember=strArr[i];
   let position=(i+1)%strArr.length;
   let oppositeMember=currentMember==="R"?"D":"R"
   while(strArr[position]!==oppositeMember){
    position=(position+1)%strArr.length;
   }
   strArr.splice(position,1);
   i=position<i?(i)%strArr.length:(i+1)%str.length;
   oppositeMember==="R"?--r:--d;
   if(r===0){
    return "Dire"
   }else if(d===0){
    return "Radient";
   }
  }
  return strArr[0]==="R"?'Radiant':'Dire';
}



const str="RRDDD";
const res=senateWinner(str);
console.log(res);