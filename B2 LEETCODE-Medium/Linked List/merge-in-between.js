/*
You are given two linked lists: list1 and list2 of sizes n and m respectively.

Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

The blue edges and nodes in the following figure indicate the result:

Build the result list and return its head.

 

Example 1:

Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [0,1,2,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

Example 2:

Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.

*/

var mergeInBetween = function(list1, a, b, list2) {

    let part1 = list1;
    let part2 = list1;
    let mid = list2;

    for(i = 0; i <= b; i++) {
        if(i < a - 1) part1 = part1.next;
        if(i < b + 1) part2 = part2.next;
    }

    while(mid.next) {
        mid = mid.next;
    }

    part1.next = list2;
    mid.next = part2;

    return list1;

};

/*
    We can use for loop with nested if loop to set two different pointers and keep going to .next vals
*/