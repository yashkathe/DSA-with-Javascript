/*
Given an array of integers, find the sum of its elements. 
*/

function simpleArraySum(ar) {
    
    if(ar.length === 0) return 0
    
    return ar[0] + simpleArraySum(ar.slice(1))

}