/*
 Morris Traversal - Like Regular Recursive traversal . T.C -(O(N)), but it doesn't extra space  O(1)

It uses the concept of threaded binary tree
Overall , in recurvise tree , we use backtracking , so after reaching 4 we backtrack to 5 and then to the top ,with morris traversal , we connect 4's right to 10 so no need to backtrack
(in Inorder - Left Root Right , so once Left is done we go to right hence left subtree's last node's right would be connected to right)
           10             
         /   \            
        6      15        
      /  \    
     3    5
           \
            4

Approach and Intution
Case 1 -  Basic Understanding of Morris Tree is that We make the left subtree's right most element(4) connected to the parent(10) to avoid backtracking ? correct. but what if there is not left ? 
In that case we print the current one , and move to right , (according to inorder traversal)

Case 2- if the left exist , we go to the rightmost guy(4)(which is the last element of the left subtree) and make the connection to parent, no traversal yet, just make connection 

Case 3 - We traverse twice, one to make a connection and one our normal one to add elemenet,
so when we move right, we can have 2 case
1)right ==null, we will make the connection to parent , and then get back to original traversal of adding elements
2)right===curr, once we make the connection , traversal print element , and try to come back to parent with our connection, this will be case , so now we will first break this thread and now the thread existed so we know our left tree is visited  so we can move to right
 */

//Do Dry Run
const {tree,Node} = require('./0tree-101/insert-tree')
function morrisInOrderTraversal(node){
  let current=node;
  const arr=[];
  while(current!==null){
    //Case 1  if no left, print current, move to right;
    if(current.left===null){
      arr.push(current.value);
      current=current.right;
    }else{
      //Case 2 , we will move to the right most guy to make the connection to it's parent
      let travelRight=current.left;
      //it shouldn't be equal to parent , if it is 
      while(travelRight.right && travelRight.right!==current){
        travelRight=travelRight.right;
      }
      if(travelRight.right===null){
        travelRight.right=current; //making connection to parent
        current=current.left; //continue travel
      }else{
        travelRight.right=null; //breaking  connection to parent
         //travelling now to right , as we know our left side is visited due to the exitense of our connection before
         //as we are moving right print the root before
         arr.push(current.value)
         current=current.right;
      }

    }
  }
  return arr;

}



function morrisPreOrderTraversal(node){

  //Before Moving to the right root should as left doesn't exist hence it won't change
  //Also when make the connection the root , and root is first added in PreOrder , then it should be added then  as well
  let current=node;
  const arr=[];
  while(current!==null){
    if(current.left===null){
      arr.push(current.value);
      current=current.right;
    }else{
    
      let travelRight=current.left;
 
      while(travelRight.right && travelRight.right!==current){
        travelRight=travelRight.right;
      }
      if(travelRight.right===null){
        travelRight.right=current; 
        arr.push(current.value) //just 1 line change
        current=current.left;
      }else{
        travelRight.right=null; 
        //  arr.push(current.value)  //just 1 line change
         current=current.right;
      }

    }
  }
  return arr;

}



const ans=morrisInOrderTraversal(tree.root);
console.log(ans);

