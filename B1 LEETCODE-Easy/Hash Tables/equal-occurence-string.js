/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

 

Example 1:

Input: s = "abacbc"
Output: true
Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.

Example 2:

Input: s = "aaabb"
Output: false
Explanation: The characters that appear in s are 'a' and 'b'.
'a' occurs 3 times while 'b' occurs 2 times, which is not the same number of times.

*/

var areOccurrencesEqual = function (s) {

    let myMap = new Map()
    let arr = []

    for (let i = 0; i < s.length; i++) {

        if (!myMap.has(s[i])) {
            myMap.set(s[i], 1)
        } else if(myMap.has(s[i])) {
            let val = myMap.get(s[i])
            myMap.set(s[i] , val + 1)
        }

    }

    arr = Array.from(myMap.values())
    
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i+1]) return false 
    }

    return true


}

/*
Array.from(myMap.values()) inserts value in arrays 
myMap.values() , myMap.keys() ,  myMap.entries()
*/