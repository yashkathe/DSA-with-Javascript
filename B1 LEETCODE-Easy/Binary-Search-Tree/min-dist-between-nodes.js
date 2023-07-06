/*
Minimum Distance Between BST Nodes
3.2K
394

Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.

 

Example 1:

Input: root = [4,2,6,1,3]
Output: 1

Example 2:

Input: root = [1,0,48,null,null,12,49]
Output: 1

*/

var minDiffInBST = function(root) {

    let sortedVal = [];
    let diff = Infinity;

    const traverse = (node) => {

        if(node.left) traverse(node.left);

        sortedVal.push(node.val);

        if(node.right) traverse(node.right);

    };

    traverse(root);

    for(i = 0; i < sortedVal.length - 1; i++) {
        let ans = sortedVal[ i + 1 ] - sortedVal[ i ];
        if(ans < diff) {
            diff = ans;
        }
    }

    return diff;
};