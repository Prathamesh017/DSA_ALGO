//Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.
//for eg -[0,1,0,1,1 ]->[0,1],[1],[0,1,0],[0,1] [1],[1]


//Brute Force
function binarySubArr(arr,k){
  let noOfSubArrs=0;
  let sum=0;
  for (let i = 0; i < arr.length; i++) {
    sum=arr[i];
    if(sum===k){
      noOfSubArrs++;
    }
    for (let j = i+1; j < arr.length; j++) {
      sum=sum+arr[j];
    if(sum===k){
      noOfSubArrs++;
    }else if(sum>k){
      break;
    }
    }
    sum=0;
    
  }
  return noOfSubArrs;
}

const res= binarySubArr([0,0,0,0,0],0);
console.log(res);

/* 
Formuala - subArrs satisfying this condition would be //* sum===k
would be same (sum<=k) - (sum<=k-1);

Every time the window moves right , the no of subarrs valid will be the current sub arr right for eg [1,0,1,0,1] k-2 
l=0 r=0  valid sub [1] i.e less than k  hence no of valid subarr=1
l=0 r=1  valid sub [0] [0,1] i.e 2 hence no of valid subarr=1+2
l=0 r=2  valid sub [1] [1,0] [1,0,1] i.e 3 hence no of valid subarr=1+2+3
hence we can see at every right increment we can add  r-l+1
keep doing this till r<arr.length and move l=l+1 once sum>k

*/

function calculatSubArr(arr,k){
  return binarySubArr2(arr,k) -binarySubArr2(arr,k-1);
}

function binarySubArr2(arr,k){
 let left=0; let right=0;
 let sum=0; let subArrs=0;
  if(k<0){
    return 0
  }
  while(right<arr.length){
    sum+=arr[right];

    //if is greater we move left;
    while(sum>k){
      sum-=arr[left];
      left++;
    }
   subArrs=subArrs+(right-left+1)
   right++;
  }
  return subArrs;
}

const res2= calculatSubArr([0,0,0,0,0],0);
console.log(res2);



