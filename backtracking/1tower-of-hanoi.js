// ? Tower Of Hanoi 
//# Actually with just 3 towers, it is possible to stack n , size of disks in correct order

//Q In terms of N discs , find no of moves requires

// Essentailly It should 3 steps recursively
// 1) Move n-1 discs from src->helper
// 2) Move n dis from src->des
// 3) Move n-1 disc again from helper to dest



function toh(discs,src,dest,helper){
  
   if(discs===0){
    return 0;
   }else if(discs===1){
    console.log(`Move Disc ${discs} from ${src} to ${dest} aa`)
    return 1;
   }
   else {
      //moving from src to helper for n-1 discs assuming we alread have y n-1 stacked up correctly
     let move=toh(discs-1,src,helper,dest);
     //move n disc the biggest disk to destination and incrment the count as it is a move
     console.log(move);
     move++;
     console.log(`Move Disc ${discs} from ${src} to ${dest} ab`)
    
     //moving n-1 disc which are in helper back to the destination so that they can be correctly stacked  up
     move+=toh(discs-1,helper,dest,src);
     return move;
   }
}
const res=toh(3,"src","des","helper");
console.log(res);



