//https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal(Hard) do it 2 3 times atleast to understand
/* NOTE 
 
PREORDER+INORDER=UNIQUE BINARY TREE
POSTORDER+INORDER=UNIQUE BINARY TREE
PRE+POST=no unique binary tree

Given an preorder and inorder arr , construct a unique tree in such a way , that it will fulfill both preorder and inorder traversals

Approach
Preorder -[3,9,20,15,7]  (root,left,right)
InOrder -  [9,3,15,20,7]  (left,root,right)

1) so in Preorder root will be always first  ,3 is fixed to be root. (for both preorder and inorder) 
2)so we think about inOrder(try with diagram) we go left left left and once we complete the whole left subtree then we add root so left values of 3(in Inorder arr) ,so these values will be somewhere but confirmed on left side of  root and right on right subtree
3)so in back in preorder we don't know [9,20,15,17] will be on right or left , but we got 9 will be on left and rest will be on right from Inorder arr(from step 2)

 */

const {tree,Node} = require('./0tree-101/insert-tree')
class createTreeWithPreAndInOrder{
  constructor(){
    this.inOrderIndex=new Map();
  }
  assignIndex(inOrder){
    for (let i = 0; i < inOrder.length; i++) {
    this.inOrderIndex.set(inOrder[i],i); 
    }
  }
  createTree(preOrderArr,preStart,preEnd,inOrderArr,InStart,InEnd){
    if (preStart > preEnd || InStart > InEnd) {
      return null;
  }
    const root=new Node(preOrderArr[preStart]);

    const index=this.inOrderIndex.get(preOrderArr[preStart]);

    const numsLeft = index - InStart;



    /*PreOrder and Inorder positions for left
      PreStart- will always increment 1  as we have already taken the current index

      Simple
      Instart - always start from 0 as it is left side
      Inend= end at index -1 as 0 to index-1 so covered the whole left
      
      PreEnd=depend upons how how many element are there in InOrderLeft , that will be my left elments
    */
   root.left=this.createTree(preOrderArr,preStart+1,preStart+numsLeft,inOrderArr,InStart,index-1)

    /*PreOrder and Inorder positions for right
      PreStart- from current Start , till whichever are assigned to left side will be mine

      Simple
      Instart - always start from index+1  as it is right side
      Inend= till the last element, so covering everthing
      
      PreEnd=till the last element o
    */
    root.right=this.createTree(preOrderArr,preStart+numsLeft+1,preEnd,inOrderArr,index+1,InEnd)

    return root;

  
  
  };
}
const treeObj=new createTreeWithPreAndInOrder();
const preOrder=[3,9,20,15,7]
const inOrder=[9,3,15,20,7]
treeObj.assignIndex(inOrder)
const ans=treeObj.createTree(preOrder,0,preOrder.length-1,inOrder,0,inOrder.length-1);
console.log(ans);