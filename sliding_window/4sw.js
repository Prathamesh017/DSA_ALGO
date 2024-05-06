//? Fruits in Basket , there are n fruit trees that are planted along a road. We have two baskets and wants to put the maximum number of fruits in them. Each Basket can hold only single type
//https://leetcode.com/problems/fruit-into-baskets/description/
//eg - [3,3,1,3,2,1,3,4,2] for eg there can be this 2 baskets [3,3,3] [1]

//Brute FOrce - Generating Subarrs;
//Good Soln - But Breaks in Bigger Size as T.C -O(N*2)
function fruitInBasket(arr){
  let basket=[];
  let max=0
  for (let i = 0; i < arr.length; i++) {
    let unique=1;
    basket.push(arr[i]);
    for (let j = 1+i; j < arr.length; j++) {
       if(basket.includes(arr[j])){
          basket.push(arr[j]);
       }else{
          if(unique>=2){
            // max=Math.max(max,basket.length) 
            break;
          }else{
            unique++;
            basket.push(arr[j]);
          }
       }
       
    }
   
    max=Math.max(max,basket.length) 
    basket=[];
  }
  return max;
}

//Sliding Window

function fruitInBasket2(arr){
  let left=0;
  let right=0;
  let max=0;
  let map=new Map();
  while(right<arr.length){
    //it the value is already present , keep incrementing it count/frequency
    if(map.has(arr[right])){
      let occ=map.get(arr[right]);
      map.set(arr[right],occ+1)
    }else{
      map.set(arr[right],0);
    }
    //once size becomes bigger , start by reducing the map
    if(map.size>2){
      let occ=map.get(arr[left]);
      if(occ===0){
        map.delete(arr[left])
      }else{
        map.set(arr[left],occ-1)
      }
      left++;
      }else{
        max=Math.max(max,right-left+1);
      }
    
    right++;
  }
  return max;
}

const res=fruitInBasket2([3,3,3,1,2,1,1,2,3,3,4]);
console.log(res);
