//https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal

/*
 Given an arr of preorder nodes , we have to construct a binary search tree
 
 
 Brute - [8,5,1,7,10,12] , we will take each node and assign like 8 will be root, 5 is less than 8 hence 8's left etc
 T.C - O(N) for each node, and traversal the tree everytime for assigning nodes left right
 O(N) , hence O(N2)


 Optimal
By Using BST property that INORDER TRAVERSAL of BST is sorted , so we have preOrder and InOrder of the tree , we can now construct a tree(done in  16-create-tree-with-pre-and-in)


Best Way would be taking the adv of knowing it is a binary tree


 */
class Node{
  constructor(data){
    this.val=data;
    this.left=null;
    this.right=null;
  }
}

let index=0;
 function createBST(arr,bound){
    if(index>=arr.length || arr[index]>bound){
      return null;
    }
    const node=new Node(arr[index]);
    index++;
    //very imp
     /* 
        8
       /
      5
     /
    1       

    for 7 to be valid 1's left node , it should be less than 1 ,so we passs node.val as bound to be less than
    for 7 to be valid 1's right it should be bigger than 1 but less than 5 hence we pass bound we got previous one . to be 5's right it will be checked with 8 as bound hence valid noe
    for 10 it will be checked with Number.Number.MAX_SAFE_INTEGER as a bound
    */

    //for left it should be less than current value to be  valid so bound would be node.val
    node.left=createBST(arr,node.val);

    //for right it  should be less than the previous node 
    node.right=createBST(arr,bound);


    return node;


 }


 const arr=[1,3];
 const ans=createBST(arr,Number.MAX_SAFE_INTEGER);
 console.log(ans);