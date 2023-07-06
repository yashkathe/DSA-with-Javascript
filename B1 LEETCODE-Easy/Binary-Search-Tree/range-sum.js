/*
Given the root node of a binary search tree and two integers low and high, return the sum of values of all nodes with a value in the inclusive range [low, high].

 

Example 1:

Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
Output: 32
Explanation: Nodes 7, 10, and 15 are in the range [7, 15]. 7 + 10 + 15 = 32.

Example 2:

Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
Output: 23
Explanation: Nodes 6, 7, and 10 are in the range [6, 10]. 6 + 7 + 10 = 23.

*/

// Using BST

var rangeSumBST = function(root, low, high) {
    
    let queue = []
    let sum = 0

    let node = root 
    queue.push(node)

    while(queue.length){

        node = queue.shift()

        console.log(node.val)

        if(node.val >= low && node.val <= high){
            
            sum = sum + node.val
        }

        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)

    }

    return sum

};

// Using DST

var rangeSumBST = function(root, low, high) {
    
    let sum = 0 

    function traverse(node){
        if(node.val >= low && node.val <= high){
            sum += node.val
        }

        if(node.left) traverse(node.left)
        if(node.right) traverse(node.right)
    } 

    traverse(root)

    return sum

};