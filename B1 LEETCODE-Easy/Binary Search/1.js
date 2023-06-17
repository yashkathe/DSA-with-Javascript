/*
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0

*/

// ---------------------------------------------------------------------------------------------------------------------------

// This is linear search 

const countNegatives2 = (grid) => {
    negatives = [];
    for(let i in grid) {
        for(j in grid[ i ]) {
            if(grid[ i ][ j ] < 0) {
                negatives.push(j);
            }
        }
    }
    console.log(negatives);
    return negatives.length;
};

// const answer2 = countNegatives2([ [ 4, 3, 2, -1 ], [ 3, 2, 1, -1 ], [ 1, 1, -1, -2 ], [ -1, -1, -2, -3 ] ]);
// const answer = countNegatives2([3,2],[1,0])
// console.log(answer2)

// ---------------------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------------------

/* using Binary Search  algorithm*/

const countNegatives = (grid) => {
    let count = 0;

    for(let subArr of grid) {
        let start = 0;
        let end = subArr.length - 1;

        while(start <= end) {
            let middle = Math.floor(start + (end - start) / 2);
            console.log(middle)
            if(subArr[ middle ] < 0) {
                count = count + end - middle + 1;
                end = middle - 1;
            } else {
                start = middle + 1;
            }
        }
    }
    return count;
};


const answer = countNegatives([ [ 4, 3, 2, -1 ], [ 3, 2, 1, -1 ], [ 1, 1, -1, -2 ], [ -1, -1, -2, -3 ]]);
console.log(answer)

// ---------------------------------------------------------------------------------------------------------------------------

/*

    

        1.  Check if the value is less than 0
        If so, we have found a negative number. We update our counter by adding right - mid + 1
        as all elements from mid to right will also be negative
        Update right pointer to mid - 1 to search for a negative number in the left half of the row
    
    
        2.  If the value is greater than or equal to 0, this means the negative number are located in the right half of the row
        In this case, we update left pointer to mid + 1 to search in the right half of the row
    
    
        3.  Repeat this process until, left pointer becomes greater than the right pointer indicating, 
        we have found all the negative numbers or that there are no negatives numbers in the row

*/



