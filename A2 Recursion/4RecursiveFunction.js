// 3. Factorial

function factorial(num){
    if(num === 1) return 1
    return num * factorial(num-1)
} 

const answer = factorial(6)
console.log(answer)


// ----------------------------------------------------------------
