/* 

A linear search or sequential search is a method for finding an element within a list. 
It sequentially checks each element of the list until a match is found or the whole list has been searched.

linearSearch(Given Array, The Value that has to be found)
*/

function linearSearch(arr, val){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([34,51,1,2,3,45,56,687], 100)
