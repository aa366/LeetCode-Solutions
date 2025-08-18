
// ARRAYS

class MyArray {
    length: number;
    data: Object


    constructor() {
        this.length = 0;
        this.data = {};
    };


    push = function (...item) {
        for (let i = 0; i < item.length; i++) {
            this.data[this.length] = item[i]
            this.length++

        }

    }
    get = function (index: number) {
        return this.data[index]

    }
    pop = function () {


        const result = this.data[this.length - 1]
        delete this.data[this.length - 1]
        if (this.length) { this.length-- }


        return result

    }
    shift = function () {
        const firstItem = this.data[0]
            , replacer = {};
        delete this.data[0]
        this.length--



        for (let i = 0; i < this.length; i++) {

            replacer[i] = this.data[i + 1]
        }
        this.data = { ...replacer }
        return firstItem
    }
    remove = (index: number) => {

        const item = this.data[index]
            , turns = (this.length - (1 + index));

        for (let i = index; i <= turns; i++) {
            this.data[i] = this.data[i + 1]


        }
        delete this.data[this.length - 1];
        this.length--

        return item


    }
    reverse = (index: number) => {

        // "".split("").reverse().join("")
        const item: string | number = this.data[index]

        if (!(typeof item === "string" || typeof item === "number")) {
            return null

        }
        const stringItem = String(item)
        let holder = "";



        for (let i = stringItem.length; i >= 0; i--) {
            if (!holder) {
                holder = stringItem[i]
                continue
            }
            holder = holder + stringItem[i]



        }
        return holder

    }
    plaindromes = (item: string | number) => {
        if (typeof item === "number") {
            item = String(this.data[item])
        }
        let start = 0,
            end = item.length - 1

        while (start !== end && start < end) {

            if (item[start] !== item[end]) {

                return false

            }

            start++
            end--
        }

        return true

    }
}
const myNewArray = new MyArray();
myNewArray.push("bananna", "apple", "mango", "pineapples", "dfasd")


console.log(myNewArray.plaindromes("cddc"));













