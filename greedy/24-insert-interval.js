//https://leetcode.com/problems/insert-interval/description/
//given an interval , we we have to add it in between in such a way that it doesn't cause any interruptions

/*
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].


Similar Problem -https://leetcode.com/problems/merge-intervals/description/
 */

function insertInterval(arr,newInt){
  let newInterval=[];
  let i=0;
  while(i<arr.length){
    let lat=newInterval.length-1;
    //first insert interval
    if(newInterval.length===0 && arr[i][0]>newInt[1]){
      newInterval.push(newInt);
      for (let index = i; index <arr.length; index++) {
        newInterval.push(arr[index]);
      }
      return newInterval;
    }//in middle
    else if(lat>=0 &&  newInterval[lat][1]<newInt[0] && newInt[1]<arr[i][0]){
      newInterval.push(newInt);
      for (let index = i; index <arr.length; index++) {
        newInterval.push(arr[index]);
      }
      return newInterval
    }
    else if(arr[i][1]<newInt[0]){
      newInterval.push(arr[i]);
    }else if(arr[i][1]>=newInt[0] ){
      let max=Math.max(arr[i][1],newInt[1]);
      let min=Math.min(arr[i][0],newInt[0]);
      newInt=[min,max];
    }
    i++;

  }

  //insertion at last
  newInterval.push(newInt);
  return newInterval;
}


const interval=[[1,3],[6,9]];
const res=insertInterval(interval,[2,5]);
console.log(res);