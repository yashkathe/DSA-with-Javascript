/*
Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.

A grandparent of a node is the parent of its parent if it exists.

 

Example 1:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 18
Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.

Example 2:

Input: root = [1]
Output: 0

*/

// BFS Approach

var sumEvenGrandparent = function (root) {
    
    if(!root.val) return

    let sum = 0

    let queue = [root]

    while(queue.length > 0){
        let node = queue.shift()

        if(node.val % 2 === 0){
            if(node.left && node.left.left) sum += node.left.left.val
            if(node.left && node.left.right) sum += node.left.right.val
            if(node.right && node.right.left) sum += node.right.left.val
            if(node.right && node.right.right) sum += node.right.right.val
        }    

        if(node.left) queue.push(node.left)
        if(node.right) queue.push(node.right)    
    }

    return sum

};

// DFS Approach

var sumEvenGrandparent = function (root) {


    let sum = 0

    const dfs = (node , parent, grandParent) => {
        if(!root) return

        if(grandParent && grandParent.val % 2 === 0){
            sum += node.val
        }

        if(node.left) dfs(node.left, node, parent)
        if(node.right) dfs(node.right, node, parent)
    }
    
    dfs(root, null, null)
    return sum

};