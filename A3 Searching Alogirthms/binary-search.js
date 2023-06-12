/* 

Binary search, also known as half-interval search, logarithmic search, or binary chop, is a search algorithm that finds the position of a target value within a sorted array. 
Binary search compares the target value to the middle element of the array.

binarySearch(Given Array, The Value that has to be found)
*/

function binarySearch(arr, target) {
    let start = 0;                                  //starting index
    let end = arr.length - 1;                       //ending index
    let middle = Math.floor((start + end) / 2);     //middle index

    // to check if middle directly doesnt give us the target element (because its possible)
    while(arr[ middle ] !== target && start <= end) {
        if(target < arr[ middle ]) {
            end = middle - 1;
        } else { 
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }

    if(arr[ middle ] === target) {
        return arr[ middle ];
    }
    return -1;
}

const answer = binarySearch([ 1, 4, 6, 9, 14, 19, 24, 27, 29, 35, 39 ], 39);
console.log(answer);