// HACKER RANK

/*
Example

Input [1,2,3]

Return [3,2,1]

.

Function Description

Complete the function reverseArray in the editor below.

reverseArray has the following parameter(s):

    int A[n]: the array to reverse

Returns

    int[n]: the reversed array

Input Format

The first line contains an integer,
, the number of integers in .
The second line contains space-separated integers that make up .
*/

function reverseArray(a) {
    let newarr = [];
    let length = a.length;

    for(let i = 0; i < length; i++) {
        newarr.push(a.pop());
    }

    return newarr;

}