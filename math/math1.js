//give the number of digits of a number;
//n=12->2 , n=192->3  
function digitCount(num){
 let ctr=0;
  while(num>0){
    num=Math.floor(num/10);
    ctr++;
  }
  return ctr;
}

const res=digitCount(1215);
console.log(res);