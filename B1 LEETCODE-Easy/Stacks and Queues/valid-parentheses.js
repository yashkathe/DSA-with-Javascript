/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

*/

var isValid = function(s) {
   
    let stack = [];
    
    for(let idx = 0; idx < s.length; idx++) {
        // If open parentheses are present, push it to stack...
        if(s[ idx ] == '{') {
            stack.push('}');
        } else if(s[ idx ] == '[') {
            stack.push(']');
        } else if(s[ idx ] == '(') {
            stack.push(')');
        }
        // If a close bracket is found, check that it matches the last stored open bracket
        else if(stack.pop() !== s[ idx ]) {
            return false;
        }
    }
    return !stack.length;
};

/* 
For every open parenthesis push a closed parenthesis of same type 
If its a closed parentheses check with last value of stack if it matches pop it or else return false
*/