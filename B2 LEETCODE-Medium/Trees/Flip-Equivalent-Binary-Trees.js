/*
For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.

A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.

Given the roots of two binary trees root1 and root2, return true if the two trees are flip equivalent or false otherwise.

 

Example 1:
Flipped Trees Diagram

Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
Output: true
Explanation: We flipped at nodes with values 1, 3, and 5.

Example 2:

Input: root1 = [], root2 = []
Output: true

Example 3:

Input: root1 = [], root2 = [1]
Output: false

*/

var flipEquiv = function (r1, r2) {
	if (!r1 && !r2) return true;

	if (!r1 || !r2) return false;

	if (r1.val !== r2.val) return false;

	let sameLeaf = flipEquiv(r1.left, r2.left) && flipEquiv(r1.right, r2.right);
	let oppLeaf = flipEquiv(r1.left, r2.right) && flipEquiv(r1.right, r2.left);

	return sameLeaf || oppLeaf;
};
