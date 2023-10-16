/*
Given an integer array nums of unique elements, return all possible
subsets
(the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]

*/

var subsets = function(nums) {

    let result = [];

    let subset = [];

    const dfs = (i) => {

        if(i >= nums.length) {
            result.push(subset.slice());
            return;
        }

        // include nums[i]
        subset.push(nums[ i ]);
        dfs(i + 1);

        // decision to not include nums[i]
        // pop the element we just added
        subset.pop();
        dfs(i + 1);

    };

    dfs(0);
    return result;

};

// we have a decison to iclude a letter or ot include it