/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.

 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".

Example 3:

Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".

*/


var backspaceCompare = function(s, t) {
    let stack1 = "";
    let stack2 = "";

    for(let i = 0; i < Math.max(s.length, t.length); i++) {
        if(s[ i ]) {
            if(s[ i ] === "#") stack1 = stack1.slice(0, stack1.length - 1);
            else stack1 += s[ i ];
        }
        if(t[ i ]) {
            if(t[ i ] === "#") stack2 = stack2.slice(0, stack2.length - 1);
            else stack2 += t[ i ];
        }
    }
    return stack1 === stack2 ? true : false;

};