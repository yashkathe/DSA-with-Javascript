/*
Given a number and a binary tree ( not a Binary Search Tree! ):

return True/true if the given number is in the tree
return False/false if it isn't
Each node in the binary tree is either of this Node class or null
*/

// Using breadth first search

function search(n, root) {

    if(!root) return false;

    let queue = [];
    let node = root;

    queue.push(node);

    while(queue.length) {
        node = queue.shift();
        if(node.value === n) return true;

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);
    }

    return false;

}


// Using depth first search

function search(n, root) {
  
    if(!root)return false
    
    if(root.value === n) return true
    
    const leftVal = search(n,root.left)
    const rightVal =  search(n,root.right)
    
    return leftVal || rightVal
    
  }

  /*
  ** The recursion keeps on chaining so ** base case is also chained while execution its not stopped so
   once both children are evaluated with if condition it goes down to last return statement
  */