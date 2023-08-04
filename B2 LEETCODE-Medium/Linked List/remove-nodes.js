/*
You are given the head of a linked list.

Remove every node which has a node with a strictly greater value anywhere to the right side of it.

Return the head of the modified linked list.

 

Example 1:

Input: head = [5,2,13,3,8]
Output: [13,8]
Explanation: The nodes that should be removed are 5, 2 and 3.
- Node 13 is to the right of node 5.
- Node 13 is to the right of node 2.
- Node 8 is to the right of node 3.

Example 2:

Input: head = [1,1,1,1]
Output: [1,1,1,1]
Explanation: Every node has value 1, so no nodes are removed.

*/

var removeNodes = function(head) {
    const stack = [];

    while(head) {
        while(stack.length && head.val > stack[ stack.length - 1 ]) {
            stack.pop();
        }
        stack.push(head.val);
        head = head.next;
    }

    /* Important v*/
    while(stack.length) {
        head = new ListNode(stack.pop(), head);
    }

    return head;
};

/*
Used stacks to construct a array and created a linked list from the stack
We keep popping the values in stack if value is grater in right as given in the question
 
*/