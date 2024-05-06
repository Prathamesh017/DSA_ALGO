//https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/description/

// ? Given a string s consisting only of characters a, b and c. Return the number of substrings containing at least one occurrence of all these characters a, b and c. eg - aaacb possible sub string are aaacb , aacb ,acb hence 3

//Brute Force - Generating All Substrings
//Works But T.C Exceeds

//A Slight Improve - Almost Passes ALL Test Cases
//once we get our first valid substring like 'abc' for  'abcca' now we know next substrings like abcc and abcca will be automatically valid right so need no need to go till last  we directy include them in occurence
function threeCharSubstrings(str){
 let occurence=0;
 let set=new Set();
   for (let i = 0; i < str.length; i++) {
    let charAtI=str.charAt(i);
     set.add(charAtI);
    for (let j = 1+i; j< str.length; j++) {
     let charAtJ=str.charAt(j);
     set.add(charAtJ);
     if(set.size===3){
       occurence+=str.length-j;
       break;
     }
    }
    set=new Set();
  }
  return occurence;
}


const res=threeCharSubstrings("abcabc");
console.log(res);

//Optimal One - DO In Revision 