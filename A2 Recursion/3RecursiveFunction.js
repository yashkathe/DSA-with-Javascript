// 2. SECOND RECURSIVE FUNCTION

function sumRange(num){
    if(num === 1) return 1
    return num + sumRange(num-1)
}

const answer = sumRange(3)
console.log(answer)


/*
CALLSTACK
goes like this ===================================>      ^ 
                                                        |
return 3 + sumRange(2)                                 |
                return 2 + sumRange(1)                |
                                    return 1         |

*/

// ----------------------------------------------------------------
