//https://leetcode.com/problems/surrounded-regions/description

/*
Given a m*n matrix which consist x and o , O's can converted into Xs if there are surronded with X's on all sides

["X","X","X","X"]
["X",["O","O"],"X"]        if you see O's(bracketed) are surronded with X;s on each side
["X","X","O"],"X"]         so they can be coverted into X's but the O on (3,1) is not  
["X","O","X","X"]          surroned on bottom hence , it can't be converted


Observation
1)O's which are at edge can't be converted
2) if a group of O's has 1 O on the edge/boundary the whole set can't be converted 
["X","X","X","X"]
["X",["O","O"],"X"]        here it is not possible , so it will stay the same
["X","X", "O"],"X"]         
["X","X", "O"],"X"]  


Approach
1)Look for O's on the boundary and get it's neighbours at mark it 1's so we know these are not surronded by X's 
2)the rest Os which are not marked yet will be converted into X

*/
function connectSurronding(matrix,pos,visitedArr){
  const queueLevel=[];
  queueLevel.push({pos})
  
  while(queueLevel.length>0){
    console.log("HELLO");
   const node=queueLevel.shift();
   let i=node.pos[0];
   let j=node.pos[1];
   if (visitedArr[i][j] === 1) {
     continue; // Skip already visited cell
    }
    visitedArr[i][j]=1;
   //check for top
   if(i-1>=0 && matrix[i-1][j]==="O" && visitedArr[i-1][j]===0){
    queueLevel.push({pos:[i-1,j]});
  }
  //check for right
  if( j+1<matrix[0].length && matrix[i][j+1]==="O" && visitedArr[i][j+1]===0){
    queueLevel.push({pos:[i,j+1]});
  }

  //check for bottom
  if(i+1<matrix.length &&  matrix[i+1][j]==="O" && visitedArr[i+1][j]===0){
    queueLevel.push({pos:[i+1,j]});
  }

  // check for left
  if(j-1>=0 &&  matrix[i][j-1]==="O" && visitedArr[i][j-1]===0){
    queueLevel.push({pos:[i,j-1]});
  }
  }
}

function surroundedRegions(matrix){
  const visitedArr = Array.from({ length: matrix.length }, () => new Array(matrix[0].length).fill(0));

  //look for edges
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      //boundary confirmed;
      if((i-1<0 || j+1>=(matrix[0].length) ||i+1>=matrix.length || j-1<0) &&(matrix[i][j]==="O" && visitedArr[i][j]===0)){
            //O connected with the boundary based O can't be furhur connected
            console.log(i,j)
            connectSurronding(matrix,[i,j],visitedArr)
         
      }else if(matrix[i][j]==="X"){
        visitedArr[i][j]=1;
      }
    }
  }
  // console.log(matrix,visitedArr);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
         if(matrix[i][j]==="O" && visitedArr[i][j]===0){
            //O's which are connected with X's
            matrix[i][j]="X";
         }
      
    }
  }
  return matrix;
}

const matrix=[["X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],["O","X","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","O","X","X"],["O","O","O","O","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","X"],["O","O","X","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","X","O"],["O","O","O","O","O","X","O","O","O","O","X","O","O","O","O","O","X","O","O","X"],["X","O","O","O","X","O","O","O","O","O","X","O","X","O","X","O","X","O","X","O"],["O","O","O","O","X","O","O","X","O","O","O","O","O","X","O","O","X","O","O","O"],["X","O","O","O","X","X","X","O","X","O","O","O","O","X","X","O","X","O","O","O"],["O","O","O","O","O","X","X","X","X","O","O","O","O","X","O","O","X","O","O","O"],["X","O","O","O","O","X","O","O","O","O","O","O","X","X","O","O","X","O","O","X"],["O","O","O","O","O","O","O","O","O","O","X","O","O","X","O","O","O","X","O","X"],["O","O","O","O","X","O","X","O","O","X","X","O","O","O","O","O","X","O","O","O"],["X","X","O","O","O","O","O","X","O","O","O","O","O","O","O","O","O","O","O","O"],["O","X","O","X","O","O","O","X","O","X","O","O","O","X","O","X","O","X","O","O"],["O","O","X","O","O","O","O","O","O","O","X","O","O","O","O","O","X","O","X","O"],["X","X","O","O","O","O","O","O","O","O","X","O","X","X","O","O","O","X","O","O"],["O","O","X","O","O","O","O","O","O","O","X","O","O","X","O","X","O","X","O","O"],["O","O","O","X","O","O","O","O","O","X","X","X","O","O","X","O","O","O","X","O"],["O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O","O"],["X","O","O","O","O","X","O","O","O","X","X","O","O","X","O","X","O","X","O","O"]];
const ans=surroundedRegions(matrix);
console.log(ans);