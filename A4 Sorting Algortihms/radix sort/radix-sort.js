const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
};

const digitCount = (num) => {
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
};

const mostDigits = (nums) => {
    let maxDigits = 0;
    for(let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[ i ]));
    }
    return maxDigits;
};

const radixSort = (nums) => {
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++) {
        let buckets = Array.from({ length: 10 }, () => []);
        for(let i = 0; i < nums.length; i++) {
            const digit = getDigit(nums[ i ], k); // get digit at units, tens, hundreds place ....
            buckets[ digit ].push(nums[ i ]); // in bucket digit(0,1,2-9) push the following number(12,434,231)
        }
        nums = [].concat(...buckets);
    }
    return nums;
};

radixSort([ 23, 345, 5467, 12, 2345, 9852 ]);