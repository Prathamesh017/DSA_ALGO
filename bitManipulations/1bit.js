//Swap 2 numbers without extra variable


function swap(a,b){
  console.log("initale",a,b);

  a=a^b; //-->Step 1 
  b=a^b; // a is a^b (Step 1) 
 //therefore a^b^b   b^b cancels out (bcz x^x=0) 
 //b=a;  //Step 2
  a=a^b //b=a (Step 2) a=a^b (Step 1)
 //therefore  (a^b) ^ (a)= b as b and b cancels out
 //therfore a=b and b=a; swapped 
  console.log("after swap",a,b);

}


swap(4,5);