/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:

Input: strs = [""]
Output: [[""]]

Example 3:

Input: strs = ["a"]
Output: [["a"]]


*/

var groupAnagrams = function (strs) {
	const map = new Map();

	for (let str of strs) {
		const count = Array(26).fill(0);

		for (let char of str) {
			count[char.charCodeAt(0) - "a".charCodeAt(0)] += 1;
		}
		const key = count.join(",");

		if (!map.has(key)) map.set(key, []);

		map.get(key).push(str);
	}

	return Array.from(map.values());
};
