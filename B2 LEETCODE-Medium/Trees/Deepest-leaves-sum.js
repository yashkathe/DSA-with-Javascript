
/*
Given the root of a binary tree, return the sum of values of its deepest leaves.

 

Example 1:

Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
Output: 15

Example 2:

Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
Output: 19

 
*/

var deepestLeavesSum = function(root) {
    
    let maxLvl = -1
    let sum = 0

    const  dfs = (node , lvl) => {

        if(lvl > maxLvl){
            maxLvl = lvl
            sum = 0
        }

        if(lvl === maxLvl){
            sum += node.val
        }

        if(node.left) dfs(node.left, lvl + 1)
        if(node.right) dfs(node.right, lvl + 1)

    }

    dfs(root, 0)

    return sum

};

// keep checking for max
// if you find a new max change the maxVal and reset the sum
// if its a maxVal then add to sum