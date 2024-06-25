class Node{
  constructor(value){
    this.value=value;
    this.left=null;
    this.right=null;
  }
}
class Tree{
  constructor(){
    this.root=null;
  }
  insert(val){
    const newNode=new Node(val);
    if(this.root){
      this.insertRec(this.root,newNode);
    }else{
      this.root=newNode;
      return;
    }
  }
  insertRec(node,newNode){
    if(newNode.value<node.value){
      //move left
      if(node.left===null){
        node.left=newNode;
        return;
      }else{
        this.insertRec(node.left,newNode);
      }
    }else{
      if(node.right===null){
        node.right=newNode;
        return;
      }else{
        this.insertRec(node.right,newNode);
      }
    }
  }
  preOrderTraversal(node,arr){
    if(node===null){
      return arr;
    }
    arr.push(node.value);
    this.preOrderTraversal(node.left,arr);
    this.preOrderTraversal(node.right,arr);
    return arr;
  }
  inOrderTraversal(node,arr){
    if(node===null){
      return arr;
    }
    this.inOrderTraversal(node.left,arr);
    arr.push(node.value);
    this.inOrderTraversal(node.right,arr);
    return arr;
  }
  postOrderTraversal(node,arr){
    if(node===null){
      return arr;
    }
    this.postOrderTraversal(node.left,arr);
    this.postOrderTraversal(node.right,arr);
    arr.push(node.value);
    return arr;
  }
  onLevelTransveral(node,arr){
    if(node===null){
      return arr;
    }
   
    const queue=[];
    queue.push(node);

    while(queue.length>0){
      const size=queue.length;
      const level=[];

      for (let i = 0; i <size; i++) {
        const node=queue.shift();
        level.push(node.value);
        if(node.left){
          queue.push(node.left);
        }
        if(node.right){
          queue.push(node.right);
        }
      }
      arr.push(level);
    }
    return arr;    
  }
  preOrderTraversalIterative(node,arr){
    //Once we get left and right no need to keep node, hence can delete and also we need root only to be printed first
    const levelStack=[];
    levelStack.push(node);
    while(levelStack.length>0){
      const node=levelStack.shift();
       arr.push(node.value);

       if(node.right){
        levelStack.unshift(node.right);
       }
       if(node.left){
        levelStack.unshift(node.left);
       }
      }
      return arr;
    }
    inOrderTraversalIterative(node,arr){
      //We have to go to the last left possible , to print before going back to root
      let levelStack=[];
      levelStack.push(node)
      while(levelStack.length>0){
        let node=levelStack[0];
        if(node.left){
          levelStack.unshift(node.left);
        }else{
          //once we get our non-left , we can print it
          arr.push(node.value)
          levelStack.shift(); //and then remove
          if(node.right){
          levelStack.unshift(node.right);
          }else{
            if(levelStack.length>0){
              levelStack[0].left=null; 
            }
          }

        }
      }
      return arr;
    }
    postOrderTraversalIterative(node,arr){
     //Intution - Checking the recursive function , we know we have to move left->left->left till we get a null then check for right and again check for left once we get that ,  a node which doesn't have both we can print it

     const stackLevel=[];
     let current=node
     while(current!==null ||stackLevel.length>0){
           if(current){
            stackLevel.unshift(current);
            current=current.left;
           }else{
              let temp=stackLevel[0].right;
              if(temp){
                current=temp;
                stackLevel[0].right=null;
              }else{
                //no right or left exists of this element
                const node=stackLevel.shift();
                arr.push(node.value);

                while(stackLevel.length!==0 && stackLevel[0].right &&stackLevel[0].right.value==temp){
                  temp=stackLevel.shift();
                  arr.push(temp)
                }
              }
           }
     }
     return arr;
    }
  }

  




const tree=new Tree()
tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);
// const preOrderArr=tree.preOrderTraversal(tree.root,[]);
// const preOrderArr2=tree.preOrderTraversalIterative(tree.root,[]);
// const InOrderArr=tree.inOrderTraversal(tree.root,[]);
// const InOrderArr2=tree.inOrderTraversalIterative(tree.root,[]);
const postOrderArr=tree.postOrderTraversal(tree.root,[]);
const postOrderArr2=tree.postOrderTraversalIterative(tree.root,[]);
// const BFSInLevelSearchArr=tree.onLevelTransveral(tree.root,[]);

console.log(postOrderArr,postOrderArr2);