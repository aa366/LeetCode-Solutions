


// O(n)
// const data = ["ali", "mohamede", "ameir", "abdelwahab", "zeinab"]
function GetStudent(arr: string[], name: string) {
    const result: string[] = [];
    for (const student of arr) {
        if (student === name) {
            result.push(student)
        }
    }
    return result
    // return arr.filter((find)=> find ===name)[0]
}

// o(1)  => Not affect by inputs in time and momery take

const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const getElement = (arr: any[], inedex: number) => arr[inedex]

// O(n^2) => excution time grows quadratically
const data = ["1", "2", "3", "4", "1", "3", "6", "8", "10"]
function findPairsBase(arr: any[]) {
    const result: any[] = [];
    for (let baseItem = 0; baseItem < arr.length; baseItem++) {
        for (let item = 0; item < arr.length; item++) {
            if (!result.includes(arr[item]) && arr[item] === arr[baseItem] && baseItem!=item) {
                result.push(arr[item])
                
            }
        }

    }
    return result

}

// O(log n) => grows logarithmically with the size of inputs