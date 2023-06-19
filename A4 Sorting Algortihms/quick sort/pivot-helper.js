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

    console.log(swapIndex);
    return swapIndex;
};


pivot([ 4, 8, 2, 1, 7, 6, 3 ])
/*
[1,2,3,4,5,6,7,8]
returns 3 as index of 4

----------VISAULISE SWAPPING---------------

[4,8,2,1,5,7,6,3]
[4,8,2,1,5,7,6,3] -------> 8 > 4 --------> reamins same
[4,2,8,1,5,7,6,3] -------> 2 < 4 --------> swap 2 and 8
[4,2,1,8,5,7,6,3] -------> 1 < 4 --------> swap 1 and 8
and go on ahead ... 

*/