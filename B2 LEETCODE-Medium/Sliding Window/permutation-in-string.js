/*
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

In other words, return true if one of s1's permutations is the substring of s2.

 

Example 1:

Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").

Example 2:

Input: s1 = "ab", s2 = "eidboaoo"
Output: false

 

Constraints:

    1 <= s1.length, s2.length <= 104
    s1 and s2 consist of lowercase English letters.


*/

const areMapsEqual = (m1, m2) => {
	for (const [key, value] of m1.entries()) {
		if (!m2.has(key) || m2.get(key) !== value) return false;
	}

	return true;
};

var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) return false;

	let m1 = new Map(); // predefined set
	let m2 = new Map(); // window

	for (let char of s1) {
		m1.set(char, (m1.get(char) || 0) + 1);
	}

	// initialse  window equal to s1, So costructing map equal to length of m1
	for (let i = 0; i < s1.length; i++) {
		m2.set(s2[i], (m2.get(s2[i]) || 0) + 1);
	}

	if (areMapsEqual(m1, m2)) return true;

	for (let r = s1.length; r < s2.length; r++) {
		const charToRemove = s2[r - s1.length];
		const charToAdd = s2[r];

		m2.set(charToRemove, m2.get(charToRemove) - 1); // remove left element

		m2.set(charToAdd, (m2.get(charToAdd) || 0) + 1); // add right element

		if (areMapsEqual(m1, m2)) return true;
	}

	return false;
};
