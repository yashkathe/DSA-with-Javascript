const merge = (arr1, arr2) => {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length) {
        console.log(i, j);
        if(arr2[ j ] >= arr1[ i ]) {
            console.log(i, "Loop1");
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

    console.log("result", results);
    return results;
};

// function for Merge sort

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid)); // mid to end
    console.log(left, "left", right, "right");
    return merge(left, right);
}

mergeSort([ 10, 24, 76, 73]);