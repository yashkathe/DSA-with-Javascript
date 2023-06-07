// 5. COLLECT ODD VALUES WITH PURE RECURSION

function collectOddValues(arr) {
    let newArr = []; // resets everytime function runs again

    if(arr.length === 0) {
        return newArr;
    }

    if(arr[ 0 ] % 2 !== 0) {
        newArr.push(arr[ 0 ]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([ 1, 2, 3, 4, 5 ]);


// Second Method 
function collect(arr, res = []) {
    if(!arr.length) return res;
    if(arr[ 0 ] % 2 !== 0) res.push(arr[ 0 ]);

    return collect(arr.slice(1), res);
}

// ----------------------------------------------------------------
