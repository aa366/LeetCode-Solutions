

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.





/**
 * Definition for singly-linked list.
 */
  class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }
 

function deleteDuplicates(head: ListNode | null): ListNode | null {
    let p = head;
    while(p && p.next) {
        if(p.val === p.next.val) {
            p.next = p.next.next;
        } else {
            p = p.next;
        }
    } 
    return head;
};
        
// make array to Linked list
function validateTest(arr:any[]):ListNode|null {

    let head  ;
    
for (let i = arr.length -1; i >= 0 ; i--) {

     head =  new ListNode(arr[i],head)
     arr[i] = head
   
}

return  head
    
}


console.log(deleteDuplicates(
    validateTest([1,1,2,3,3])
));










