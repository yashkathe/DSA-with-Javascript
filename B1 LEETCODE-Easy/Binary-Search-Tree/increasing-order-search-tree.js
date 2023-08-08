/*
Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost 
node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

Example 1:

Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

Example 2:

Input: root = [5,1,7]
Output: [1,null,5,null,7]

*/

var increasingBST = function(root) {

    let head = new TreeNode("dummy");

    let cursor = head;

    const traverse = (node) => {

        if(node.left) traverse(node.left);

        cursor.right = new TreeNode(node.val);
        cursor = cursor.right;

        if(node.right) traverse(node.right);

    };

    traverse(root);

    return head.right;

};

/* We just keep on adding new node to dummy node on right side and shift the cursor */