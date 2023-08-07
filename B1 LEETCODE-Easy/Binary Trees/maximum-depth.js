/*
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3

Example 2:

Input: root = [1,null,2]
Output: 2

*/

var maxDepth = function(root) {

    if(!root) return 0;

    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;

};

/*
      1
     / \
    2   3
   / \
  4   5


  Recursive call maxDepth(root=1):

    Base case: Since root is not null (1), we continue to the recursive step.
    Recursive step: Calculate the depth of the left subtree.
        Recursive call maxDepth(root=2):
            Base case: The left child is not null (2), so we continue to the recursive step.
            Recursive step: Calculate the depth of the left subtree.
                Recursive call maxDepth(root=4):
                    Base case: The left child is not null (4), so we continue to the recursive step.
                    Recursive step: Both left and right children are null, so the depth of the subtree is 0.
            Recursive step: Calculate the depth of the right subtree.
                Recursive call maxDepth(root=5):
                    Base case: Both left and right children are null, so the depth of the subtree is 0.
            Return the maximum of the left and right depths, which is 1 (depth of node 4) or 0 (depth of node 5), plus 1 for the current node (2).
    Recursive step: Calculate the depth of the right subtree.
        Recursive call maxDepth(root=3):
            Base case: Both left and right children are null, so the depth of the subtree is 0.
            Return 0 plus 1 for the current node (3).
    Return the maximum of the left and right depths, which is 2 (depth of node 2) or 1 (depth of node 3), plus 1 for the current node (1).
    The final return value is 3, which is the maximum depth of the binary tree.
*/