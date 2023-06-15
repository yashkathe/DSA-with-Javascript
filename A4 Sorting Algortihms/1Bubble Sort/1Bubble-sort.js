/*
Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through 
the input list element by element, comparing the current element with the one after it, swapping their values if needed
*/


const bubbleSort = (arr) => {
    let noSwaps;
    for(i = arr.length; i > 0; i--) { 
        noSwaps = true;
        for(let j = 0; j < i - 1; j++) { 
            console.log(arr, arr[ j ], arr[ j + 1 ]);
            if(arr[ j ] > arr[ j + 1 ]) {
                [ arr[ j ], arr[ j + 1 ] ] = [ arr[ j + 1 ], arr[ j ] ];
                noSwaps = false;
            }
        }
        console.log('end of loop');
        if(noSwaps) break;
    }
    console.log(arr);
    return arr;
};


// bubbleSort([ 37, 45, 29, 8 ]);

bubbleSort([ 8, 1, 2, 3, 4, 5 ]);