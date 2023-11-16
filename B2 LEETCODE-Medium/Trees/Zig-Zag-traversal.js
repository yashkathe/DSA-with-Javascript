/*
Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[20,9],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []

*/

var zigzagLevelOrder = function (root) {
	let result = [];
	let q = [];
	if (root) q.push(root);

	while (q.length) {
		let level = [];
		let qLen = q.length;

		for (let i = 0; i < qLen; i++) {
			let node = q.shift();

			if (node) level.push(node.val);
			if (node.left) q.push(node.left);
			if (node.right) q.push(node.right);
		}
		if (result.length % 2 === 1) {
			level = level.reverse();
		}
		result.push(level);
	}
	return result;
};
