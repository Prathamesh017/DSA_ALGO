//Check if the Ith Bit is set or  not
//Set means 1

//Method 1- Brute Force
//Covert into binary and go from right and find the Ith Bit and check if it 1 or not(set)

//Method - 2
//Left Shift Operator
function LeftShiftCheck(no, i) {
  //first calculate  determinantValue
  let bitMask = 1 << (i - 1)
  //for i=1 will be 1,10 for 2 ,100 for 3 and so on

  //if (dv & no) is pos , we can assume ith bit is set , else not
  //eg let no be 5 and i be 2 (dv=10)
  //    0 1 0 1
  //  & 0 0 1 0  with the help of dv we will always 1 at the i th index
  //so   0 0 0 0   , so now we know  ith index is not set

  let result = no & bitMask
  if (result > 0) {
    return true
  } else {
    return false
  }
}

//Method 3
function rightShiftCheck(no, i) {
  //shift the no  right till the ith point
  //so the last number will be automatically our Ith bit point
  //then & 1 can easily detect
  console.log((no >> (i-1)) & 1)
  //for 3,2 ->  3>>2 -> 0 1 0 0 -> 0 0 0 1
  //then  0 0 0 1
  //    & 0 0 0 1
  //      0 0 0 1

  let bitMask =  no >>(i-1)
  let result = bitMask & 1
  if (result > 0) {
    return true
  } else {
    return false
  }
}

const ans = LeftShiftCheck(3, 2)
const ans2 = rightShiftCheck(3, 2)
console.log(ans,ans2);

