/*
Given the head of a singly linked list, return true if it is a
palindrome
or false otherwise.

 

Example 1:

Input: head = [1,2,2,1]
Output: true

Example 2:

Input: head = [1,2]
Output: false

*/


const reverseLinkedList = (arg) => {

    let current = arg
    
    let next
    let prev = null

    while(current){
        
        next = current.next

        current.next = prev

        prev = current
        current = next
    }

    return prev
}

var isPalindrome = function(head){

    let fast = head
    let slow = head
    let startPointer = head
    let length = 0

    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
        length++
    }

    let mid = reverseLinkedList(slow)
    
    while(length){
        length--
        if(mid.val !== startPointer.val) return false
        mid = mid.next
        startPointer = startPointer.next
    }

    return true
}


/*
refrence: https://www.youtube.com/watch?v=X2R2VZjKqi8
*/