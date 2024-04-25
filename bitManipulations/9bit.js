//Find xor till n 
//for eg 4 - 1^2^3^4=4 , 11->1^2^3...^11=0

//Brute Force - Till N, LOOP

//Optimal Approach
//There is common pattern in XOR which works in multiple of 4
// 1       1           1      1 
// 2       1^2         3      n+1 
// 3       1^2^3       0       0
// 4       1^2^3^4     4       n

// 5       1^2...^5    1       1
// 6       1^2...^6    3      n+1 
// 7       1^2...^7    0       0
// 8       1^2...^8    4       n



function findXORTillN(n){
  if(n%4===0){
    return n;
  }
  else if(n%4===3){
    return 0;
  }
  else if(n%4===2){
    return n+1;
  }
  else{
    return 1 
  }
}


//another que- to find a range , for eg - 4,7 -> we can use tha above function only
/* we will find starting range i.e 1^2^3 fn(3) and till goal 1^2^3..^7
 fn(7) and simple do f(3)^ f(7)
  as internahlly it work  cancel 1^2^3 on both side have to 4^5^6^7 will only remain
 */