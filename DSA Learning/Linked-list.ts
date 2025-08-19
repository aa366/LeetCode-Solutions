// is a linear data structure where elemnts ,called nodes ,arer not stored contiguously in memory  
// Head , tail
class MyNode {
    data: any;
    next: any;

    constructor(value: any) {
        this.data = value
        this.next = null
    }

}
class LinkedList {
    head: any
    tail: any
    length: number

    constructor(value: any) {
        this.head = new MyNode(value)
        this.tail = this.head
        this.length = 1

    }

    push = (val: any) => {
        let newNode = new MyNode(val)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode

        }
        this.tail.next = newNode
        this.tail = newNode
        this.length++

    }
    pop() {
        if (!this.head) {
            return undefined

        }

        let temp: any = this.head
            , prev: any = this.head;
        while (temp.next) {
            prev = temp
            temp = prev.next
        }
        this.tail = prev
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp

    }
    unshift(val: any) {
        let newNode = new MyNode(val)
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this


    }
    shift() {
        let temp = this.head
        this.head = this.head.next
        temp.next = null
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        return temp
    }
    getFirst() {
        return this.head
    }
    getLast() {
        if (!this.head) {
            return null

        }
        let temp = this.head

        while (temp) {

            if (!temp.next) {
                return temp
            }

            temp = temp.next
        }
        return temp
    }
    get(index: number) {
        let temp = this.head, counter = 0

        while (temp) {
            if (counter === index) {
                return temp
            }
            temp = temp.next
            counter++
        }
        return null

    }
    set(index: number, value: any) {
        let temp = this.get(index)
        if (temp) {
            temp.data = value
            return true
        }
        return false

    }
    insert(index: number, value: any) {
        if (index === 0) {
            return this.unshift(value)
        }
        if (index >= this.length) {
            return this.push(value)
        }
        const newNode = new MyNode(value)

        const temp = this.get(index - 1)

        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true

    }
    size(){
        let counter = 0
        let temp = this.head
        while (temp) {
            counter++
            temp = temp.next
        }
        return counter
    }




}


const myLinkedList = new LinkedList(1)

myLinkedList.push(10)
myLinkedList.pop()

console.log(myLinkedList);















