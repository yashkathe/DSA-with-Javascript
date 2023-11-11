/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).

 

Example 1:



Input: root = [1,null,3,2,4,null,5,6]
Output: 3
Example 2:



Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
Output: 5
*/

var maxDepth = function (root) {
	if (!root) return 0;
	maximumDepth = 0;

	for (let node of root.children) {
		maximumDepth = Math.max(maximumDepth, maxDepth(node));
	}

	return maximumDepth + 1;
};

// BFS

var maxDepth = function (root) {
	if (!root) return 0;

	let level = 0;
	let queue = [];
	queue.push(root);

	while (queue.length) {
		let levelSize = queue.length; // snapshot of current queue length

		for (let i = 0; i < levelSize; i++) {
			let node = queue.shift();

			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}

		level += 1;
	}

	return level;
};
