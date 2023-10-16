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

var subsetsWithDup = function(nums) {

    nums.sort((a, b) => a - b);

    let result = [];

    let subset = [];

    const dfs = (i) => {
        if(i >= nums.length) {
            result.push(subset.slice());
            return;
        }

        subset.push(nums[ i ]);
        dfs(i + 1);
        subset.pop();

        while(i < nums.length - 1 && nums[ i ] === nums[ i + 1 ])
            i++;
        dfs(i + 1);

    };

    dfs(0);
    return result;

};

// sort the array and move i forward till you find other element