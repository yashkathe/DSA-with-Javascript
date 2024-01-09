/*
Given an array of positive integers nums and a positive integer target, return the minimal length of a
subarray
whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.

Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1

Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/

var minSubArrayLen = function (target, nums) {
    let [l, total] = [0, 0]
    let res = Infinity

    for (let r = 0; r < nums.length; r++) {
        total += nums[r]
        while(total >= target){
            res = Math.min(res, (r - l + 1))
            total -= nums[l]
            l += 1
        }
    }

    return res === Infinity ? 0 : res
};