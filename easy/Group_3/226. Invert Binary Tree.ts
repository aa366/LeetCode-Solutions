


// problem => Given the root of a binary tree, invert the tree, and return its root.

 

/**
 * Definition for a binary tree node.
*/
 class TreeNode {
     val: number
     left: TreeNode | null
     right: TreeNode | null
     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.left = (left===undefined ? null : left)
         this.right = (right===undefined ? null : right)
     }
 }
 

function invertTree(root: TreeNode | null): TreeNode | null {
    if (!root) return null;

    const right = root.right;
// save the right of the node in varibale 

    root.right = invertTree(root.left);
    root.left = invertTree(right);
    // callback and replace 
    return root;
}

function validateTest(arr:number[]):TreeNode |null{
    if (!arr) {
        return null
    }

    let head:TreeNode |null =null
    let left : TreeNode|null = null ;


    for (let i = 0; i < arr.length; i++) {
        const node = new TreeNode(arr[i], left , null)

        if (left) {
            left.right = node
        }
        
        left = node  
        if (i === 0 ) {
            head = node
        }

        

        
    }
    return head

}


console.log(invertTree(validateTest([4,2,7,1,3,6,9])));
console.log(invertTree(validateTest([2,1,3])));
