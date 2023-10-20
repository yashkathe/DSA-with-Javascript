/*
You have n  tiles, where each tile has one letter tiles[i] printed on it.

Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

 

Example 1:

Input: tiles = "AAB"
Output: 8
Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

Example 2:

Input: tiles = "AAABBC"
Output: 188

Example 3:

Input: tiles = "V"
Output: 1

*/


var numTilePossibilities = function(tiles) {

    let result = new Set();
    let flag = [];
    let s = "";

    const backtrack = (tiles) => {

        for(let i = 0; i < tiles.length; i++) {
            if(flag[ i ] != 1) {
                s += tiles[ i ];
                flag[ i ] = 1;
                result.add(s);
                backtrack(tiles);
                flag[ i ] = 0;
                s = s.slice(0, -1);
            }
        }

    };

    backtrack(tiles);
    return (result.size);

};

