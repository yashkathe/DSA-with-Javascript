/*
Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.

If the tree has more than one mode, return them in any order.

Assume a BST is defined as follows:

    The left subtree of a node contains only nodes with keys less than or equal to the node's key.
    The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
    Both the left and right subtrees must also be binary search trees.

 

Example 1:

Input: root = [1,null,2,2]
Output: [2]

Example 2:

Input: root = [0]
Output: [0]

*/


var findMode = function(root) {
    
    let data = []
    let queue = []
    let node = root
    let greatest = 0
    let mode = []

    queue.push(node)

    while(queue.length){

      let node = queue.shift()

      let result = data.find(obj => {
        return obj.val === node.val
      })

      if(!result){
        data.push({
          val: node.val,
          counter: 1
        })
      } else {
        result.counter += 1
      }

      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)

    }

    for(i=0; i < data.length; i++){
      
      if(mode.length === 0){
        mode.push(data[i].val)
        greatest = data[i].counter
      }
      else if (data[i].counter === greatest){
        mode.push(data[i].val)
      } 
      else if(data[i].counter > greatest){
        mode = []
        mode.push(data[i].val)
        greatest = data[i].counter
      }


    }

    return mode
}