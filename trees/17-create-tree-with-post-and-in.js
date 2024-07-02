//https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description
/* 
Given an postorder and inorder arr , construct a unique tree in such a way , that it will fulfill both postorder and inorder traversals

Approach
inorder = [9,3,15,20,7],  (left,root,right)
postorder = [9,15,7,20,3]  (left,right,root)

So if we consider the post order,we go left left left then right then left till we get the element  which don't have left and root , so the root is always the last element,as first we covers the entire left subtree then right one then finally the top most root , so it is safe to 3 will our root and elements previous to it will be on right side 
Steps
1)the last element of postorder will be our root
2)so according to inorder arr  9 will be on left subtree and [15,20,7] on right
3)so postOrder goes left to right so we can check how many elements are there inOrder Left same  no of elements will be in postOrderLeft hence [9] will be on right corner [15,7,20] 


*/
const {tree,Node} = require('./0tree-101/insert-tree')

class createTreeWithPostAndInOrder{
  constructor(){
    this.inOrderIndex=new Map();
  }
  assignIndex(inOrder){
    for (let i = 0; i < inOrder.length; i++) {
    this.inOrderIndex.set(inOrder[i],i); 
    }
  }
  createTree(postOrderArr,postStart,postEnd,inOrderArr,InStart,InEnd){
    if (postStart > postEnd || InStart > InEnd) {
      return null;
  }
    const root=new Node(postOrderArr[postEnd]);

    const index=this.inOrderIndex.get(root.value);

    const numsLeftOfInStart = index - InStart;



    /*PostOrder and Inorder positions for left
      
     


    */
   root.left=this.createTree(postOrderArr,postStart,postStart+numsLeftOfInStart-1,inOrderArr,InStart,index-1)

    /*PostOrder and Inorder positions for right
    */
    root.right=this.createTree(postOrderArr,postStart+numsLeftOfInStart,postEnd-1,inOrderArr,index+1,InEnd)

    return root;

  
  
  };
}

const treeObj=new createTreeWithPostAndInOrder();
const postOrder=[9,15,7,20,3];
const inOrder=[9,3,15,20,7];
treeObj.assignIndex(inOrder)
const ans=treeObj.createTree(postOrder,0,postOrder.length-1,inOrder,0,inOrder.length-1);
console.log(ans);