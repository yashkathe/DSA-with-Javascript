/*
Insertion sort is a sorting algorithm that places an unsorted element at its suitable place in each iteration. 
Insertion sort works similarly as we sort cards in our hand in a card game. We assume that the first card is 
already sorted then, we select an unsorted card.
*/

const insertionSort = (arr) => {
    // i = 1 because we assume its in correct position
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[ i ];
        let j = i - 1;
        //for loop to look at all the previous items and if they are greater shift them to the right
        while(j >= 0 && arr[ j ] > currentVal) {
            [ arr[ j + 1 ], arr[ j ] ] = [ arr[ j ], arr[ j + 1 ] ];
            j--;
        }
        arr[ j + 1 ] = currentVal;
    }
    console.log(arr);
};

insertionSort([ 14, 54, 23, 43, 19 ]);