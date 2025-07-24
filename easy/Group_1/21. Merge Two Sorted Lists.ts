


//   Definition for singly-linked list.
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    if (list1 === null) return list2;
    else if (list2 === null) return list1;
    // if a list is empty return the other 

    else if (list1.val < list2.val) {
        // if the head of the first array smaller than the seconed array 
        // change the next value of next in the first array  by recall the function (loop) 
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};



// Helper function to create a linked list from an array
function createList(arr: number[]): ListNode | null {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Fixed console.log calls
console.log(
    mergeTwoLists(
        createList([1, 2, 4]),
         createList([1, 3, 4])
        ));

console.log(
    mergeTwoLists(
        createList([]),
         createList([])
        ));
console.log(
    mergeTwoLists(
        createList([]),
         createList([0])
        ));
