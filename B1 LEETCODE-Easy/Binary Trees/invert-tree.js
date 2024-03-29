/*
Given the root of a binary tree, invert the tree, and return its root. 

Example 1:

Input: root = [4,2,7,1,3,6,9]
Output: [4,7,2,9,6,3,1]

       4
     / \
    2   7
   / \ / \
  1  3 6  9

       4
     / \
    7   2
   / \ / \
  9  6 3  1


Example 2:

Input: root = [2,1,3]
Output: [2,3,1]

Example 3:

Input: root = []
Output: []

*/

var invertTree = function(root) {

    if(!root) return null;

    if(root.left) invertTree(root.left);
    if(root.right) invertTree(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;

};


/*
We use post order traversal for this
So we start from bottom subtrees and swap them and come above and above to swap rest of the tree
*/

// WITHOUT TEMP VAR

var invertTree = function(root) {

    if(!root) return null;

    let leftVal = invertTree(root.left);
    let rightVal = invertTree(root.right);

    root.right = leftVal;
    root.left = rightVal;

    return root;

};