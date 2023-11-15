/*
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

 

Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

Example 2:

Input: root = [1]
Output: [[1]]

Example 3:

Input: root = []
Output: []


*/

var levelOrder = function (root) {
	let result = [];

	let queue = [];
	queue.push(root);

	while (queue.length) {
		qLength = queue.length;
		let level = [];

		for (let i = 0; i < qLength; i++) {
			let node = queue.shift();
			if (node) {
				level.push(node.val);
				queue.push(node.left);
				queue.push(node.right);
			}
		}

		if (level.length) result.push(level);
	}

	return result;
};
