/*
You are given the root of a binary search tree (BST) and an integer val.

Find the node in the BST that the node's value equals val and return the subtree rooted with that node. If such a node does not exist, return null.

 

Example 1:

Input: root = [4,2,7,1,3], val = 2
Output: [2,1,3]

Example 2:

Input: root = [4,2,7,1,3], val = 5
Output: []

*/


var searchBST = function(root, val) {

    let queue = [];

    let node = root;

    queue.push(node);

    while(queue.length) {

        node = queue.shift();

        if(node.val == val) {
            return node;
        }

        if(node.left) queue.push(node.left);
        if(node.right) queue.push(node.right);

    }

    return null;
};

// Using depth first search

var searchBST = function(root, val) {

    if(!root) return null;

    if(root.val === val) return root;

    let leftVal = searchBST(root.left, val);
    if(leftVal) return leftVal;
    let rightVal = searchBST(root.right, val);
    if(rightVal) return rightVal;

    return null;
};