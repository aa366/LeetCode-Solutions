

// data structure use to store key value pairs

// hash function => taking an input of any size (key) and converting it into  a fixed-size value (hash code) that can be used as index within the hash table's internal array . this process of mapping arbitrary keys to fixed-length indices is called hashing
class HashTable {
    keyMap: any[];

    constructor(size = 6) {
        this.keyMap = new Array(size)

    }

    _hashFunction(key: any) {
        let sum = 0;
        const PRIME_NUMBER = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            const charCode = key.charCodeAt(0) - 96
            sum = (sum * PRIME_NUMBER + charCode) % this.keyMap.length


        }
        return sum
    }
    set(key, value) {
        const index = this._hashFunction(key)
        if (!this.keyMap[index]) this.keyMap = []
        this.keyMap.push([key, value])
    }
    get(key) {
        const index = this._hashFunction(key)

        if (this.keyMap[index]) {

            for (let i = 0; i < this.keyMap[index].length; i++) {

                if (this.keyMap[index][0] === key) {

                    return this.keyMap[index][1]

                }
            }
        }
        return undefined
    }
}
const phoneBook = new HashTable(5)

phoneBook.set("asd", "342323-23-4-234")

console.log(phoneBook.get("asd"));


