//!Rat in Maze
//https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1
//Consider a rat is position 0,0 in 2d arr and it want to reach  the last arr grid that is (n-1)(n-1), it can go up,down,left,right but it can only go through 1' and not 0's value , the whole arr contains zero and ones

/*
//* Input:  N = 4 m[][] = 
   [
    [1, 0, 0, 0],   Output: DDRDRR DRDDRR
    [1, 1, 0, 1], 
    [1, 1, 0, 0},
    [0, 1, 1, 1} //reach this block
    ]
*/

//My attempt
// function ratInMaze(arr) {
//   let str = ''
//   let i = 0
//   let j = 0
//   let x = arr.length - 1
//   let y = arr[0].length - 1

//   while (i !== x || j !== y) {
//     if (j + 1 <= y && arr[i][j + 1] === 1) {
//       arr[i][j + 1] = 0
//       j = j + 1
//       str += 'R'
//     } else if (i - 1 >= 0 && arr[i - 1][j] === 1) {
//       arr[i - 1][j] = 0
//       i = i - 1
//       str += 'U'
//     } else if (i + 1 <= x && arr[i + 1][j] === 1) {
//       arr[i + 1][j] = 0
//       i = i + 1
//       str += 'D'
//     } else if (j - 1 >= 0 && arr[i][j - 1] === 1) {
//       arr[i][j - 1] = 0
//       j = j - 1
//       str += 'L'
//     } else {
//       break
//     }
//   }
//   return str
// }


//T.C - 4(n2) as there are n*n cells which each have 4 possiblies .
//S.C - it may go recursive on every hence , O(n*n) 
function ratInMazeRecursive(i, j, arr, path, result) {
  let x = arr.length - 1
  let y = arr[0].length - 1

  //base case
  if (i < 0 || i > x || arr[i][j] == 0 || j < 0 || j > y) {
    return
  }
  //found ans;
  if(i==x && j===y){
    result.push(path);
    return;
  }
  arr[i][j]=0;  //to make it visited
  //for up
  ratInMazeRecursive(i - 1, j, arr, path + 'U', result)
  //for down
  ratInMazeRecursive(i + 1, j, arr, path + 'D', result)

  //for right
  ratInMazeRecursive(i, j + 1, arr, path + 'R', result)
  //for left
  ratInMazeRecursive(i, j - 1, arr, path + 'L', result)

  //at the time of returning I need to remove last  path and make it 1 
   path=path.slice(0, -1)
  arr[i][j]=1;



  return result;
}
let arr = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 0],
]

const res = ratInMazeRecursive(0, 0, arr, '', [])
console.log(res)
