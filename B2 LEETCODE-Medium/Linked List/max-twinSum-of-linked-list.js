/*
In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.

    For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2. These are the only nodes with twins for n = 4.

The twin sum is defined as the sum of a node and its twin.

Given the head of a linked list with even length, return the maximum twin sum of the linked list.

 

Example 1:

Input: head = [5,4,2,1]
Output: 6
Explanation:
Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
There are no other nodes with twins in the linked list.
Thus, the maximum twin sum of the linked list is 6. 

*/

const reverseLList = (list) => {
    let pre = null;
    let post;
    let curr = list;

    while(curr) {

        post = curr.next;
        curr.next = pre;
        pre = curr;
        curr = post;
    }

    return pre;
};

var pairSum = function(head) {

    let maxSum = 0;
    let p1 = head;
    let p2 = head;

    while(p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    p1 = reverseLList(p1);

    while(p1 && head) {
        maxSum = Math.max(p1.val + head.val, maxSum);
        p1 = p1.next;
        head = head.next;
    }

    return maxSum;
};  

/*
Created two pointers to divide the list in half 
Reversed the second half of linked list
Then checked MaxSum
*/