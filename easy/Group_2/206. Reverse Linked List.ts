


/*  
Given the head of a singly linked list, reverse the list, and return the reversed list.
*/ 


class ListNode {
      val: number
      next: ListNode | null
      constructor(val?: number, next?: ListNode | null) {
          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
      }
  }

function reverseList(head: ListNode | null): ListNode | null {
   

    let next:any = null,
     prevHead = head;
    //  create two pointer one for next  other the previous node 
    
    while(prevHead!==null){
        

        next= new ListNode(prevHead.val,next)
        
        prevHead = prevHead.next;

    }
    return next
};

function validateTest(arr:number[]):ListNode{
    if (arr.length === 0) {
        return new ListNode()
    }


    let head :ListNode = new ListNode(arr[0])
    let pre:ListNode|null = null
  
    const list : ListNode[] = []
    


    for (let i = arr.length-1; i >= 0; i--) {

       const node = new ListNode(arr[i],pre)
        pre = node 
          list.push(node)  
    }
    
head = list[list.length-1]


    return head

}

console.log( reverseList(validateTest([1,2,3,4,5])) );
console.log( reverseList(validateTest([1,2])   ));
console.log(  reverseList(validateTest([]))  );











