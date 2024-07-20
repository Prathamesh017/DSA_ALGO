//https://www.geeksforgeeks.org/problems/number-of-distinct-islands
/*
imagine 1 as land , how many island are there , we can see there are 2 right , but the shape is identical , so they will be considered as 1 only 
[0, [1, 1], 0, 0],
[0, [1, 1], 0, 0],
[0, 0, 0, [1, 1]],
[0, 0, 0, [1, 1]]

the upper four are -> [0,1],[0,2],[1,1],[1,2]
the last four -> [2,3][2,4],[3,3],[3,4]

how to check if they are same or not ,so
considering the first as base ,sub it every one
[0,1]=> `[0,1][0,1]=[0,0]`,`[0,1],[0,2]=[0,1]`,`[0,1][1,1]=[1,0]`,'[0,1][1,2]=[1,1]' 
[2-3]=> '[2,3][2,3]=[0,0]','[2,3][2-4]= [0,1]','[2,3][3,3]=[1,0]','[2,3][3,4]=[1,1]'


Step 1 - identify 1 and make neighbours also visited and store thier position

*/
function markIslands(matrix, pos) {
  const queueLevel = []
  const positions = []
  let baseI = pos[0]
  let baseJ = pos[1]
  queueLevel.push({ pos })
  while (queueLevel.length > 0) {
    const node = queueLevel.shift()
    let i = node.pos[0]
    let j = node.pos[1]
    positions.push([(i - baseI),(j - baseJ)])
    if (matrix[i][j] === 0) {
      continue // Skip already visited cell
    }
    matrix[i][j] = 0
    //check for top
    if (i - 1 >= 0 && matrix[i - 1][j] === 1) {
      queueLevel.push({ pos: [i - 1, j] })
    }
    //check for right
    if (j + 1 < matrix[0].length && matrix[i][j + 1] === 1) {
      queueLevel.push({ pos: [i, j + 1] })
    }

    //check for bottom
    if (i + 1 < matrix.length && matrix[i + 1][j] === 1) {
      queueLevel.push({ pos: [i + 1, j] })
    }

    // check for left
    if (j - 1 >= 0 && matrix[i][j - 1] === 1) {
      queueLevel.push({ pos: [i, j - 1] })
    }
  }

  return positions
}

function noOfDistrinctIsland(matrix) {
  const set = new Set()
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        let pos = markIslands(matrix, [i, j])
          set.add(JSON.stringify(pos))
        
      }
    }
  }

  return set.size
}



const ans = noOfDistrinctIsland(matrix)
console.log(ans)
