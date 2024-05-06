//1423. Maximum Points You Can Obtain from Cards

/*in a given arr , you can keep k values either from back or front only not from then middle
cardPoints = [1,2,3,4,5,6,1], k = 3
 so I can have [1,2,3], [1,2,1(last index)],[1,6,1], [5,6,1] 
 //these are all the possible combinations to find out the max points

*/

//Brute Force

function maxPoints(arr,k){
  let right=arr.length-1;
  let left=k-1;
  let max=0;
  let points=0;

  for (let i = 0; i <=left; i++) {
    points=points+arr[i];
  }
  max=points;

  while(left>=0){
    points=points-arr[left--];
    points=points+arr[right--];
    max=Math.max(points,max);
    console.log(arr[left],arr[right],max);
  }
  return max;
}
let res=maxPoints([61,16,51,40,37,21,96,70,13,98,28,75,74,87,68,55,95,24,46,87],19)
console.log(res);