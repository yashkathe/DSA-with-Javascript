/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

const productOfArray = (arr) => {
    if (!arr.length) return 1
    console.log(arr[0])
    return arr[0] * productOfArray(arr.slice(1))
}

const answer = productOfArray([1,2,3,4,5])
console.log(answer)