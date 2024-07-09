//https://leetcode.com/problems/insert-into-a-binary-search-tree/description

//Insert a value to maintain the binary tree

const { createTree} = require('../0tree-101/create-tree')
const { Node} = require('../0tree-101/insert-tree')


function insertNode(tree,val){
  let top=tree;
  while(top){
    if(top.value>val){
      if(top.left===null){
        const node=new Node(val);
        top.left=node;
        break;
      }
      top=top.left;
    }else{
      if(top.right===null){
        const node=new Node(val);
        top.right=node;
        break;
      }
      top=top.right;
    }
  }


  return tree;

}

const arr=[4,2,7,1,3];
const tree=createTree(arr);
const ans=insertNode(tree,5);
console.log(ans);
