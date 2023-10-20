/*

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

 

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

*/


var generateParenthesis = function(n) {

    let = stack = [];
    let result = [];

    const backtrack = (openN, closeN) => {

        if(openN === n && closeN === n) {
            result.push(stack.join(''));
            result;
        }

        if(openN < n) {
            stack.push('(');
            backtrack(openN + 1, closeN);
            stack.pop();
        }

        if(closeN < openN) {
            stack.push(')');
            backtrack(openN, closeN + 1);
            stack.pop();
        }

    };

    backtrack(0, 0);
    return result;
};

/*
keep a track of open and close paretheses and check the conditions when you ca add both or just one opening parenthesis
*/