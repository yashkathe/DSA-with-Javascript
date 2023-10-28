/*
Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

As a reminder, a binary search tree is a tree that satisfies these constraints:

    The left subtree of a node contains only nodes with keys less than the node's key.
    The right subtree of a node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees must also be binary search trees.
*/

var bstToGst = function (root) {
	let myMap = new Map();
	let sum = 0;

	let dfs = (node) => {
		if (!node) return;

		dfs(node.left);
		sum += node.val;
		myMap.set(node.val, sum);
		dfs(node.right);
	};

	dfs(root);

	console.log(myMap);

	let dfs2 = (node) => {
		if (!node) return;

		node.val = myMap.get(node.val);

		dfs2(node.right);
		dfs2(node.left);
	};

	dfs2(root);
	return root;
};
