//https://leetcode.com/problems/boats-to-save-people/description/(! GOOD QUESTION)
//give an arr of weights of people and a limit which tells how much boat can can carry ,so find out minimum boats required 
//weight example [1,6,4,9] limit 10 so  [1,9][6,4] hence 2 boats would be enough

//Approach - We will send the people with highest weight with every boat and try to send the small as well if possible , as the size is only 2 , we don't need to check furthur 
function boatsToSave(arr,limit){
  let boats=0;
  let start=0;
  let end=arr.length-1;
  arr=arr.sort((a,b)=>{return a-b});


  while(start<=end){
    // if smaller is possible, we will send it as well if not send the bigger only 
    if(arr[end]+arr[start]<=limit){
      boats++;
      start++;
      end--;
    }else{
      boats++;
      end--;
    }
  }

  return boats;
}

const people=[1,4,6,9];
const limit=10;
const res=boatsToSave(people,limit);
console.log(res);