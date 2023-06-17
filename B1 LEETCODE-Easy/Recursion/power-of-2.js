var isPowerOfTwo = function(n) {
    if(n == 1) {
        return true;
    } else {
        return false;
    }

    return isPowerOfTwo(n / 2);
};

const ans = isPowerOfTwo(6);
console.log(ans)

/*
2^0 = 1
2^1 = 2
2^2 = 4
2^3 = 8

now suppose n = 8 
reverse  the above process by diving 8 by 2 

so

8 / 2 = 4
4 / 2 = 2
2 / 2 = 1

so if get 1 we know it is a power of 2 
else false


*/