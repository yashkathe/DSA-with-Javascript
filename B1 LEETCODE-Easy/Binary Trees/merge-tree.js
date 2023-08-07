/*
You are given two binary trees root1 and root2.

Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

Return the merged tree.

Note: The merging process must start from the root nodes of both trees.

 

Example 1:

Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
Output: [3,4,5,5,4,null,7]

Example 2:

Input: root1 = [1], root2 = [1,2]
Output: [2,2]

*/

// My solution

var mergeTrees = function (root1, root2) {

    if (root1 && !root2 || !root1 && !root2) return root1
    if (!root1 && root2) return root2

    root1.val = root1.val + root2.val

    if (root1.left || root2.left) {
        if (!root1.left) root1.left = new TreeNode(0)
        if (!root2.left) root2.left = new TreeNode(0)
        mergeTrees(root1.left, root2.left)
    }
    if (root1.right || root2.right) {
        if (!root1.right) root1.right = new TreeNode(0)
        if (!root2.right) root2.right = new TreeNode(0)
        mergeTrees(root1.right, root2.right)
    }

    return root1

};

/*  
Problem here was I was checking each and every condition 
I was attaching a zero node wherever there was null
bu instead of returning 0 we can just return t2 node when t1 node is null and vice versa
*/

// Other User's solution

var mergeTrees = function(t1, t2) {
    // goal is to merge t2 to t1
    
    // if one of the node missing, return the other
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    }
    // if both nodes exist, sum the values
    t1.val += t2.val;
    
    // do the same thing for left and right branch
    t1.left = mergeTrees(t1.left, t2.left);
    t1.right = mergeTrees(t1.right, t2.right);
    
    // return the merged t1
    return t1;
};
