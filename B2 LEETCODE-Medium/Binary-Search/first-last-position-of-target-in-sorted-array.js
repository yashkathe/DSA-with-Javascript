/*
Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

Example 2:

Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]

Example 3:

Input: nums = [], target = 0
Output: [-1,-1]

*/

var searchRange = function (nums, target) {
	const binarySearch = (nums, target, leftBias) => {
		let l = 0;
		let r = nums.length - 1;
		let i = -1;

		while (l <= r) {
			let m = Math.floor((l + r) / 2);

			if (target > nums[m]) {
				l = m + 1;
			} else if (target < nums[m]) {
				r = m - 1;
			} else {
				// if we find our target
				i = m;

				if (leftBias) {
					r = m - 1;
				} else {
					l = m + 1;
				}
			}
		}

		return i;
	};

	const left = binarySearch(nums, target, true);
	const right = binarySearch(nums, target, false);

	return [left, right];
};
