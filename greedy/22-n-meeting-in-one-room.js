//https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/

//Given 2 arrs start and end time denotes the start and end time of meeting which would happen in one room , arrange in such way that we can conduct maximum meetings possible


class Meeting {
  constructor(start, end, pos) {
      this.start = start;
      this.end = end;
      this.pos = pos;
  }
}



function meetingComparator(meeting1, meeting2) {
  //[a,b]=>b=meeting1 and b=meeting2
  //-1 defines change the orignal way so [b,a];
  //1 denotes keep the orignal way so [a,b]
  if (meeting1.end < meeting2.end) {
      return -1;
  } else if (meeting1.end > meeting2.end) {
      return 1;
  } else if (meeting1.pos < meeting2.pos) {
      return -1;
  }
  return 1;
}

function maxMeetings(start, end) {
  let meetings = [];
  for (let i = 0; i < start.length; i++) {
      meetings.push(new Meeting(start[i], end[i], i + 1));
  }

  meetings.sort(meetingComparator);
  let meetingsPossible=0;
  let meetingPossiblePositions=[];

  for (let i = 0; i <start.length-1; i++){
    if(meetings[i].end<meetings[i+1].end){
      meetingsPossible++;
      meetingPossiblePositions.push(meetings[i].pos);
    }
  }
  return meetingPossiblePositions;
}
const start = [0,3,1,5,5,8];
const end = [5,4,2,9,7,9];
const ans=maxMeetings(start,end);
console.log(ans);