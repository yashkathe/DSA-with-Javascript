/*

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:

Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:

Input: nums = [2,0,1]
Output: [0,1,2]

*/

var sortColors = function (nums) {
	const swap = (i, j) => {
		let temp = nums[i];
		nums[i] = nums[j];
		nums[j] = temp;
	};

	let l = 0;
	let r = nums.length - 1;
	let i = 0;

	while (i <= r) {
		if (nums[i] === 0) {
			// case 1
			// SWAP left pointer and i index
			swap(l, i);
			l += 1;
		} else if (nums[i] === 2) {
			// case 2
			swap(i, r);
			r -= 1;
			i -= 1;
		}
		i += 1;
	}

	return nums;
};
