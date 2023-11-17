/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

*/

var longestConsecutive = function (nums) {
	let set = new Set(nums);

	let longest = 0; // what we have to return
	let length = 0; // for keeping track of length in loop

	for (let num of nums) {
		if (!set.has(num - 1)) {
			// start of sequence
			length = 0;
			while (set.has(num + length)) {
				length += 1;
			}
			longest = Math.max(longest, length);
		}
	}

	return longest;
};
