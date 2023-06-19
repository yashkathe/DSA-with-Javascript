const pivot = (arr, start = 0, end = arr.length) => {

    const pivot = arr[ start ];
    let swapIndex = start;

    for(i = 1; i < arr.length; i++) {
        if(pivot > arr[ i ]) {
            swapIndex++;
            [ arr[ swapIndex ], arr[ i ] ] = [ arr[ i ], arr[ swapIndex ] ];
        }
    }
    [ arr[ swapIndex ], arr[ start ] ] = [ arr[ start ], arr[ swapIndex ] ];

    return swapIndex;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {

    //base case 
    if(left < right) {
        console.log(left,right)
        let pivotIndex = pivot(arr, left, right);
        // left 
        quickSort(arr, left, right = pivotIndex - 1);
        // right
        quickSort(arr, left = pivotIndex + 1, right);
    }
    console.log(arr)
    return arr;
};

quickSort([ 4, 8, 2, 1, 7, 6, 3 ]);

/*
Quick Sort visualise

[4,6,9,1,2,5,3]
[3,2,1,4,6,9,5]
       4
 3,2,1    6,9,5
     3      6
 2,1      5  9
   2
 1
*/