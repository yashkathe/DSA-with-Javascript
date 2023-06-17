const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        console.log(i, j);
        if(arr2[ j ] >= arr1[ i ]) {
            console.log(i , "Loop1");
            results.push(arr1[ i ]);
            i++;
        } else {
            console.log(j, "Loop2");
            results.push(arr2[ j ]);
            j++;
        }
    }

    // if one of the array is exhausted
    while(i < arr1.length) {
        results.push(arr1[ i ]);
        i++;
    }

    while(j < arr2.length) {
        results.push(arr2[ j ]);
        j++;
    }

    console.log(results);
    return results;
};

merge([ 1, 10, 11 ], [ 2, 14, 99, 100 ]);