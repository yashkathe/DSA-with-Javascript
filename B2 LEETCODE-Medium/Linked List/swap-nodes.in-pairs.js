/*
Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

 

Example 1:

Input: head = [1,2,3,4]
Output: [2,1,4,3]

Example 2:

Input: head = []
Output: []

Example 3:

Input: head = [1]
Output: [1]

*/

var swapPairs = function(head) {
    if(!head) return head;
    if(!head.next) return head;

    let p1 = head;
    let p2;

    let returnNode = new ListNode(-1);
    let dummyNode = returnNode;

    while(p1) {
        p2 = p1.next;

        if(p1.next) {
            p1.next = p2.next;
            p2.next = p1;

            dummyNode.next = new ListNode(p2.val);
            dummyNode.next.next = new ListNode(p2.next.val);

            dummyNode = dummyNode.next.next;
            p1 = p1.next;
        } else {
            dummyNode.next = new ListNode(p1.val);
            return returnNode.next;
        }
    }

    return returnNode.next;
};

/*
While swapping the nodes I just save the save the value of swapped nodes at that loop
because when the loop goes ahead the pointer also goes ahead so the value returnes is altered so just save values and attach them 
to dummy node
*/

/* Other's Solution with recursion */

var swapPairs = function(head) {
    if(!head || !head.next) return head;
    var v1 = head, v2 = head.next, v3 = v2.next;
    v2.next = v1;
    v1.next = swapPairs(v3);
    return v2;
};
/*

In the given code, the operation v2.next = v1 is part of swapping nodes in a linked list. The purpose of this operation is to reverse the direction of the next pointers of nodes v1 and v2. So, let's see the effect of this operation step-by-step.

Consider the initial state:

rust

1 -> 2 -> 3 -> 4

We have two variables, v1 pointing to node 1 and v2 pointing to node 2.

    v2.next = v1: This means we are making v2 point to v1. After this step:

rust

  v1
   ↓
1 <- 2    3 -> 4
^    ^
v1   v2

As you can see, v2 now points to v1, and we have 2 -> 1.

*/

/* Yet another solution */

var swapPairs = function(head) {
    if(head == null || head.next == null) {
        return head;
    }
    let ans = new ListNode(0);
    ans.next = head;
    let curr = ans;
    while(curr.next != null && curr.next.next != null) {
        let t1 = curr.next;
        let t2 = curr.next.next;
        curr.next = t2;
        t1.next = t2.next;
        t2.next = t1;
        curr = curr.next.next;
    }
    return ans.next;
};