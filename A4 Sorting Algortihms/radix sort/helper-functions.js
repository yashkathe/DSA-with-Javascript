/*
GET DIGIT

            7  3  2  3
index       3  2  1  0

getDigit(7323, 2)
will return ---------------> 3

*/

const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

getDigit(7323, 2);


/*
DIGIT COUNT
returns the number of digits in a number
*/

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

// Using conversion
const digitCount2 = num => {
    return Math.abs(num).toString().length;
};

/*
MOST DIGITS
*/

const mostDigits = (nums) => {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[ i ]));
    }
    return maxDigits;
};