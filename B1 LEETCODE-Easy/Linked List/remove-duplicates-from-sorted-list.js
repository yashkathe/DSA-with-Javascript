/*
Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

Example 1:

Input: head = [1,1,2]
Output: [1,2]

Example 2:

Input: head = [1,1,2,3,3]
Output: [1,2,3]

*/

var deleteDuplicates = function(head) {
    
    let dummy = new ListNode(-1)
    dummy.next = head

    let curr=dummy
    let post=head

    while(curr && post){
        if(curr.val == post.val){
            removedNode = post.next
            curr.next = post.next
            post = removedNode
        }else{
            curr = post
            post = post.next
        }
    }

    return dummy.next
};

/*
We only move post here in first if statement because
if multiple same elements are together than it will ignore some elements
Hence 
keep current as it is and keep moving the pointer (post) ahead
else
just move both
current as well as post

*/