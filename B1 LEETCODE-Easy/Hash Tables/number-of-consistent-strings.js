/*
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.

Example 1:

Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
Output: 2
Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

Example 2:

Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
Output: 7
Explanation: All strings are consistent.

Example 3:

Input: allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
Output: 4
Explanation: Strings "cc", "acd", "ac", and "d" are consistent.

*/

var countConsistentStrings = function(allowed, words) {
    let set = new Set(allowed);

    return words.reduce((a, word) => word.split('').every(letter => set.has(letter)) ? ++a : a, 0);
};

/*
If all characters in the word are allowed (condition is true), then ++a is executed, which increments the accumulator a.
If not all characters are allowed (condition is false), then a remains unchanged.
*/