/*
Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

 

Example 1:

Input: s = "abciiidef", k = 3
Output: 3
Explanation: The substring "iii" contains 3 vowel letters.

Example 2:

Input: s = "aeiou", k = 2
Output: 2
Explanation: Any substring of length 2 contains 2 vowels.

Example 3:

Input: s = "leetcode", k = 3
Output: 2
Explanation: "lee", "eet" and "ode" contain 2 vowels.

*/

var maxVowels = function (s, k) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u'])

    let [count, result, l] = [0, 0, 0]

    for (let r = 0; r < s.length; r++) {
        if (vowels.has(s[r])) count += 1

        if ((r - l + 1) > k) {
            if (vowels.has(s[l])) count -= 1
            l += 1
        }

        result = Math.max(count, result)
    }

    return result
};