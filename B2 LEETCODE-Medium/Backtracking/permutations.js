/*

Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. 

Example 1:

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:

Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:

Input: nums = [1]
Output: [[1]]

*/


var permute = function(nums) {

    let flag = new Array(nums.length).fill(0);
    let chars = [];
    let ans = [];


    const permutation = (k) => {

        if(k === nums.length) {
            ans.push([ ...chars ]);
        }

        else {

            for(let i = 0; i < nums.length; i++) {
                if(flag[ i ] == 0) {
                    chars.push(nums[ i ]);
                    flag[ i ] = 1;
                    permutation(k + 1);
                    chars.pop();
                    flag[ i ] = 0;
                }
            }

        }
    };

    permutation(0);
    return ans;
};

