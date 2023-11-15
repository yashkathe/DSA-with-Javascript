/*
Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the nodes you can see ordered from top to bottom.

 

Example 1:

Input: root = [1,2,3,null,5,null,4]
Output: [1,3,4]

Example 2:

Input: root = [1,null,3]
Output: [1,3]

Example 3:

Input: root = []
Output: []

*/

var rightSideView = function (root) {
	let result = [];
	let queue = [];
	queue.push(root);

	while (queue.length) {
		let rightSideElem;
		let queueLen = queue.length;

		for (let i = 0; i < queueLen; i++) {
			node = queue.shift();
			if (node) {
				rightSideElem = node;
				queue.push(node.left);
				queue.push(node.right);
			}
		}

		if (rightSideElem) result.push(rightSideElem.val);
	}

	return result;
};
