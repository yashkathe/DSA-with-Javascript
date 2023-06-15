/*
Selection sort is an effective and efficient sort algorithm based on comparison operations.
It adds one element in each iteration. You need to select the smallest element in the array 
and move it to the beginning of the array by swapping with the front 
*/

const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[ j ] < arr[ lowest ]) {
                lowest = j;
            }
        }
        if( i !== lowest) {
            // only swap if a lower value exists
            [ arr[ i ], arr[ lowest ] ] = [ arr[ lowest ], arr[ i ] ];
        }
    }
    console.log(arr);
    return arr;
};

selectionSort([ 34, 22, 10, 19, 17 ]);