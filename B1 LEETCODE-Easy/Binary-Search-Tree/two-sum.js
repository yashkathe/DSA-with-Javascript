/*

Given the root of a binary search tree and an integer k, return true if there exist two elements in the BST such that their sum is equal to k, or false otherwise.

Example 1:

Input: root = [5,3,6,2,4,null,7], k = 9
Output: true

Example 2:

Input: root = [5,3,6,2,4,null,7], k = 28
Output: false


*/

var findTarget = function(root, k) {
    
    let data = []

    const traverse = (node) => {
        
        if(node.left) traverse(node.left)

        data.push(node.val)

        if(node.right) traverse(node.right)
    }

    traverse(root)

    for(let i=0; i < data.length - 1 ; i++ ){

        for( let j = i+1; j < data.length ; j++ ){
            if( data[i] + data[j] === k ){
                return true
            }
        }    

    }
    
    return false

};