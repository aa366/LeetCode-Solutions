
// problem => Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.

 


class MinStack {
    private stack :any[]

    constructor() {
        this.stack = []
    }

    push(val: number): void {
        this.stack.push(val)
    }

    pop(): void {
        this.stack.pop()
    }

    top(): number {
     return this.stack.at(-1)  
    } 

    getMin(): number {
        return Math.min(...this.stack)
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */








