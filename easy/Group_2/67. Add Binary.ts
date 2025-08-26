

/*
1- convert the strings into numbers
2- add them and convert numbers into binary numbers
4- return a string result
*/

function addBinary1(a: string, b: string): string {

    let aNumber = parseInt(a, 2),
        bNumber = parseInt(b, 2);

    let sum = aNumber + bNumber

    let result = sum.toString(2)

    return result
    // problem does not work on big number

};


function addBinary(a: string, b: string): string {
    let result: string = "";

    let carry = 0;

    //   result: Stores the final binary sum
    // carry: Tracks any carry-over value during addition (0 or 1)


    for (
        let i = a.length - 1,
        j = b.length - 1; i >= 0 || j >= 0; i--,
        j--) {
        // start from right to get the smallest value
        // Uses two pointers i and j that move from right to left

        // Continues until both strings are fully processed (i >= 0 || j >= 0)

        const num1 = parseInt(a[i] ?? "0");
        const num2 = parseInt(b[j] ?? "0");
        // Converts each character to a number (0 or 1)

        // Uses nullish coalescing (?? "0") to handle cases where one string is shorter than the other
        
        // nullish coalescing operator (??) is a logical operator in JavaScript that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.

        const sum = num1 + num2 + carry;
        carry = sum > 1 ? 1 : 0;
        // sum: Total of current bits plus any carry from previous addition

// carry: Set to 1 if sum is 2 or 3 (binary addition rules), otherwise 0

        result = (sum % 2 === 1 ? "1" : "0") + result;
        // Appends the current bit to the left of the result

// Uses modulo 2 to determine the current bit value:
    }

    return carry ? "1" + result : result;
    // If there's a remaining carry after processing all bits, adds "1" to the front
};


console.log(addBinary("11", "1"));
console.log(addBinary("1010", "1011"));






