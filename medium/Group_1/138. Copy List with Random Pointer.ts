/** problem => 
 A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

Return the head of the copied linked list.

The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
Your code will only be given the head of the original linked list.






 */





  class MyNode {
      val: number
      next: MyNode | null
      random: MyNode | null

      constructor
      (val?: number, next?: MyNode, random?: MyNode) {

          this.val = (val===undefined ? 0 : val)
          this.next = (next===undefined ? null : next)
          this.random = 
          (random===undefined ? null : random)
      }
  }
 

function copyRandomList(head: MyNode | null): MyNode | null {
    if(head == null){
        return null;
    }

    let current :any = head;
    let map = new Map();
    // make new map and  current head variables

    while(current){
        map.set(current, new MyNode(
            current.val,
            current.next,
            current.random));

        current = current.next;

    }
    // add all of node into the map and move pointer untill no more nodes to be equal null

    map.forEach((node)=>{
        // void function excute on every element a function 

        if(node.next){
            node.next = map.get(node.next);
        }
        // if there next node change it to the after next node null or node 

        if(node.random){
            node.random = map.get(node.random);
        }
        // same here 
    })

  return map.get(head);
//   get the head 

};

function validateTest(arr:any  ):MyNode{
    
    if (arr.length === 0) {
        return new MyNode()
    }


    let head :MyNode = new MyNode(arr[0])
    let pre:MyNode|undefined = undefined
  
    const list : MyNode[] = []
    


    for (let i = arr.length-1; i >= 0; i--) {

       const node = new MyNode(arr[i],pre)
        pre = node 
          list.push(node)  
    }
    
head = list[list.length-1]


    return head

}

// logs
{
console.log(
    copyRandomList(
  validateTest( [[7,null],[13,0],[11,4],[10,2],[1,0]])
    )
  
);
console.log(
    
      copyRandomList(
          validateTest(
   
    [[1,1],[2,1]])
    )

  );
console.log(
     copyRandomList(
          validateTest(
    [[3,null],[3,0],[3,null]])
    )
    
  );
}


function copyRandomList1(head: MyNode | null): MyNode | null {
    if(head == null){
        return null;
    }
    let current = head;
    let map = new Map();
    while(current){
        map.set(current, new MyNode(current.val, null, null));
        current = current.next;
    }

    current = head;

    while(current){
        let n = map.get(current);
        n.next = map.get(current.next) || null;
        n.random = map.get(current.random) || null;
        current = current.next;
    }
    
    return map.get(head);

};









