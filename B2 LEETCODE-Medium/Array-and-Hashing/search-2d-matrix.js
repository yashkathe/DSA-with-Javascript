/*
You are given an m x n integer matrix matrix with the following two properties:

    Each row is sorted in non-decreasing order.
    The first integer of each row is greater than the last integer of the previous row.

Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.

 

Example 1:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3
Output: true

Example 2:

Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
Output: false

*/

var searchMatrix = function (matrix, target) {
	let row = matrix.length;
	let column = matrix[0].length;

	//Binary Search 1

	let topRow = 0;
	let bottomRow = row - 1;

	while (topRow <= bottomRow) {
		let midRow = Math.floor((topRow + bottomRow) / 2);

		if (target > matrix[midRow][column - 1]) {
			// take a look at rightmost value
			// look at rows that are larger than this row
			topRow = midRow + 1;
		} else if (target < matrix[midRow][0]) {
			// take a look at leftmost value
			bottomRow = midRow - 1;
		} else {
			break;
		}
	}
	if (!(topRow <= bottomRow)) return false;

	let l = 0;
	let r = column - 1;
	let midRow = Math.floor((topRow + bottomRow) / 2); // get mid with recalculated topRow and bottomRow

	while (l <= r) {
		let m = Math.floor((l + r) / 2);
		if (target > matrix[midRow][m]) {
			l = m + 1;
		} else if (target < matrix[midRow][m]) {
			r = m - 1;
		} else {
			return true;
		}
	}
	return false;
};
