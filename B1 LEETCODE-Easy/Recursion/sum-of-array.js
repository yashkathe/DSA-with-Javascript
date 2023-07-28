/*
assert.strictEqual(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
*/

function arrayPlusArray(arr1, arr2) {

    if(arr1.length === 0 && arr2.length === 0) return 0;
    return arr1[ 0 ] + arr2[ 0 ] + arrayPlusArray(arr1.slice(1), arr2.slice(1));

}