


// tree is a fundamental hierarchical data structure 
// root => the base node ,leaf => node without any children , full tree => if have exactaly 2 children nodes or none ,
// perfect tree => full tree + balance => all the leaf nodes are at the same depth(distance from the root).this means the tree is completely filled with no gaps at any levels  
// complete tree => almost full levels , left learning last level
// BST (binary search tree) => special kind of binary tree used to organize in a sorted way.
class NODE {

    value;
    left;
    right;

    constructor(value: any) {
        this.value = value
        this.right = null
        this.left = null


    }
}

class BST {
    root;
    constructor(params?) {
        this.root = null
    }
    insert(value) {
        const newNode = new NODE(value)
        if (this.root === null) {
            this.root = newNode
            return this

        }

        let temp: NODE = this.root

        while (1) {
            if (newNode.value === temp.value) {
                return undefined
            }

            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                } else {
                    temp = temp.left
                }

            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                }
                temp = temp.right


            }

        }

    }
    includes(value){
        if (!this.root) {
            return false
            
        }
        let temp:NODE = this.root
        while (temp) {
            if (value < temp.value) {
                temp = temp.left
                
            }else if (value>temp.value){
                temp= temp.right
            }else if (value===temp.value){
                return true
            }
        }
        return false
    }
    // Breadth First Search (BFS)
    bts(){
        let current:NODE = this.root
        let queue:any[]= []
        let data:any[] = []
        queue.push(current)

        while(queue.length){
            current = queue.shift()
            data.push(current.value)
            if(current.left)queue.push(current.left)
            if(current.right)queue.push(current.right)

        }
        return data
    }
    // DFS (preOrder)
    dfs(node :NODE= this.root,data :any[]= []){
            if(!node) return data
            data.push(node.value)
            
            if(node.left)this.dfs(node.left,data)
            if(node.right)this.dfs(node.right,data)
            return data

    }
    dfsPostOrder(node :NODE= this.root,data :any[]= []){
   
            if(!node) return data
           
            
            if(node.left)this.dfs(node.left,data)
            if(node.right)this.dfs(node.right,data)
                 data.push(node.value)
            return data

    }
    dfsInOrder(node :NODE= this.root,data :any[]= []){
   
            if(!node) return data
           
            
            if(node.left)this.dfs(node.left,data)
                     data.push(node.value)
            if(node.right)this.dfs(node.right,data)
            
            return data

    }

}
[].map
const tree = new BST()

tree.insert(5)
tree.insert(8)
tree.insert(3)
tree.insert(1)
tree.insert(7)
tree.insert(9)

tree.insert(4)

// console.log(tree.bts());
console.log(tree.dfsPostOrder());

// console.log(tree.includes(3));

// console.log(tree);

// Recursion => when a function calls itself . but it does not call itself exactly the same way each time

function countDown(num:number) {

    if (!num) {
        return "DONE"
    }
    setTimeout(()=>{
        console.log(num);
        
             countDown(num -1)
    },1000)
   
    
}
function factorial(num:number) {
    return !num?1:num * factorial(num-1)
}

