/*
Given the root of a binary tree, determine if it is a complete binary tree.

In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 

Example 1:

Input: root = [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.

Example 2:

Input: root = [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.

*/
var isCompleteTree = function (root) {
	let q = [];
	if (root) q.push(root);

	while (q.length) {
		let node = q.shift();

		if (node) {
			q.push(node.left);
			q.push(node.right);
		} else {
			// if its false
			//we expect every other value to be null
			while (q.length) {
				let nullNode = q.shift();
				if (nullNode) return false;
			}
		}
	}
	return true;
};
