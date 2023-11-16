/*
Given the root of a binary tree, return all duplicate subtrees.

For each kind of duplicate subtrees, you only need to return the root node of any one of them.

Two trees are duplicate if they have the same structure with the same node values.

 

Example 1:

Input: root = [1,2,3,4,null,2,4,null,null,4]
Output: [[2,4],[4]]

Example 2:

Input: root = [2,1,1]
Output: [[1]]

Example 3:

Input: root = [2,2,2,3,null,3,null]
Output: [[2,3],[3]]

*/

var findDuplicateSubtrees = function (root) {
	let map = new Map();
	let result = [];

	const dfs = (node) => {
		if (!node) return "n";

		let left = dfs(node.left);
		let right = dfs(node.right);

		let subTree = `${node.val},${left},${right}`;

		if (map.has(subTree) && map.get(subTree) === 1) {
			result.push(node);
		}

		map.set(subTree, (map.get(subTree) || 0) + 1);

		return subTree;
	};

	dfs(root);

	return result;
};
