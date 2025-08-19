
class NODE {
    next: any;
    value: any;
   
    constructor(value) {
        this.value = value
        this.next = null
       



    }
}

// stack is alinear data structure that follows LIFO (last in firt out ) principle top bottom or first last node


class Stack {
    first: any;
    length: number;

    constructor(value) {
        const newNode = new NODE(value)
        this.first = newNode
        this.first.next = null
        this.length = 1
    }
    push(value: any) {

        const newNode = new NODE(value)
        if (this.length === 0) {
            this.first = newNode
        } else {
            newNode.next = this.first
            this.first = newNode
        }
        this.length++ 
        return this

    }
    pop(){
        if (this.length ===0) {
            return undefined
        }
        let temp = this.first
        this.first = this.first.next
        this.length--
        temp.next = null
        return temp
    }
    min(){

        if(this.length === 0 ){
            return undefined
        }
        let current = this.first
        let minValue = current.value

        while (current.next) {
            current = current.next
            if (current.value < minValue) {
                minValue = current.value
            }
            
        }
        return minValue 

    }

}

let theStack = new Stack(0)
theStack.push(1)
theStack.push(2)
theStack.pop()



// Queue is a linear data structure that functions like a waiting line  . it folows FIFO (first in first out)

class Queue{

    first:any;
    last:any;
    length:number;

    constructor(value:any) {
        const newNode = new NODE(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }
    enqueue(value:any){
        const newNode = new NODE(value)
        if (this.length === 0) {
            this.first = newNode
            this.last= newNode
            
        }
        this.last.next = newNode;
        this.last = newNode;
        this.length ++ ;
    }
    dequeue(){

        if (!this.length) {
            return undefined
        }

        if (this.length ===1) {
            this.first = null
            this.last = null
        }

        let temp = this.first

        this.first = this.first.next
      
        temp.next = null
        this.length--
        return temp
    }
}

let myQueue = new Queue(0)

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.dequeue()




